import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  headline: string;
  date: string;
  country: string;
}

const initialState: FilterState = {
  headline: "",
  date: "",
  country: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setHeadlineFilter: (state, action: PayloadAction<string>) => {
      state.headline = action.payload;
    },
    setDateFilter: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setCountryFilter: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const { setHeadlineFilter, setDateFilter, setCountryFilter } = filterSlice.actions;

export default filterSlice.reducer;
