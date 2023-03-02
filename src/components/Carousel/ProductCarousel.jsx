import React, { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../Shopping/ProductCard";
import Loader from "../Common/Loader";

const ProductCarousel = ({ product, loading, onlineStore }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 991, min: 712 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 712, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {!loading ? (
        <Carousel responsive={responsive} infinite={true}>
          {product && !onlineStore
            ? product?.map((e, i) => {
                return (
                  <div key={i} className="">
                    <ProductCard item={e} />
                  </div>
                );
              })
            : onlineStore?.map((e) => {
                return (
                  <div
                    onClick={(a) => window?.open(e.Url, "_blank")}
                    className="text-center space-y-2 justify-center flex flex-col items-center"
                  >
                    <img
                      className="w-36"
                      src={`http://shopadmin.vipswallet.com/${e?.Logo}`}
                      alt=""
                    />
                    <h2 className="text-center font-semibold text-xl">
                      {e?.Name}
                    </h2>
                  </div>
                );
              })}
        </Carousel>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default memo(ProductCarousel);
