import styled from "@emotion/styled";

// Define a styled component for the headline
const Headline = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// Define a styled component for the input fields
const Input = styled.input`
  width: 15rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

// Define a styled component for the button
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export { Headline, Input, Button };
