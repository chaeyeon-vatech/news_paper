import React from "react";
import Stack from "ui/components/Stack";
import StackItem from "ui/components/StackItem";
import SearchFilter from "components/Home/SearchFilter";
import MenuScreen from "components/Home/Menu";
import ArticleList from "components/Home/ArticleList";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/dialogSlice";
import SearchFilterDialog from "./SearchFilter/SearchFilterDialog";

function HomeScreen() {
  const dispatch = useDispatch();

  // 다이얼로그 닫기
  const handleCloseDialog = () => {
    dispatch(closeDialog());
  };

  return (
    <>
      <Stack direction={"column"} fullWidth fullHeight>
        <StackItem height={"3.75rem"} fullWidth>
          <SearchFilter />
        </StackItem>
        <StackItem height={"calc(100%-9rem)"} fullWidth>
          <ArticleList />
        </StackItem>
        <StackItem height={"5.31rem"} fullWidth>
          <MenuScreen />
        </StackItem>
      </Stack>
      <SearchFilterDialog />
    </>
  );
}

export default HomeScreen;
