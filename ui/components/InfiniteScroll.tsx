import styled from "@emotion/styled";
import React, { ReactNode, useCallback, useRef } from "react";

interface StyledScrollbarProps {
  x?: React.CSSProperties["overflowX"];
  y?: React.CSSProperties["overflowY"];
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  barHidden?: boolean;
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
}

const StyledScrollbar = styled("div")<StyledScrollbarProps>(
  ({ theme, x, y, width, height, maxWidth, maxHeight, barHidden = false }) => ({
    width: width ? width : "100%",
    height: height ? height : "100%",
    maxWidth: maxWidth ? maxWidth : "100%",
    maxHeight: maxHeight ? maxHeight : "100%",
    overflowX: x ? x : "auto",
    overflowY: y ? y : "auto",
    "::-webkit-scrollbar": {
      width: barHidden ? 0 : 4,
      height: barHidden ? 0 : 4,
    },
  }),
);

interface InfiniteScrollProps extends StyledScrollbarProps {
  children?: ReactNode;
  currentPage?: number;
  onChangePage?: (index: number) => void;
  viewCount?: number;
}

const InfiniteScroll = (props: InfiniteScrollProps) => {
  const {
    currentPage = 1,
    viewCount = 10,
    onChangePage = () => {},
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);


  const handleResize = useCallback(() => {
    if (ref.current) {
      const scrollTop = ref.current.scrollTop;
      const scrollHeight = ref.current.scrollHeight;
      const clientHeight = ref.current.clientHeight;
      if (
        //  For minimized screen ratio
        (Math.floor(scrollTop + clientHeight) === scrollHeight ||
          Math.ceil(scrollTop + clientHeight) === scrollHeight)
      ) {
        onChangePage(currentPage + 1);
      }
    }
  }, [ref, currentPage, onChangePage]);

  return (
    <StyledScrollbar
      {...rest}
      ref={ref}
      onScroll={() => {
        handleResize();
      }}
    >
      {props.children}
    </StyledScrollbar>
  );
};

export default InfiniteScroll;
