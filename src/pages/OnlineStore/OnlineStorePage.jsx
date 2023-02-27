import React, { useEffect } from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { getAffiliate } from "../../redux/slices/onlineStoreSlice";
import Loader from "../../components/Common/Loader";

const OnlineStorePage = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.onlineStoreSlice);

  useEffect(() => {
    dispatch(getAffiliate());
  }, []);
  console.log(data.Data, "data");
  return (
    <>
      <div className="container py-20 mx-auto">
        <SectionTitle
          title={"Online "}
          SubTitle={"Stores"}
          description={
            "Shop your favourite products from our connected online stores."
          }
        />
        <div className="grid mt-20 grid-cols-6 gap-10">
          {data.Data ? (
            data.Data.map((e) => {
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
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default OnlineStorePage;
