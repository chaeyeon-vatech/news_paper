import { ArticleType } from "../types";

const dbName = "nytimesDB";
const dbVersion = 1;


export interface ArticleContainer {
  id?: number;
  name: string;
  title: string;
  createdAt?: Date;
  articles: ArticleType[];
}

async function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);

    request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      const db = (e.target as IDBOpenDBRequest).result;

      const articlesStore = db.createObjectStore("articles", {
        keyPath: "id",
      });

      articlesStore.createIndex("id", "id", { unique: true });
      articlesStore.createIndex("name", "name", { unique: false });
    };

    request.onsuccess = (e: Event) =>
      resolve((e.target as IDBOpenDBRequest).result);
    request.onerror = (e: Event) =>
      reject((e.target as IDBOpenDBRequest).error);
  });
}

async function addScrapedArticle(articles: ArticleType[]) {
  const db = await openDB();
  const transaction = db.transaction("articles", "readwrite");
  const store = transaction.objectStore("articles");
  const request = store.add({ ...articles });

  return new Promise((resolve, reject) => {
    request.onsuccess = (e: Event) => {
      resolve((e.target as IDBRequest).result);
    };

    request.onerror = (e: Event) => {
      reject((e.target as IDBRequest).error);
    };
  });
}

async function updateArticle(room: ArticleContainer): Promise<unknown> {
  const db = await openDB();
  const transaction = db.transaction("articles", "readwrite");
  const store = transaction.objectStore("articles");

  const request = store.put(room);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(null);
    };
    request.onerror = () => {
      reject(null);
    };
  });
}

async function getOrCreateArticleById(id: number): Promise<unknown> {
  const db = await openDB();
  const transaction = db.transaction("articles", "readwrite");
  const store = transaction.objectStore("articles");
  const request = store.get(id);

  return new Promise((resolve, reject) => {
    request.onsuccess = (e: Event) => {
      const result = (e.target as IDBRequest).result;
      if (result) {
        if (!result.articles) {
          result.articles = [];
        }
        resolve(result);
      } else {
        const newRoom: ArticleContainer = {
          name: "My New Room",
          title: "hello",
          createdAt: new Date(),
          articles: [],
        };
        const addRequest = store.add(newRoom);
        addRequest.onsuccess = () => {
          resolve(newRoom);
        };
        addRequest.onerror = (e) => {
          reject((e.target as IDBRequest).error);
        };
      }
    };

    request.onerror = (e) => {
      reject((e.target as IDBRequest).error);
    };
  });
}

async function deleteScrapedArticle(id: number): Promise<unknown> {
  const db = await openDB();
  const transaction = db.transaction("articles", "readwrite");
  const store = transaction.objectStore("articles");

  const request = store.delete(id);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(null);
    };
    request.onerror = () => {
      reject();
    };
  });
}

async function getAllArticles(): Promise<unknown> {
  const db = await openDB();
  const transaction = db.transaction("articles", "readonly");
  const store = transaction.objectStore("articles");

  return new Promise((resolve, reject) => {
    const request = store.getAll();

    request.onsuccess = (e: Event) => {
      resolve((e.target as IDBRequest).result);
    };

    request.onerror = (e: Event) => {
      reject((e.target as IDBRequest).error);
    };
  });
}

async function addArticle(
  roomId: number,
  article: Omit<ArticleType, "id"> & { name: string }
): Promise<unknown> {
  const db = await openDB();
  const transaction = db.transaction("articles", "readwrite");
  const store = transaction.objectStore("articles");

  const request = store.get(roomId);

  return new Promise(async (resolve, reject) => {
    request.onsuccess = (e: Event) => {
      const room = (e.target as IDBRequest).result as ArticleContainer | undefined;
      if (room) {
        const articles = room.articles || [];
        const newArticle = {
          ...article,
          id: Date.now(),
          timestamp: new Date(),
        };
        articles.push(newArticle);
        // room.articles = articles.sort(
        //   (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
        // );
        const putRequest = store.put(room);
        putRequest.onsuccess = (e: Event) => {
          resolve(newArticle.id);
        };
        putRequest.onerror = (e: Event) => {
          reject((e.target as IDBRequest).error);
        };
      } else {
        reject(new Error(`Room ${roomId} not found`));
      }
    };
  });
}

export {
  addArticle,
  openDB,
  getAllArticles,
  updateArticle,
  addScrapedArticle,
  deleteScrapedArticle,
  getOrCreateArticleById,
};
