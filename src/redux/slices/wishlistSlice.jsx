const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: {
    wishProducts: JSON.parse(localStorage.getItem("wishlist")),
  },
  reducers: {
    addWish: (state, action) => {
      const findProduct = state?.wishProducts?.find(
        (e) => e?.Id === action.payload.Id
      );
      if (!findProduct) {
        state.wishProducts?.push(action.payload);
        let prevRecent = JSON.parse(localStorage.getItem("wishlist"));
        let cartToBe = [];
        if (prevRecent) {
          cartToBe = [...prevRecent];
        }
        cartToBe.push(action.payload);
        state.wishProducts = cartToBe;

        // let strWishlist= JSON.stringify(wishlistToBe);
        localStorage.setItem("wishlist", JSON.stringify(cartToBe));
      }
    },
    removeWish: (state, action) => {
      const findProduct = state?.wishProducts?.filter(
        (e) => e?.Id !== action.payload.Id
      );
      state.wishProducts = findProduct;
      localStorage.setItem("wishlist", JSON.stringify(findProduct));
    },
  },
});
export const { addWish, removeWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
