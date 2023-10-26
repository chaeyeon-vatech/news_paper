import styled from "@emotion/styled";
import { Stack } from "ui/components";

const mobileBreakpoint = "600px"; // 반응형 디자인에서 모바일 기준 폭
const tabletBreakpoint = "768px"; // 반응형 디자인에서 태블릿 기준 폭

const ArticleBox = styled("div")(() => ({
  border: "1px solid #000",
  margin: "10px",
  display: "flex",
  backgroundColor: "white",
  color: "#000",
  padding: "0.625rem 1.25rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
  justifyContent: "space-between",
  borderRadius: "0.5rem",
  background: "var(--White-90, #FEFEFE)",
  width: "100%",
  height: "auto",
  [`@media (min-width: ${mobileBreakpoint})`]: {
    width: "calc(50% - 20px)",
  },
  [`@media (min-width: ${tabletBreakpoint})`]: {
    width: "calc(33.33% - 20px)",
  },
}));

const ArticleContainer = styled("div")(() => ({
  flex: 1,
  height: "100%",
  width: "100%",
  backgroundColor: "#F0F1F4",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));


const ArticleTitleContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const ArticleTitleTypography = styled("div")(() => ({
  color: "var(--Black-100, #000)",
  width: "15rem",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "1.75rem",
  letterSpacing: "-0.05625rem",
  textTransform: "uppercase",
  display: "-webkit-box",
  "-webkit-line-clamp": 2, // 두 줄까지 표시
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
  padding: 10,
}));


const ArticleAuthorTypography = styled("div")(() => ({
  height: "2.5rem",
  width: "15rem",
  color: "var(--Black-100, #000)",
  fontSize: "0.8125rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1.25rem",
  alignSelf: "flex-end",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  justifyContent: "flex-end",
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
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "3.75rem",
  background: "var(--White100, #FFF)",
  borderBottom: "1px solid var(--Gray, #C4C4C4)",
}));

// const DateTypography = styled("div")<{ noMargin?: boolean }>(
//   ({ theme, noMargin }) => ({
//     margin: noMargin ? undefined : 16,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "end",
//   }),
// );

const MenuContainer = styled("div")(() => ({
  width: "100%",
  height: "5.31rem",
  flexShrink: 0,
  position: "fixed",
  backgroundColor: "#333",
  color: "white",
  bottom: 0,
  left: 0,
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid var(--Gray, #C4C4C4)",
  fontSize: "0.875rem",
  borderRadius: "1.87rem",
  [`@media (min-width: ${mobileBreakpoint})`]: {
    width: "90%",
  },
  [`@media (min-width: ${tabletBreakpoint})`]: {
    width: "80%",
  },
}));

const Menu = styled(Stack)(() => ({
  display: "flex",
  alignItems: "center",
  flex: "1",
  justifyContent: "center",
  marginLeft: "1rem",
  marginRight: "1rem",
}));

export {
  ArticleBox,
  ArticleContainer,
  ArticleTitleContainer,
  ArticleTitleTypography,
  ArticleAuthorTypography,
  FilterButton,
  FilterContainer,
  MenuContainer,
  Menu,
};
