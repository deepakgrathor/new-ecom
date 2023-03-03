import React, { useEffect } from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import MyVault from "./MyVault";
import CurrentPrice from "./CurrentPrice";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoldSilverRates } from "../../redux/slices/digiGold/digiGoldSlice";
import { Button } from "antd";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { rateData, loading } = useSelector(
    (state) => state.digiGoldSlice.rates
  );
  useEffect(() => {
    dispatch(fetchGoldSilverRates());
  }, []);
  return (
    <>
      <div className="my-36 w-3/4 mx-auto">
        <SectionTitle title={"Order Summary"} />
        <MyVault />
        <div className="mx-auto mb-12 border-2 border-blue-200 shadow-2xl bg-white rounded-3xl">
          <CurrentPrice rateData={rateData} loading={loading} />
          {/* Counter */}
          <div className="flex justify-center text-lg my-10">
            <h2>
              This price will be valid for :{" "}
              <span className="text-red-800 font-semibold">4:52</span>
            </h2>
          </div>
          {/* order OverView */}
          <hr />
          <div className="flex my-8 justify-around items-center">
            <div className="text-center space-y-3">
              <h2 className="text-xl text-blue-800 font-semibold tracking-wide">
                Quantity(in Grams)
              </h2>
              <h2 className="text-lg font-medium">0.0001</h2>
            </div>
            {"|"}
            <div className="space-y-3">
              <h2 className="text-xl text-blue-800 font-semibold tracking-wide">
                Amount
              </h2>
              <h2 className="text-lg text-center font-medium"> ₹100</h2>
            </div>
            {"|"}
            <div className="space-y-3">
              <h2 className="text-xl text-blue-800 font-semibold tracking-wide">
                Tax
              </h2>
              <h2 className="text-lg text-center font-medium">₹100</h2>
            </div>
            {"|"}
            <div className="space-y-3">
              <h2 className="text-xl text-blue-800 font-semibold tracking-wide">
                Total Payable
              </h2>
              <h2 className="text-lg text-center font-medium">₹100</h2>
            </div>
          </div>
          <hr />
          {/* Total Payable */}
          <div className="my-10 space-y-4 flex space-y-4F flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-blue-900">
              Amount Payable
            </h2>
            <h2 className="text-2xl tracking-wide font-semibold">₹ 200</h2>
          </div>
          <hr />
          {/* Payment Method */}
          <div className="mb-20">
            <h2 className="text-3xl my-10 text-center font-semibold text-blue-900">
              Payment Method
            </h2>
            <div className="w-3/4 space-y-12 mx-auto">
              <div className="shadow-md border border-blue-200 rounded-lg p-2 ">
                <h2 className="text-left text-lg font-semibold p-4">
                  Get Discount with Order
                </h2>
                <hr />
                <div className="flex p-4 items-center justify-between w-full">
                  <div className="flex items-center space-x-6">
                    <input type="radio" name="" id="" />
                    <img
                      className="w-6"
                      src="/images/digigold-images/mob-payment-discount.png"
                      alt=""
                    />
                    <h2 className="font-semibold tracking-wide">
                      Shoping Point(50)
                    </h2>
                  </div>
                  <h2 className="font-semibold tracking-wide">₹5.00</h2>
                </div>
              </div>
              <div className="space-y-7">
                <div className="shadow-md border border-blue-200 rounded-lg p-2 ">
                  <h2 className="text-left text-lg font-semibold p-4">
                    Debit From Wallet
                  </h2>
                  <hr />
                  <div className="flex p-4 items-center justify-between w-full">
                    <div className="flex items-center space-x-6">
                      <input type="radio" name="" id="" />
                      <img
                        className="w-6"
                        src="/images/digigold-images/vips-logo-small.png"
                        alt=""
                      />
                      <h2 className="font-semibold tracking-wide">
                        VIPS Wallet (50)
                      </h2>
                    </div>
                    <h2 className="font-semibold tracking-wide">₹5.00</h2>
                  </div>
                </div>
                <div className="shadow-md border border-blue-200 rounded-lg p-2 ">
                  <h2 className="text-left text-lg font-semibold p-4">
                    Pay Via UPI
                  </h2>
                  <hr />
                  <div className="flex p-4 items-center justify-between w-full">
                    <div className="flex items-center space-x-6">
                      <input type="radio" name="" id="" />
                      <img
                        className="w-6"
                        src="/images/digigold-images/payu-logo.png"
                        alt=""
                      />
                      <h2 className="font-semibold tracking-wide">
                        Payu (Card / UPI)
                      </h2>
                    </div>
                    <h2 className="font-semibold tracking-wide">₹5.00</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-12">
            <button className="bg-blue-900 text-white px-12 py-2 rounded-lg text-lg font-semibold tracking-wide">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
