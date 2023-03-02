import bannerSlice from "./slices/bannerSlice";
import browsingSlice from "./slices/browsingSlice";
import dealSlice from "./slices/dealSlice";
import headerSlice from "./slices/headerSlice";
import onlineStoreSlice from "./slices/onlineStoreSlice";
import productSlice from "./slices/shopping/productSlice";
import allCategorySlice from "./slices/shopping/allCategorySlice";
import wishlistSlice from "./slices/wishlistSlice";
import quickViewSlice from "./slices/quickViewSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    bannerSlice: bannerSlice,
    headerSlice: headerSlice,
    productSlice: productSlice,
    onlineStoreSlice: onlineStoreSlice,
    dealSlice: dealSlice,
    browsingSlice: browsingSlice,
    wishlistSlice: wishlistSlice,
    allCategorySlice: allCategorySlice,
    quickViewSlice: quickViewSlice,
  },
});

export default store;
