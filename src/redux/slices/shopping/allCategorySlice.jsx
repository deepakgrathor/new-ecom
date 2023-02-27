import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseApiUrl } from "../../../utils/Constants";

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async () => {
    try {
      const res = await axios.get(
        `${baseApiUrl}/EcommerceServices/Getdashboardslider?tocken=XMCNBVGDTE734BCU65DW`
      );
      return res.data.Data.Categories;
    } catch (error) {
      return error;
    }
  }
);

const allCategorySlice = createSlice({
  name: "allCategorySlice",
  initialState: {
    allCat: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCat = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default allCategorySlice.reducer;
