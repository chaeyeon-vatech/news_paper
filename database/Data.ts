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


export {
  openDB,
  getAllArticles,
  addScrapedArticle,
};
