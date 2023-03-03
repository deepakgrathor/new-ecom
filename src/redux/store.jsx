import bannerSlice from "./slices/bannerSlice";
import browsingSlice from "./slices/browsingSlice";
import dealSlice from "./slices/dealSlice";
import headerSlice from "./slices/headerSlice";
import onlineStoreSlice from "./slices/onlineStoreSlice";
import productSlice from "./slices/shopping/productSlice";
import allCategorySlice from "./slices/shopping/allCategorySlice";
import wishlistSlice from "./slices/wishlistSlice";
import quickViewSlice from "./slices/quickViewSlice";
import registerDigiSlice from "./slices/digiGold/registerDigiSlice";
import userProfileSlice from "./slices/digiGold/userProfileSlice";
import digiGoldSlice from "./slices/digiGold/digiGoldSlice";

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
    registerDigiSlice: registerDigiSlice,
    userProfileSlice: userProfileSlice,
    digiGoldSlice: digiGoldSlice,
  },
});

export default store;
