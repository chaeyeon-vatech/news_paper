import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

//keyframe을 만든다
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

export const LoadingSpinner = styled("div")(() => ({
  border: "4px solid rgba(255, 255, 255, 0.3)",
  borderTop: "4px solid #fff",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  animation: `${spin} 1s linear infinite`,
}));

export const LoadingContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40rem",
  width:"100%"
}));
