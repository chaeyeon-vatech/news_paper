import styled from "@emotion/styled";

const DialogAction = styled("div")<{ noMargin?: boolean }>(
  ({ theme, noMargin }) => ({
    margin: noMargin ? undefined : 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  }),
);

export default DialogAction;
