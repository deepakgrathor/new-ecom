import React from "react";
import PaymentApp from "../Homepage/PaymentApp";
import Header from "../../components/Layout/Header/Header";
import SectionTitle from "../../components/Common/SectionTitle";
import ServiceCategory from "../Homepage/ServiceCategory";
import HomeBottomService from "../../components/Layout/Header/HomeBottomService";
import {
  FinanceMenu,
  PayBillsMenu,
  RechargeMenu,
} from "../../components/Layout/Header/HeaderBottomService";

const ServiceHome = () => {
  return (
    <>
      <Header show={true} />
      <div className="py-32">
        <PaymentApp
          img="https://www.vipswallet.com/images/home/mobile-app.png"
          title="Online payments just got Easier, Hassle-free and Effortless!"
          desc="With VIPS Wallet, you can complete and process your online payments, from bills to loan repayment and more. Your painless e-payments solution is here! VIPS Wallet application available on Google Play store and App Store."
        />
        <div className="">
          <div className="">
            <SectionTitle
              title={"Recharge "}
              SubTitle={"& Pay Bills"}
              description={
                "Ease the transaction and payments hassle with tech that's convenient to use."
              }
            />
            <HomeBottomService grid={4} data={RechargeMenu} />
          </div>
          <div className="">
            <SectionTitle
              title={"Pay Bills "}
              SubTitle={"of Utilities"}
              description={
                "Your all basic necessity bills can be taken care of using VIPS Wallet."
              }
            />
            <HomeBottomService grid={4} data={PayBillsMenu} />
          </div>
          <div className="">
            <SectionTitle
              title={"Financial Services "}
              SubTitle={"& Taxes"}
              description={
                "Either it be loan repayment, tax or any other financial bill, VIPS Wallet can help you with easy transactions for it."
              }
            />
            <HomeBottomService grid={4} data={FinanceMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHome;
