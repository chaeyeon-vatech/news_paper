import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleType } from "../types";
import { StateType } from "store";

interface ArticleState {
  articles: ArticleType[];
}

const initialState: ArticleState = {
  articles: [],
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticleType[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;

export const selectArticles = (state: StateType) => state.articles;

export default articleSlice.reducer;
