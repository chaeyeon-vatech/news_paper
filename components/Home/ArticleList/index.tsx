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
import LoadingSpinner from "../../../ui/components/LoadingSpinner";
import { Stack, StackItem } from "ui/components";
import { StarIcon } from "../../../ui/components/Icons";
import InfiniteScroll from "../../../ui/components/InfiniteScroll";
import { setPage } from "../../../store/pageSlice";

const ArticleList = () => {
  const articles = useSelector((state: StateType) => state.articles.articles);
  const page = useSelector((state: StateType) => state.page);
  const [isLoading, setIsLoading] = useState(true); // 초기에 로딩 중으로 설정

  const dispatch = useDispatch();
  const apiKey = "cqbldKeTzGlqBzfele5tcN5BiBoOeeGk"; // 자신의 뉴욕 타임스 API 키로 바꿔주세요.
  const beginDate = "20230101";
  const endDate = "20231025";
  useEffect(() => {
    setIsLoading(true); // 로딩 시작
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&begin_date=${beginDate}&end_date=${endDate}&api-key=${apiKey}`,
      )
      .then(response => {
        console.log(response, "CY");
        dispatch(setArticles([...articles, ...response.data.response.docs]));
      })
      .catch(error => {
        console.log("Error Fetching Article", error);
      })
      .finally(() => {
        setIsLoading(false); // 로딩 완료
      });
  }, [dispatch, page]);

  const [isScrapped, setIsScrapped] = useState<{ [key: number]: boolean }>({});

  const toggleScrap = (index: number) => {
    setIsScrapped(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  console.log("articles", articles);

  return (
    <InfiniteScroll
      height={"50rem"}
      currentPage={page}
      onChangePage={(page: number) => {
        console.log(page)
        dispatch(setPage(page+1));
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
                    </Stack>
                  </StackItem>
                </StackItem>
              </Stack>
            </ArticleBox>

            //         <StackItem
            //           width={"1.5rem"}
            //           style={{
            //             display: "flex",
            //             alignItems: "center",
            //             justifyContent: "center",
            //           }}
            //         >
            //           <StarIcon
            //             width={"1.5rem"}
            //             height={"1.5rem"}
            //             // color={"#d9d983"}
            //             // color={isScrapped[index] ? "#00000" : "#FFFF99"}
            //           />
            //         </StackItem>
            //       </Stack>
            //     </StackItem>
            //
            //     <StackItem>
            //       <Stack direction={"row"}>
            //         <StackItem>
            //           <ArticleAuthorTypography>
            //             {article.byline}
            //           </ArticleAuthorTypography>
            //         </StackItem>
            //       </Stack>
            //     </StackItem>
            //   </Stack>
            // </ArticleBox>
          ))
        )}
      </ArticleContainer>
    </InfiniteScroll>
  );
};

export default ArticleList;
