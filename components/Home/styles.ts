import styled from "@emotion/styled";

const ArticleContainerWrapper = styled("div")(() => ({
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    height: "80%",
    marginTop: "50px",
}));

const FilterButtonsContainer = styled("div")(() => ({
    display: "fixed",
    justifyContent: "space-between",
    margin: "10px 0",
    height:"50px",

}));

const Container = styled("div")(() => ({
    backgroundColor: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

const ArticleContainer = styled("div")(() => ({
    border: "1px solid #000",
    margin: "10px",
    padding: "10px",
    backgroundColor: "white",
    width: "100%",
    color: "#000",
}));

const FilterButton = styled("button")(() => ({
    backgroundColor: "transparent",
    border: "1px solid #000",
    borderRadius: "25px",
    padding: "10px 20px",
    margin: "10px",
    cursor: "pointer",
    color: "#000",
}));


export { ArticleContainer, ArticleContainerWrapper, Container, FilterButton, FilterButtonsContainer, Menu };
