import styled from "@emotion/styled";

const ArticleBox = styled("div")(() => ({
  border: "1px solid #000",
  margin: "10px",
  display: "flex",
  backgroundColor: "white",
  width: "20rem",
  height: "6.5rem",
  color: "#000",
  padding: "0.625rem 1.25rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
  justifyContent: "space-between",
}));

const ArticleContainer = styled("div")(() => ({
  flex: 1,
  overflowY: "auto",
  height: "80%",
  marginTop: "50px",
}));

const ArticleTitleContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  height: "80%",
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const ArticleTitleTypography = styled("div")(() => ({
  color: "var(--Black-100, #000)",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "1.75rem",
  letterSpacing: "-0.05625rem",
  textTransform: "uppercase",
  height: "calc(100%-7rem)",
}));

const ArticleAuthorTypography = styled("div")(() => ({
  height: "2.5rem",
  color: "var(--Black-100, #000)",
  fontSize: "0.8125rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.25rem",
  alignSelf: "flex-end", // Align at the end (bottom) of the container,
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const Container = styled("div")(() => ({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative", // 상대 위치 설정
  fontFamily: "Apple SD Gothic Neo",
}));

const FilterButton = styled("button")<{ width: string }>(({ width }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "1.875rem",
  border: "1px solid var(--Gray, #C4C4C4)",
  padding: "0.38rem 0.75rem 0.25rem 0.75rem",
  cursor: "pointer",
  color: "#6D6D6D",
  width: width,
  height: "2.125rem",
  gap: "0.25rem",
  justifyContent: "center",
  fontSize: "0.875rem",
}));

const FilterContainer = styled("div")(() => ({
  width: "23.4375rem",
  height: "3.75rem",
  flexShrink: 0,
  position: "fixed",
  background: "var(--White100, #FFF)",
  top: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid var(--Gray, #C4C4C4)",
  fontSize: "0.875rem",
}));

const MenuContainer = styled("div")(() => ({
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

const Menu = styled("div")(() => ({}));

export {
  ArticleBox,
  ArticleContainer,
  ArticleTitleContainer,
  ArticleTitleTypography,
  ArticleAuthorTypography,
  Container,
  FilterButton,
  FilterContainer,
  MenuContainer,
  Menu,
};
