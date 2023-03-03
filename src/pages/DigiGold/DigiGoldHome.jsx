import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import CurrentPrice from "./CurrentPrice";
import { Button, Col, Form, Input, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchGoldSilverRates } from "../../redux/slices/digiGold/digiGoldSlice";
import MyVault from "./MyVault";

const DigiGoldHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isGold, setIsGold] = useState(true);
  const [isBuy, setIsBuy] = useState(true);
  const [isDigiLogin, setIsDigiLogin] = useState(true);
  const [amount, setAmount] = useState(""); ///0 for Gold 1 for Silver
  const [grams, setGrams] = useState("");
  const [valueType, setValueType] = useState({
    valueinAmt: "",
    valueinGm: "",
    valType: "",
    blockid: "",
    lockPrice: "",
    uniqueId: "",
    metalType: "",
    taxes: "",
  });
  const { logData } = useSelector((state) => state.registerDigiSlice.login);
  const { rateData, loading } = useSelector(
    (state) => state.digiGoldSlice.rates
  );
  useEffect(() => {
    dispatch(fetchGoldSilverRates());
  }, []);
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setValueType({
      ...valueType,
      valueinAmt: e.target.value,
      valueinGm:
        e.target.value /
        (isGold
          ? rateData.Data?.result?.data?.rates?.gBuy
          : rateData.Data?.result?.data?.rates?.sBuy),
      valType: "Amount",
      metalType: isGold ? "gold" : "silver",
    });

    setGrams(
      e.target.value /
        (isGold
          ? rateData.Data?.result?.data?.rates?.gBuy
          : rateData.Data?.result?.data?.rates?.sBuy)
    );
  };
  const handleGramsChange = (e) => {
    setGrams(e.target.value);
    const TotalAmount =
      (isBuy &&
        isGold &&
        rateData.Data?.result?.data?.rates?.gBuy * e.target.value) ||
      (isBuy &&
        !isGold &&
        rateData.Data?.result?.data?.rates?.sBuy * e.target.value) ||
      (!isBuy &&
        isGold &&
        rateData.Data?.result?.data?.rates?.gSell * e.target.value) ||
      (!isBuy &&
        !isGold &&
        rateData.Data?.result?.data?.rates?.sSell * e.target.value);
    setValueType({
      ...valueType,
      valueinGm: e.target.value,
      valueinAmt: TotalAmount,
      valType: "Grams",
      metalType: isGold ? "gold" : "silver",
    });

    setAmount(TotalAmount);
  };
  const handleClick = () => {
    valueType.blockid = rateData.Data.result.data.blockId;
    valueType.lockPrice =
      isGold === 0
        ? rateData?.Data?.result?.data?.rates.gBuy
        : rateData?.Data?.result?.data?.rates?.sBuy;
    // valueType.uniqueId = loggedInUser.Id;
    valueType.taxes = rateData?.Data?.result?.data?.taxes;
    // if (!loggedInUser) {
    //   navigate("/login");
    // } else {
    navigate("/digigold-order-summary", { state: valueType });
    // }
  };
  return (
    <>
      <div className="my-36 w-3/4 mx-auto">
        <SectionTitle
          title={"Buy Gold & "}
          SubTitle={"Silver At Best Prices"}
        />
        {/* Login Register Module */}

        <div className="">
          {!isDigiLogin ? (
            <div className="flex space-y-5 mt-8 border-t border-l border-r border-blue-300 bg-white w-2/4 mx-auto p-5 rounded-t-3xl shadow-md flex-col items-center">
              <h2 className="text-3xl font-semibold">
                You're not Register to DigiGold
              </h2>
              <h2 className="bg-blue-700 text-white text-xl px-8 py-3 rounded-lg shadow-md">
                Register Now
              </h2>
            </div>
          ) : (
            <MyVault />
          )}
        </div>
        <div className="mx-auto mb-12 border-2 border-blue-200 shadow-2xl bg-white rounded-3xl">
          <CurrentPrice isBuy={isBuy} rateData={rateData} loading={loading} />
          <div className="flex flex-col wf items-center">
            <div className="flex text-4xl items-center space-x-80 font-semibold">
              <h2
                onClick={() => {
                  setIsBuy(true);
                  setAmount("");
                  setGrams("");
                }}
                className={`${
                  isBuy && "border-b-2"
                } px-3 border-gray-500 cursor-pointer  pb-3`}
              >
                BUY
              </h2>
              <h2
                onClick={() => {
                  setIsBuy(false);
                  setAmount("");
                  setGrams("");
                }}
                className={`${
                  !isBuy && "border-b-2"
                } px-3 border-gray-500 cursor-pointer pb-3`}
              >
                {" "}
                SELL
              </h2>
            </div>
            <div className="flex border my-8 space-x-5 border-gray-500 rounded-xl p-1  items-center w-4/5 justify-around">
              <h2
                onClick={() => {
                  setIsGold(true);
                  setAmount("");
                  setGrams("");
                }}
                className={`${
                  isGold && "bg-blue-900 text-white "
                } p-5 cursor-pointer text-lg font-semibold tracking-wide duration-500  w-full rounded-xl text-center`}
              >
                GOLD 24K 999
              </h2>
              <h2
                onClick={() => {
                  setIsGold(false);
                  setAmount("");
                  setGrams("");
                }}
                className={`${
                  !isGold && "bg-blue-900 text-white"
                } p-5 cursor-pointer  duration-500 text-lg font-semibold tracking-wide w-full  rounded-xl text-center`}
              >
                SILVER 24K 999
              </h2>
            </div>
            <div className="w-4/5 mb-20 mt-4">
              <Form
                onFinish={handleClick}
                fields={[
                  {
                    name: "grams",
                    value: grams,
                  },
                  {
                    name: "amount",
                    value: amount,
                  },
                ]}
              >
                <Row className="flex items-center">
                  <Col span={11}>
                    <Form.Item
                      name={"grams"}
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Grams",
                        },
                      ]}
                    >
                      <Input
                        min={0}
                        // addonBefore="Grams"
                        value={grams}
                        type="number"
                        name="grams"
                        onChange={handleGramsChange}
                        size="large"
                        step={"any"}
                        className="p-4 text-xl"
                        placeholder="Enter Grams"
                      />
                    </Form.Item>
                  </Col>
                  <Col className="justify-center flex " span={2}>
                    <img
                      className="w-12 mb-5"
                      src="https://demowvuat.augmont.com/assets/arrow.svg"
                      alt=""
                    />
                  </Col>
                  <Col span={11}>
                    <Form.Item
                      name="amount"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Amount",
                        },
                      ]}
                    >
                      <Input
                        min={0}
                        value={amount}
                        max={180000}
                        // addonBefore="Rs."
                        type="number"
                        name="amount"
                        onChange={handleAmountChange}
                        placeholder="Enter Amount"
                        size="large"
                        step={"any"}
                        disabled={!isBuy}
                        className="p-4 text-xl"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <div className="flex justify-center">
                  <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    className="bg-blue-800 mt-8"
                    style={{
                      backgroundColor: "#CA3060",
                      height: 55,
                      width: 200,
                      fontWeight: "500",
                    }}
                  >
                    Quick Buy
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {HowItWorks()}
    </>
  );
};

const HowItWorks = () => {
  return (
    <>
      <div className="flex container space-x-10 my-20 mx-auto items-center justify-center">
        {howItWorkArr.map((e) => {
          return (
            <div className="flex space-y-2 hover:scale-105 duration-300 m-4 flex-col items-center">
              <img src={`images/digigold-images/${e.img}`} alt="" />
              <h2 className="text-2xl font-semibold">{e.title}</h2>
              <p className="text-center">{e.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const howItWorkArr = [
  {
    img: "open-an-account.svg",
    title: "Open An Account",
    desc: " Buy Gold/Silver at the best market prices",
  },
  {
    img: "buy-sell.svg",
    title: "Buy / Sell Small",
    desc: "Buy Gold/Silver at the best market prices",
  },
  {
    img: "secured-vault.svg",
    title: "Secured Vault",
    desc: "Buy Gold/Silver at the best market prices",
  },
  {
    img: "request-delivery.svg",
    title: "Request Delivery",
    desc: "Buy Gold/Silver at the best market prices",
  },
  {
    img: "doorstep-delivery.svg",
    title: "Doorstep Delivery",
    desc: "Buy Gold/Silver at the best market prices",
  },
];

export default DigiGoldHome;
