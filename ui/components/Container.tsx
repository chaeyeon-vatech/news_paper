import styled from "@emotion/styled";
import React from "react";
import { shouldForwardProp } from "../utils/emotion";

interface Props extends React.ComponentProps<"div"> {
  // children: React.ReactNode;
  display?: React.CSSProperties["display"];
  width?: React.CSSProperties["width"];
  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
  height?: React.CSSProperties["height"];
  fullWidth?: boolean;
  fullHeight?: boolean;
  border?: React.CSSProperties["border"];
  bl?: React.CSSProperties["borderLeft"];
  br?: React.CSSProperties["borderRight"];
  bt?: React.CSSProperties["borderTop"];
  bb?: React.CSSProperties["borderBottom"];
  padding?: React.CSSProperties["padding"];
  pl?: React.CSSProperties["paddingLeft"];
  pr?: React.CSSProperties["paddingRight"];
  pt?: React.CSSProperties["paddingTop"];
  pb?: React.CSSProperties["paddingBottom"];
  zIndex?: React.CSSProperties["zIndex"];
  pointerEvents?: React.CSSProperties["pointerEvents"];
  background?: React.CSSProperties["background"];
  position?: React.CSSProperties["position"];
  top?: React.CSSProperties["top"];
  left?: React.CSSProperties["left"];
  bottom?: React.CSSProperties["bottom"];
  right?: React.CSSProperties["right"];
  label?: string;
  color?: React.CSSProperties["color"];
  borderColor?: React.CSSProperties["color"];
  radius?: React.CSSProperties["borderRadius"];
  margin?: React.CSSProperties["margin"];
  ml?: React.CSSProperties["marginLeft"];
  mr?: React.CSSProperties["marginRight"];
  mt?: React.CSSProperties["marginTop"];
  mb?: React.CSSProperties["marginBottom"];
  btlr?: React.CSSProperties["borderTopLeftRadius"];
  btrr?: React.CSSProperties["borderTopRightRadius"];
  bblr?: React.CSSProperties["borderBottomLeftRadius"];
  bbrr?: React.CSSProperties["borderBottomRightRadius"];
  textAlign?: React.CSSProperties["textAlign"];
  overflow?: React.CSSProperties["overflow"];
}

const Container = styled("div", {
  shouldForwardProp: shouldForwardProp([
    "display",
    "width",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "height",
    "fullWidth",
    "fullHeight",
    "border",
    "bl",
    "br",
    "bt",
    "bb",
    "padding",
    "pl",
    "pr",
    "pt",
    "pb",
    "zIndex",
    "pointerEvents",
    "background",
    "position",
    "top",
    "left",
    "bottom",
    "right",
    "color",
    "borderColor",
    "radius",
    "margin",
    "ml",
    "mr",
    "mt",
    "mb",
    "btlr",
    "btrr",
    "bblr",
    "bbrr",
    "textAlign",
    "overflow",
  ]),
})<Props>(
  ({
     theme,
     width,
     display,
     maxWidth,
     minWidth,
     maxHeight,
     minHeight,
     height,
     fullWidth,
     fullHeight,
     border,
     bl,
     br,
     bt,
     bb,
     padding,
     pl,
     pr,
     pt,
     pb,
     zIndex,
     pointerEvents,
     background,
     position,
     top,
     left,
     bottom,
     right,
     label,
     color,
     borderColor,
     radius,
     margin,
     ml,
     mr,
     mt,
     mb,
     btlr,
     btrr,
     bblr,
     bbrr,
     textAlign,
     overflow,
   }) => ({
    border,
    borderLeft: bl,
    borderRight: br,
    borderTop: bt,
    borderBottom: bb,
    padding,
    paddingLeft: pl,
    paddingRight: pr,
    paddingTop: pt,
    paddingBottom: pb,
    zIndex,
    pointerEvents,
    background,
    position,
    display,
    top,
    left,
    bottom,
    right,
    color: color ? color : theme.palette.paper.color,
    borderColor: borderColor ? borderColor : color,
    label,
    width: fullWidth ? "100%" : width ? width : undefined,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    height: fullHeight ? "100%" : height ? height : undefined,
    borderRadius: radius,
    margin,
    marginLeft: ml,
    marginRight: mr,
    marginTop: mt,
    marginBottom: mb,
    borderTopLeftRadius: btlr,
    borderTopRightRadius: btrr,
    borderBottomLeftRadius: bblr,
    borderBottomRightRadius: bbrr,
    textAlign,
    overflow,
  }),
);

export default Container;
