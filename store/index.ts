// store.ts
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice"; // Import the article reducer
import filterReducer from "./filterSlice"; // Import the filter reducer

const store = configureStore({
  reducer: {
    articles: articleReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
