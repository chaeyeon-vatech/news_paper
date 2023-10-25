import styled from "@emotion/styled";

const Headline = styled("div")(() => ({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "1rem",
}));

const Input = styled("input")(() => ({
  width: "15rem",
  padding: "0.5rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: "1rem",
}));

const Button = styled("button")(() => ({
  backgroundColor: "#007bff",
  color: "white",
  padding: "1rem",
  border: "none",
  borderRadius: "1rem",
  cursor: "pointer",
  width: "100%",
}));

const CountryListFilterContainer = styled("div")(
  (props: { selected: boolean }) => ({
    display: "inline-flex",
    padding: "0.25rem 0.5rem",
    alignItems: "flex-start",
    margin: "0.25rem",
    borderRadius: "2rem",
    backgroundColor: props.selected ? "#82B0F4" : "#fff",
    color: props.selected ? "#fff" : "#6D6D6D",
    border: `1px solid ${
      props.selected ? "#82B0F4" : "var(--White60, #F2F2F2)"
    }`,
    fontSize: "0.875rem",
  }),
);

export { Headline, Input, Button, CountryListFilterContainer };
