import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "headerSlice",
  initialState: {
    headerBottom: {
      showOrHide: false,
    },
  },
  reducers: {
    headerBottomAction: (state, action) => {
      if (state.headerBottom.showOrHide) {
        state.headerBottom.showOrHide = false;
      } else {
        state.headerBottom.showOrHide = true;
      }
    },
  },
});
export const { headerBottomAction } = headerSlice.actions;
export default headerSlice.reducer;
