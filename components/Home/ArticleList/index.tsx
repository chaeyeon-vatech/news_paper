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
import { StarIcon } from "ui/components/Icons";
import LoadingSpinner from "../../../ui/components/LoadingSpinner";
import { Stack, StackItem } from "ui/components";

const ArticleList = () => {
  const articles = useSelector((state: StateType) => state.articles.articles);
  const [isLoading, setIsLoading] = useState(true); // 초기에 로딩 중으로 설정

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true); // 로딩 시작
    axios
      .get("/api/getArticles")
      .then(response => {
        dispatch(setArticles(response.data));
      })
      .catch(error => {
        console.error("Error Fetching Article", error);
      })
      .finally(() => {
        setIsLoading(false); // 로딩 완료
      });
  }, [dispatch]);

  const [isScrapped, setIsScrapped] = useState<{ [key: number]: boolean }>({});

  const toggleScrap = (index: number) => {
    setIsScrapped(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  console.log("articles", articles);

  return (
    <ArticleContainer>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        articles.map((article, index) => (
          <ArticleBox key={index}>
            <Stack direction={"column"}>
              <StackItem>
                <Stack direction={"row"} fullWidth fullHeight>
                  <StackItem width={"calc(100%-2rem)"}>
                    <ArticleTitleContainer>
                      <ArticleTitleTypography>
                        {article.title}
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
                    <StarIcon
                      width={"1.5rem"}
                      height={"1.5rem"}
                      // color={"#d9d983"}
                      // color={isScrapped[index] ? "#00000" : "#FFFF99"}
                    />
                  </StackItem>
                </Stack>
              </StackItem>

              <StackItem>
                <Stack direction={"row"}>
                  <StackItem>
                    <ArticleAuthorTypography>
                      {article.byline}
                    </ArticleAuthorTypography>
                  </StackItem>
                </Stack>
              </StackItem>

              {/*<div>*/}
              {/*  <DateIcon*/}
              {/*    onClick={() => toggleScrap(index)}*/}
              {/*    color={isScrapped[index] ? "#00000" : "#FFFF99"}*/}
              {/*  />*/}
              {/*</div>*/}
            </Stack>
          </ArticleBox>
        ))
      )}
    </ArticleContainer>
  );
};

export default ArticleList;
