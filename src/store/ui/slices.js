import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listed: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleListed(state, action) {
      state.listed = action.payload;
    },
  },
});

export default uiSlice.reducer;
