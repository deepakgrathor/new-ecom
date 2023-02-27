const { createSlice } = require("@reduxjs/toolkit");

const browsingSlice = createSlice({
  name: "browsingSlice",
  initialState: {
    browseRroducts: JSON.parse(localStorage.getItem("recent")),
  },
  reducers: {
    browsingProduct: (state, action) => {
      const findProduct = state?.browseRroducts?.find(
        (e) => e?.Id === action.payload.Id
      );
      if (!findProduct) {
        state.browseRroducts?.push(action.payload);
        let prevRecent = JSON.parse(localStorage.getItem("recent"));
        let cartToBe = [];
        if (prevRecent) {
          cartToBe = [...prevRecent];
        }
        cartToBe.push(action.payload);
        state.browseRroducts = cartToBe;

        // let strWishlist= JSON.stringify(wishlistToBe);
        localStorage.setItem("recent", JSON.stringify(cartToBe));
      }
    },
  },
});
export const { browsingProduct } = browsingSlice.actions;
export default browsingSlice.reducer;
