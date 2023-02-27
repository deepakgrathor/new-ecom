import React, { useEffect, useState } from "react";
import Header from "../../components/Layout/Header/Header";
import HomeTopSlider from "../../components/Sliders/HomeTopSlider";
import ShopByCategory from "./ShopByCategory";
import ServiceCategory from "./ServiceCategory";
import PromotionSection from "./PromotionSection";
import OnlineStores from "./OnlineStores";
import AdBanner from "../../components/Banners/AdBanner";
import DealsOfTheDay from "./DealsOfTheDay";
import PaymentApp from "./PaymentApp";
import BrowsingHistory from "./BrowsingHistory";

const Homepage = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div>
      <Header show={show} />
      <HomeTopSlider show={show} />
      <ShopByCategory />
      <ServiceCategory />
      <PromotionSection />
      <OnlineStores />
      {/* Prime Member VIPS */}
      <AdBanner
        BannerURL="https://www.vipswallet.com/prime"
        BannerImage="https://ik.imagekit.io/43tomntsa/image.png"
      />
      <DealsOfTheDay />
      {/* Discount VIPS */}
      <AdBanner
        BannerURL="https://www.vipswallet.com/shopping/Furniture/7"
        BannerImage="https://ik.imagekit.io/43tomntsa/image_1_.png"
      />
      <PaymentApp />
      <BrowsingHistory />
    </div>
  );
};

export default Homepage;
