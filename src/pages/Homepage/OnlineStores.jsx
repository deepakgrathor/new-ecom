import React, { useEffect } from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import ProductCarousel from "../../components/Carousel/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getAffiliate } from "../../redux/slices/onlineStoreSlice";
import ButtonComp from "../../components/Buttons/ButtonComp";

const OnlineStores = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.onlineStoreSlice);

  useEffect(() => {
    dispatch(getAffiliate());
  }, []);
  return (
    <>
      <div className="">
        <SectionTitle
          title="Online "
          SubTitle="Stores "
          description="Shop your favourite products from our connected online stores."
        />
        <div className="container  space-y-10 my-14 mx-auto">
          <ProductCarousel onlineStore={data.Data} loading={loading} />
          <ButtonComp title={"View All"} width={32} />
        </div>
      </div>
    </>
  );
};

export default OnlineStores;
