import styled from "@emotion/styled";

interface DialogContentsProps {
  minWidth?: React.CSSProperties["minWidth"];
  noPadding?: boolean;
  maxHeight?: React.CSSProperties["maxHeight"];
}

const DialogContents = styled("div")<DialogContentsProps>(
  ({ minWidth, noPadding, maxHeight }) => ({
    padding: noPadding ? undefined : 16,
    maxHeight: maxHeight ? maxHeight : "80vh",
    overflow: "hidden auto",
    minWidth,
  }),
);

export default DialogContents;
