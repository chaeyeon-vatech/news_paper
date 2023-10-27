import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ArticleAuthorTypography,
  ArticleBox,
  ArticleContainer,
  ArticleTitleContainer,
  ArticleTitleTypography,
} from "ui/styles/home.styles";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "store";
import { setArticles } from "store/articleSlice";
import LoadingSpinner from "ui/components/LoadingSpinner";
import { Stack, StackItem } from "ui/components";
import { StarIcon } from "ui/components/Icons";
import InfiniteScroll from "ui/components/InfiniteScroll";
import { setPage } from "store/pageSlice";

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

const ArticleList = () => {
  const articles = useSelector((state: StateType) => state.articles.articles);
  const page = useSelector((state: StateType) => state.page) || 1;
  const filter = useSelector((state: StateType) => state.filter);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = "Ne9tWZU7ujb4uERYMY7zVz9Vv7Wujvgd";

  const [apiUrl, setApiUrl] = useState(
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
  );

  const dispatch = useDispatch();

  if (filter.date) {
    const date = formatDate(filter.date);
    setApiUrl(`${apiUrl}&begin_date=${date}&end_date=${date}`);
  }

  if (filter.headline) {
    setApiUrl(`${apiUrl}&q=${filter.headline}`);
  }

  useEffect(() => {
    if (filter) {
      dispatch(setArticles([]));
      dispatch(setPage(0));
    }
  }, [filter, dispatch]);

  useEffect(() => {
    let article_url = `${apiUrl}&page=${page}`;
    setIsLoading(true);

    if (filter.date) {
      article_url = `${article_url}&begin_date=${filter.date}&end_date=${filter.date}`;
    }

    if (filter.headline) {
      article_url = `${article_url}&q=${filter.headline}`;
    }

    axios
      .get(`${article_url}&api-key=${apiKey}`)
      .then(response => {
        dispatch(setArticles([...articles, ...response.data.response.docs]));
      })
      .catch(error => {
        console.error("Error Fetching Article", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, page, apiKey, apiUrl]);

  const [isScrapped, setIsScrapped] = useState<{ [key: number]: boolean }>({});

  const toggleScrap = (index: number) => {
    setIsScrapped(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <InfiniteScroll
      height={"50rem"}
      currentPage={page}
      onChangePage={(page: number) => {
        dispatch(setPage(page + 1));
      }}
      viewCount={10}
    >
      <ArticleContainer>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          articles.map((article, index) => (
            <ArticleBox key={index}>
              <Stack direction={"column"}>
                <StackItem>
                  <Stack direction={"row"}>
                    <StackItem width={"calc(100%-2rem)"}>
                      <ArticleTitleContainer>
                        <ArticleTitleTypography>
                          {article.headline.main}
                        </ArticleTitleTypography>
                      </ArticleTitleContainer>
                    </StackItem>
                    <StackItem
                      width={"1.5rem"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StarIcon width={"1.5rem"} height={"1.5rem"} />
                    </StackItem>
                  </Stack>
                </StackItem>
                <StackItem>
                  <StackItem>
                    <Stack direction={"row"}>
                      <StackItem>
                        <ArticleAuthorTypography>
                          {article.byline.original}
                        </ArticleAuthorTypography>
                      </StackItem>
                      <StackItem></StackItem>
                    </Stack>
                  </StackItem>
                </StackItem>
              </Stack>
            </ArticleBox>
          ))
        )}
      </ArticleContainer>
    </InfiniteScroll>
  );
};

export default ArticleList;
