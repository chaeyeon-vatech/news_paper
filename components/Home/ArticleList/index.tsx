import React, { useEffect, useState } from "react";
import {
  ArticleAuthorTypography,
  ArticleBox,
  ArticleContainer,
  ArticleTitleContainer,
  ArticleTitleTypography,
  DateTypography,
} from "ui/styles/home.styles";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "store";
import LoadingSpinner from "ui/components/LoadingSpinner";
import { Stack, StackItem } from "ui/components";
import { StarIcon } from "ui/components/Icons";
import InfiniteScroll from "ui/components/InfiniteScroll";
import { setPage } from "store/pageSlice";
import { setArticles } from "store/articleSlice";

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

  useEffect(() => {
    setIsLoading(true);

    if (filter.date) {
      setApiUrl(prev => {
        return `${prev}&begin_date=${filter.date}&end_date=${filter.date}`;
      });
    }

    if (filter.headline?.length) {
      setApiUrl(prev => {
        return `${prev}&q=${filter.headline}`;
      });
    }
  }, [dispatch, page]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(setPage(0));

    async function fetchArticles() {
      const response = await fetch(`${apiUrl}&api-key=${apiKey}&page=${page}`);
      const data = await response.json();
      if (data.response?.docs.length > 0) {
        dispatch(setArticles(data.response.docs));
      }
      setIsLoading(false);
    }

    fetchArticles();
  }, [apiUrl, page, filter]);

  // const [isScrapped, setIsScrapped] = useState<{ [key: number]: boolean }>({});
  //
  // const toggleScrap = (index: number) => {
  //   setIsScrapped(prevState => ({
  //     ...prevState,
  //     [index]: !prevState[index],
  //   }));
  // };

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
                      <StackItem>
                        <DateTypography>
                          {article.pub_date.slice(0, 10).replaceAll("-", ".")}
                        </DateTypography>
                      </StackItem>
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
