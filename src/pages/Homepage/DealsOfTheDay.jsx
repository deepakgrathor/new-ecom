import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDealsOfTheDay } from "../../redux/slices/dealSlice";
import SectionTitle from "../../components/Common/SectionTitle";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import ButtonComp from "../../components/Buttons/ButtonComp";

const DealsOfTheDay = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.dealSlice);

  useEffect(() => {
    dispatch(getDealsOfTheDay());
  }, []);

  return (
    <>
      <div className="">
        <SectionTitle
          title={"Deals"}
          SubTitle={"of the Day"}
          description={
            "Exciting, fresh deals on a daily basis. Buy your wishlist products at low cost!"
          }
        />
        <div className="space-y-8 my-14">
          <div className="container  mx-auto">
            <ProductCarousel product={data?.Data} loading={loading} />
          </div>
          <ButtonComp title="View All" width={32} />
        </div>
      </div>
    </>
  );
};

export default DealsOfTheDay;
