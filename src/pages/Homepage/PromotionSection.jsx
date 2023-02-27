import React, { useEffect } from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getPromotionalProduct } from "../../redux/slices/shopping/productSlice";

const PromotionSection = () => {
  const dispatch = useDispatch();
  const { promotionProduct, loading } = useSelector(
    (state) => state.productSlice.promotionData
  );
  useEffect(() => {
    dispatch(getPromotionalProduct(11));
  }, []);
  return (
    <>
      <div className="">
        <SectionTitle
          title="VIPS "
          SubTitle="Promotional "
          description="Discover all the VIPS merchandise here!"
        />
        <div className="container my-14 mx-auto">
          <ProductCarousel product={promotionProduct?.Data} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default PromotionSection;
