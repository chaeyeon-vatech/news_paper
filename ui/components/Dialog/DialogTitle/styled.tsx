import styled from "@emotion/styled";
import { ColorType } from "../../../theme/palette";

interface StyledChipProps {
  color?: ColorType;
}

const Container = styled("div")<StyledChipProps>(({ theme }) => ({
  padding: `12px 24px`,
  backgroundColor: theme.palette.dialogTitle.bgColor,
  color: theme.palette.dialogTitle.color,
  borderRadius: `8px 8px 0 0`,
  display: "flex",
  justifyContent: "space-between",
}));

export default Container;
