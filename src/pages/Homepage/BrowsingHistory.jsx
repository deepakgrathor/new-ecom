import React from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import { useSelector } from "react-redux";

const BrowsingHistory = () => {
  const { browseRroducts } = useSelector((state) => state.browsingSlice);
  return (
    <>
      {browseRroducts?.length > 0 && (
        <div className="">
          <SectionTitle title={"Inspired "} SubTitle={"By Browsing History"} />
          <div className="container my-14 mx-auto">
            <ProductCarousel product={browseRroducts} />
          </div>
        </div>
      )}
    </>
  );
};

export default BrowsingHistory;
