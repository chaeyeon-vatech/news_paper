import styled from "@emotion/styled";

const ArticleContainerWrapper = styled("div")(() => ({
    flex: 1,
    overflowY: "auto",
    height: "80%",
    marginTop: "50px",

}));

const Container = styled("div")(() => ({
  backgroundColor: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative", // 상대 위치 설정
}));

const Menu = styled("div")(() => ({
    display: "flex",
  justifyContent: "space-around",
  width: "100%",
  padding: "10px",
  backgroundColor: "#333",
  color: "white",
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 1,
}));

const Top = styled("div")(() => ({
  width: "100%",
  color: "white",
  position: "fixed",
  backgroundColor: "white",
  top: 0,
  left: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "flex-start",
  borderBottom: "1px solid #333",
}));

const FilterButton = styled("button")<{ width: string }>(
  ({ width }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "1px solid #000",
    borderRadius: "25px",
    padding: "15px 15px",
    cursor: "pointer",
    color: "#8a8585",
    width: width,
    height: "15px", // 문자열로 지정
    margin: "20px 2px",
  }),
);

const ArticleContainer = styled("div")(() => ({
  border: "1px solid #000",
  margin: "10px",
  padding: "10px",
  //center에 위치하게
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  width: "85%",
  color: "#000",
}));

export { ArticleContainer, ArticleContainerWrapper, Container, FilterButton, Menu, Top };
