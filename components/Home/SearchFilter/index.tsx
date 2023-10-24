import React from "react";
import { FilterButton, FilterContainer } from "ui/styles/home.styles";
import { DateIcon, SearchIcon } from "ui/components/Icons";
import { Stack, StackItem } from "ui/components";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog, openDialog } from "../../../store/dialogSlice";
import { StateType } from "store";

const SearchFilter = () => {
  const isDialogOpen = useSelector(
    (state: StateType) => state.dialog.isOpen,
  );
  const dialogContent = useSelector(
    (state: StateType) => state.dialog.content,
  );

  // dispatch 함수 가져오기
  const dispatch = useDispatch();

  // 다이얼로그 열기
  const handleOpenDialog = () => {
    const content = "내용을 여기에 추가하세요.";
    console.log("hi")
    dispatch(openDialog(content));
  };

  // 다이얼로그 닫기
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };
  return (
    <FilterContainer>
      <Stack direction={"column"} fullWidth fullHeight>
        <StackItem height={"3.75rem"}>
          <Stack
            justifyContent={"flex-start"}
            alignItems={"center"}
            fullWidth
            fullHeight
            padding={"0 10px"}
            direction={"row"}
          >
            <StackItem>
              <FilterButton onClick={handleOpenDialog} width={"8rem"}>
                <SearchIcon width={"1rem"} />
                전체 헤드라인
              </FilterButton>
            </StackItem>
            <StackItem>
              <FilterButton onClick={handleOpenDialog} width={"7rem"}>
                <DateIcon width={"1rem"} />
                전체 날짜
              </FilterButton>
            </StackItem>
            <StackItem>
              <FilterButton onClick={handleOpenDialog} width={"5rem"}>
                전체 국가
              </FilterButton>
            </StackItem>
          </Stack>
        </StackItem>
      </Stack>
    </FilterContainer>
  );
};

export default SearchFilter;
