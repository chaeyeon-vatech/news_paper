// store.ts
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";
import filterReducer from "./filterSlice";
import dialogReducer from "./dialogSlice";

const store = configureStore({
  reducer: {
    articles: articleReducer,
    filter: filterReducer,
    dialog: dialogReducer, // Add the dialog reducer
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
