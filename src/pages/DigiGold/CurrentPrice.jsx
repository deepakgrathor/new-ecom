const CurrentPrice = ({ rateData, loading, isBuy }) => {
  return (
    <>
      <div className="flex my-10 border w-3/4 mx-auto p-4 rounded-full shadow justify-center items-center">
        <div className="flex space-x-32 items-center ">
          <div className="flex-col space-y-2 flex items-center">
            <h2 className="text-3xl font-bold text-blue-800">GOLD</h2>
            <h2 className="text-2xl font-semibold">
              ₹
              {rateData && !loading
                ? isBuy
                  ? rateData.Data.result.data.rates.gBuy
                  : rateData.Data.result.data.rates.gSell
                : "Loading..."}{" "}
              / Grams
            </h2>
          </div>
          <div className="">
            <img
              className="w-14"
              src="https://demowvuat.augmont.com/assets/icon/gold_for_all.svg"
              alt=""
            />
          </div>
          <div className="flex-col space-y-2 flex items-center">
            <h2 className="text-3xl font-bold text-blue-800">SILVER</h2>
            <h2 className="text-2xl font-semibold">
              ₹{" "}
              {rateData && !loading
                ? isBuy
                  ? rateData.Data.result.data.rates.sBuy
                  : rateData.Data.result.data.rates.sSell
                : "Loading..."}{" "}
              / Grams
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentPrice;
