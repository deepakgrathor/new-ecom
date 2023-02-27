import React, { useEffect } from "react";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/slices/shopping/allCategorySlice";
import Carousel from "react-multi-carousel";
import Header from "../../components/Layout/Header/Header";
import HomeTopSlider from "../../components/Sliders/HomeTopSlider";
import SectionTitle from "../../components/Common/SectionTitle";
import DealsOfTheDay from "../Homepage/DealsOfTheDay";
import PromotionSection from "../Homepage/PromotionSection";
import {
  getElectronicPro,
  getNewArrivalProducts,
  getProductsByCategory,
} from "../../redux/slices/shopping/productSlice";
import { electronicCategoryId, fashionCategoryId } from "../../utils/Constants";

const ShoppingHome = () => {
  const { allCat } = useSelector((state) => state.allCategorySlice);
  const { data, loading } = useSelector(
    (state) => state.productSlice.newArrivalProduct
  );
  const { data: catByProduct, loading: catByLoading } = useSelector(
    (state) => state.productSlice.categoryByProduct
  );
  const { data: ElecProduct, loading: ElecLoading } = useSelector(
    (state) => state.productSlice.elecPro
  );
  const dispatch = useDispatch();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 6,
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
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getNewArrivalProducts());
    dispatch(getProductsByCategory(fashionCategoryId));
    dispatch(getElectronicPro(electronicCategoryId));
  }, []);
  return (
    <>
      <Header show={true} />
      <div className="py-48 ">
        <div className="container mx-auto">
          <Carousel responsive={responsive} infinite={true}>
            {allCat
              ?.filter((a) => a.Id !== 33)
              .map((e) => {
                return (
                  <div
                    onClick={(a) => window?.open(e.Url, "_blank")}
                    className="text-center space-y-2 justify-center flex flex-col items-center"
                  >
                    <img
                      className="w-32"
                      src={`http://shopadmin.vipswallet.com/Content/Images/categories/${e?.ImageUrl}`}
                      alt=""
                    />
                    <h2 className="text-center font-semibold text-xl">
                      {e?.Name}
                    </h2>
                  </div>
                );
              })}
          </Carousel>
        </div>
        <div className="mt-12">
          <HomeTopSlider show={true} />
          <div className="">
            <DealsOfTheDay />
            <PromotionSection />
            {/* New Arrival Product */}
            <div className="">
              <SectionTitle
                title={"New"}
                SubTitle={"Arrival Products"}
                description={
                  "Fresh, new products releasing and going live everyday!"
                }
              />
              <div className="container my-14 mx-auto">
                <ProductCarousel product={data?.Data} loading={loading} />
              </div>
            </div>
            {/* Fashion Section */}
            <div className="">
              <SectionTitle
                title={"Fashion"}
                description={
                  "Select your shopping product from a variety of categories and goods."
                }
              />
              <div className="container my-14 mx-auto">
                <ProductCarousel
                  product={catByProduct?.Data}
                  loading={catByLoading}
                />
              </div>
            </div>
            {/* Electronic Section */}
            <div className="">
              <SectionTitle
                title={"Electronic"}
                description={
                  "Best electronic devices at affordable prices with great offers."
                }
              />
              <div className="container my-14 mx-auto">
                <ProductCarousel
                  product={ElecProduct?.Data}
                  loading={ElecLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingHome;
