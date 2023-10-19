import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArticleType } from "./types";
import {
  ArticleContainer,
  ArticleContainerWrapper,
  Container,
  FilterButton,
  FilterButtonsContainer,
  Menu,
} from "./styles";


function HomeScreen() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    // NEW YORK TIMES API 호출
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=WIYmzfoP2jaYdkpnp1mwFtR7lG9TuQbn")
      .then((response) => {
        // API로부터 받은 데이터를 상태에 설정
        setArticles(response.data.results);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
      });
  }, []);

  return (

    <Container>
        <FilterButtonsContainer>
          <FilterButton>Filter 1</FilterButton>
          <FilterButton>Filter 2</FilterButton>
          <FilterButton>Filter 3</FilterButton>
        </FilterButtonsContainer>


      <ArticleContainerWrapper>
        {articles.map((article, index) => (
          <ArticleContainer key={index}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
          </ArticleContainer>
        ))}
      </ArticleContainerWrapper>

      <Menu>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
        {/* Add more menu items as needed */}
      </Menu>
    </Container>
  );
}

export default HomeScreen;
