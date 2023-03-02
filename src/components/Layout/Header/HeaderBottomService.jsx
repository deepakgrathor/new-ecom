import React, { useEffect } from "react";
import Recharge from "../../../assets/images/mobile.png";
import DTH from "../../../assets/images/dth.png";
import Fastag from "../../../assets/images/fastag.png";
import Electricity from "../../../assets/images/elec.png";
import Digital_Cable from "../../../assets/images/cable.png";
import LandLine from "../../../assets/images/broad.png";
import Gas from "../../../assets/images/lpg.png";
import Water_Bill from "../../../assets/images/water.png";
import { Link } from "react-router-dom";

const HeaderBottomService = () => {
  return (
    <>
      <div className="container mx-auto transition-all duration-300 ease-in-out rounded-lg bg-blue-800">
        <div className="flex justify-center space-x-8 py-2 items-center">
          {HeaderBottomMenu.map((e, i) => {
            return (
              <Link to={e.route}>
                <div key={i} className="flex items-center space-x-2">
                  <img className="w-10" src={e.img} alt="" />
                  <h2 className="text-white">{e.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const HeaderBottomMenu = [
  {
    img: Recharge,
    title: "Recharge",
    route: "/services/mobileRecharge",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: DTH,
    title: "DTH",
    route: "/services/dth",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Fastag,
    title: "Fastag",
    route: "/services/fastag",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Electricity,
    title: "Electricity",
    route: "/services/electricity",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Digital_Cable,
    title: " Digital Cable",
    route: "/services/digitalCable",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: LandLine,
    title: "LandLine",
    route: "/services/landline",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Gas,
    title: "Gas",
    route: "/services/gas",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Water_Bill,
    title: "Water Bill",
    route: "/services",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
];

export const RechargeMenu = [
  {
    img: Recharge,
    title: "Recharge",
    route: "/services/mobileRecharge",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: DTH,
    title: "DTH",
    route: "/services/dth",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Fastag,
    title: "Fastag",
    route: "/services/fastag",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Digital_Cable,
    title: " Digital Cable",
    route: "/services/digitalCable",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
];
export const PayBillsMenu = [
  {
    img: Electricity,
    title: "Electricity",
    route: "/services/electricity",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Digital_Cable,
    title: " Digital Cable",
    route: "/services/digitalCable",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: LandLine,
    title: "LandLine",
    route: "/services/landline",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Gas,
    title: "Gas",
    route: "/services/gas",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Water_Bill,
    title: "Water Bill",
    route: "/services",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Water_Bill,
    title: "LPG Gas",
    route: "/services",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Water_Bill,
    title: "Insurance",
    route: "/services",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Water_Bill,
    title: "Pay Loan",
    route: "/services",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
];
export const FinanceMenu = [
  {
    img: Electricity,
    title: "Loan Repayment",
    route: "/services/electricity",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Digital_Cable,
    title: " Credit Card",
    route: "/services/digitalCable",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: LandLine,
    title: "Housint Society",
    route: "/services/landline",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
  {
    img: Gas,
    title: "Hospital Bills",
    route: "/services/gas",
    desc: "Get Instant 2% Cashback On Mobile Recharge",
  },
];
export default HeaderBottomService;
