import Dialog, {
  DialogAction,
  DialogContents,
} from "../../../ui/components/Dialog";
import Stack from "../../../ui/components/Stack";
import StackItem from "../../../ui/components/StackItem";
import { Button, Headline, Input } from "../../../ui/styles/filter.styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../store";
import { closeDialog } from "../../../store/dialogSlice";

const SearchFilterDialog = () => {
  const isDialogOpen = useSelector((state: StateType) => state.dialog.isOpen);
  const dialogContent = useSelector((state: StateType) => state.dialog.content);
  const countryList = [
    "대한민국",
    "중국",
    "일본",
    "미국",
    "북한",
    "러시아",
    "프랑스",
    "영국",
  ];

  const dispatch = useDispatch();
  // 다이얼로그 닫기
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogContents>
        <Stack direction={"column"} fullWidth fullHeight>
          <StackItem>
            <Headline>헤드라인</Headline>
          </StackItem>
          <StackItem>
            <Input placeholder="검색하실 헤드라인을 입력해주세요." />
          </StackItem>
          <StackItem>
            <Headline>날짜</Headline>
          </StackItem>
          <StackItem>
            <Input placeholder="검색하실 헤드라인을 입력해주세요." />
          </StackItem>
          <StackItem>
            <Headline>국가</Headline>
          </StackItem>
          <StackItem>
            {countryList.map((ma: string, index: number) => {
              return (
                <div
                  style={{
                    display: "inline-flex",
                    padding: "0.25rem 0.5rem",
                    alignItems: "flex-start",
                    margin: "0.25rem",
                    borderRadius: "2rem",
                    border:"1px solid #6D6D6D",
                    // border: `1px solid ${selected?"#6D6D6D":"#82B0F4"}`,
                    color: "#6D6D6D",
                    fontSize: "0.875rem",
                  }}
                >
                  {ma}
                </div>
              );
            })}
          </StackItem>
        </Stack>
      </DialogContents>
      <DialogAction>
        <Button>필터 적용하기</Button>
      </DialogAction>
    </Dialog>
  );
};

export default SearchFilterDialog;
