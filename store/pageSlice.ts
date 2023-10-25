import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 슬라이스의 초기 상태
const initialState: number = 1;

// pageSlice 생성
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
