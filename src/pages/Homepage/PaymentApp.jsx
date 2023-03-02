import React from "react";

const PaymentApp = ({ title, desc, img }) => {
  return (
    <>
      <div className="w-3/4 mx-auto mt-20">
        <div className="flex justify-between items-center">
          <div className="mx-10 space-y-12">
            <h2 className="text-5xl font-semibold leading-snug">{title}</h2>
            <p className="text-lg w-3/4">{desc}</p>
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
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentApp;
