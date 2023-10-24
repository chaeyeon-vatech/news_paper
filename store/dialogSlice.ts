import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for the dialog
const initialState = {
  isOpen: false, // Whether the dialog is open or not
  content: null, // The content to display in the dialog
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<any>) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
