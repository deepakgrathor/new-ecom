import React from "react";
import Carousel from "react-multi-carousel";
import { NoImage, shopadminUrl } from "../../utils/Constants";

const ImageCarousel = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 993 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 414 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 414, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="quick-view-product-img-outer"
      >
        {images &&
          images.map((image, i) => (
            <div class="w-full h-full">
              <img
                class="w-full h-full rounded-2xl bg-cover"
                src={image ? shopadminUrl + image : NoImage}
                alt="Slide"
              />
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
