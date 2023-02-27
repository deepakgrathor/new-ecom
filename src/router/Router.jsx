import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Footer from "../components/Layout/Footer/Footer";
import Wishlist from "../pages/Shopping/WIshlist/Wishlist";
import Header from "../components/Layout/Header/Header";
import OnlineStorePage from "../pages/OnlineStore/OnlineStorePage";
import ShoppingHome from "../pages/Shopping/ShoppingHome";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping" element={<ShoppingHome />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/online-stores" element={<OnlineStorePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
