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
export const getSubCategory = createAsyncThunk(
  "getSubCategory",
  async (categoryId) => {
    try {
      const res = await axios.get(
        `${baseApiUrl}/EcommerceServices/GetSubcategorieList?tocken=XMCNBVGDTE734BCU65DW&Categoryid=${categoryId}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

// export const getSubCategory = (categoryId) => {
//   const formData = new FormData();

//   return fetch(
//     `${baseApiUrl}/EcommerceServices/GetSubcategorieList?tocken=XMCNBVGDTE734BCU65DW&Categoryid=${categoryId}`,
//     {
//       method: "GET",
//     }
//   )
//     .then((data) => {
//       return data.json();
//     })
//     .catch((err) => {});
// };

const allCategorySlice = createSlice({
  name: "allCategorySlice",
  initialState: {
    allCategory: {
      allCat: [],
      loading: false,
      error: "",
    },
    getSubCatbyCat: {
      subCat: "",
      loading: false,
      error: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.allCategory.loading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.allCategory.allCat = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.allCategory.loading = false;
      state.allCategory.error = action.error;
    });
    builder.addCase(getSubCategory.pending, (state, action) => {
      state.getSubCatbyCat.loading = true;
    });
    builder.addCase(getSubCategory.fulfilled, (state, action) => {
      state.getSubCatbyCat.subCat = action.payload;
      state.getSubCatbyCat.loading = false;
    });
    builder.addCase(getSubCategory.rejected, (state, action) => {
      state.getSubCatbyCat.loading = false;
      state.getSubCatbyCat.error = action.error;
    });
  },
});

export default allCategorySlice.reducer;
