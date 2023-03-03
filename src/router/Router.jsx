import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Footer from "../components/Layout/Footer/Footer";
import Wishlist from "../pages/Shopping/WIshlist/Wishlist";
import Header from "../components/Layout/Header/Header";
import OnlineStorePage from "../pages/OnlineStore/OnlineStorePage";
import ShoppingHome from "../pages/Shopping/ShoppingHome";
import ServiceHome from "../pages/Services/ServiceHome";
import QuickViewModal from "../components/Modal/QuickViewModal";
import ProductList from "../pages/Shopping/ProductList";
import DigiGoldHome from "../pages/DigiGold/DigiGoldHome";
import OrderSummary from "../pages/DigiGold/OrderSummary";

const Router = () => {
  return (
    <>
      <Header />
      <QuickViewModal />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping" element={<ShoppingHome />} />
        <Route path="/services" element={<ServiceHome />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shopping/:catname" element={<ProductList />} />
        <Route path="/online-stores" element={<OnlineStorePage />} />

        {/* Gold Routes */}
        <Route path="/digigold" element={<DigiGoldHome />} />
        <Route path="/digigold-order-summary" element={<OrderSummary />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
