import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterType {
  date?: Date | null;
  countryList?: string[];
  headline?: string;
}

const initialState: FilterType = {
  date: null,
  countryList: [],
  headline: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      return { ...state, ...action.payload };
    },
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload; // Set the date state
    },
    setCountryList: (state, action: PayloadAction<string[]>) => {
      state.countryList = action.payload; // Set the countryList state
    },
    setHeadline: (state, action: PayloadAction<string>) => {
      state.headline = action.payload; // Set the headline state
    },
  },
});

export const { setFilter, setDate, setCountryList, setHeadline } =
  filterSlice.actions;
export default filterSlice.reducer;
