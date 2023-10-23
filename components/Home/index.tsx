import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ArticleAuthorTypography,
  ArticleBox,
  ArticleContainer, ArticleTitleContainer,
  ArticleTitleTypography,
  Container,
  FilterButton,
  FilterContainer,
  Menu,
  MenuContainer,
} from "ui/styles/home.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setArticles } from "store/articleSlice";
import { DateIcon, SearchIcon } from "ui/Icons";
import StarIcon from "../../ui/Icons/StarIcon";

function HomeScreen() {
  const articles = useSelector((state: RootState) => state.articles.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/getArticles").then(response => {
      console.log(response);
      dispatch(setArticles(response.data));
    });
  }, [dispatch]);

  const [isScrapped, setIsScrapped] = useState<{ [key: number]: boolean }>({});

  const toggleScrap = (index: number) => {
    setIsScrapped(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Container>
      <FilterContainer>
        <FilterButton width={"8rem"}>
          <SearchIcon width={"1rem"} />
          전체 헤드라인
        </FilterButton>
        <FilterButton width={"7rem"}>
          <DateIcon width={"1rem"} />
          전체 날짜
        </FilterButton>
        <FilterButton width={"5rem"}>전체 국가</FilterButton>
      </FilterContainer>

      <ArticleContainer>
        {articles.map((article, index) => (
          <ArticleBox key={index}>
            <div>
              <ArticleTitleContainer>
                <ArticleTitleTypography>{article.title}</ArticleTitleTypography>
                <StarIcon width={"1.5rem"} height={"1.5rem"} color={"#6D6D6D"} />
              </ArticleTitleContainer>
              <ArticleAuthorTypography>{article.byline}</ArticleAuthorTypography>
            </div>
            <div>
              <DateIcon
                onClick={() => toggleScrap(index)}
                color={isScrapped[index] ? "#00000" : "#FFFF99"}
              />
            </div>
          </ArticleBox>

        ))}
      </ArticleContainer>

      <MenuContainer>
        <Menu>Menu Item 1</Menu>
        <Menu>Menu Item 2</Menu>
        <Menu>Menu Item 3</Menu>
      </MenuContainer>
    </Container>
  );
}

export default HomeScreen;
