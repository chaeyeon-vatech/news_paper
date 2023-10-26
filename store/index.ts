import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";
import filterReducer from "./filterSlice";
import dialogReducer from "./dialogSlice";
import pageReducer from "./pageSlice";

const store = configureStore({
  reducer: {
    articles: articleReducer,
    filter: filterReducer,
    dialog: dialogReducer,
    page: pageReducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;

export default store;
