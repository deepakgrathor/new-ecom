import { createSlice } from "@reduxjs/toolkit";

const quickViewSlice = createSlice({
  name: "quickViewSlice",
  initialState: {
    modalBool: false,
    itemData: "",
  },
  reducers: {
    openCloseModal: (state, action) => {
      if (state.modalBool === false) {
        state.itemData = action.payload;
        state.modalBool = true;
      } else {
        state.itemData = [];
        state.modalBool = false;
      }
    },
  },
});
export const { openCloseModal } = quickViewSlice.actions;
export default quickViewSlice.reducer;
