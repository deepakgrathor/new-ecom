import React from "react";

const PaymentApp = () => {
  return (
    <>
      <div className="w-3/4 mx-auto mt-20">
        <div className="flex justify-between items-center">
          <div className="mx-10 space-y-14">
            <h2 className="text-5xl font-semibold">
              India's Most Loved Payment App
            </h2>
            <p className="text-lg w-3/4">
              VIPS Wallet application is available on Google Play Store and App
              Store. Download now for a trouble-free shopping experience. .
            </p>
            <div className="flex space-x-5 items-center">
              <img
                className="w-44"
                src="https://www.vipswallet.com/images/home/Google-Play-download.svg"
                alt=""
              />
              <img
                className="w-44"
                src="https://www.vipswallet.com/images/home/Google-Play-download.svg"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <img
              src="https://www.vipswallet.com/images/home/mobile-app.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentApp;
