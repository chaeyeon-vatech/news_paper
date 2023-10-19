import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArticleType } from "./types";
import { ArticleContainer, ArticleContainerWrapper, Container, FilterButton, Menu, Top } from "./styles";
import SearchIcon from "../../ui/Icon/icons/SearchIcon";
import DateIcon from "../../ui/Icon/icons/DateIcon";


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

      <Top>
        <FilterButton width={"9rem"}><SearchIcon width={20} />전체 헤드라인</FilterButton>
        <FilterButton width={"8rem"}><DateIcon width={20} />전체 날짜</FilterButton>
        <FilterButton width={"6rem"}>전체 국가</FilterButton>
      </Top>

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
      </Menu>
    </Container>
  );
}

export default HomeScreen;
