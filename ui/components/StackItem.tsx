import styled from "@emotion/styled";
import React, { memo } from "react";
import { shouldForwardProp } from "../utils/emotion";

interface StackItemProps {
  width?: React.CSSProperties["width"];
  fullWidth?: boolean;
  grow?: React.CSSProperties["flexGrow"];
  fullHeight?: boolean;
  height?: React.CSSProperties["height"];
  position?: React.CSSProperties["position"];
  top?: React.CSSProperties["top"];
  left?: React.CSSProperties["left"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
  shrink?: React.CSSProperties["flexShrink"];
  alignItems?: React.CSSProperties["alignItems"];
  alignSelf?: React.CSSProperties["alignSelf"];
  overflow?: React.CSSProperties["overflow"];
  textAlign?: React.CSSProperties["textAlign"];
}

const StackItem = styled("div", {
  shouldForwardProp: shouldForwardProp([
    "width",
    "fullWidth",
    "grow",
    "fullHeight",
    "height",
    "position",
    "top",
    "backgroundColor",
    "shrink",
    "alignItems",
    "alignSelf",
    "overflow",
    "left",
    "textAlign",
  ]),
})(
  ({
     width,
     fullWidth,
     grow,
     fullHeight,
     height,
     position,
     top,
     backgroundColor,
     shrink,
     alignItems,
     alignSelf,
     overflow,
     left,
     textAlign,
   }: StackItemProps) => ({
    width: fullWidth ? "100%" : width,
    flexGrow: grow,
    height: fullHeight ? "100%" : height,
    position,
    top,
    left,
    backgroundColor,
    flexShrink: shrink,
    alignItems,
    alignSelf,
    overflow,
    textAlign,
  }),
);

export default memo(StackItem);
