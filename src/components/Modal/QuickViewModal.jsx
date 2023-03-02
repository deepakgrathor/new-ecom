import Modal from "antd/es/modal/Modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCloseModal } from "../../redux/slices/quickViewSlice";
import { Affix, Button, Card, Col, Input, Row } from "antd";
import ImageCarousel from "../Shopping/ImageCarousel";
import { NoImage } from "../../utils/Constants";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import ButtonComp from "../Buttons/ButtonComp";
import Wishlist from "../Buttons/Wishlist";

const QuickViewModal = () => {
  const dispatch = useDispatch();
  const { modalBool, itemData } = useSelector((state) => state.quickViewSlice);

  const Images = [
    itemData.ImageURL1,
    itemData.ImageURL2,
    itemData.ImageURL3,
    itemData.ImageURL4,
  ];
  console.log("render hua");
  return (
    <>
      <div className="">
        <Modal
          width={1200}
          centered
          footer={[<button></button>]}
          open={modalBool}
          cancelText={false}
          onCancel={() => dispatch(openCloseModal())}
        >
          <Row gutter={50}>
            <Col span={11}>
              <ImageCarousel images={Images} />
            </Col>

            <Col className="overflow-y-scroll h-[600px]" span={13}>
              <h2 className="text-3xl font-semibold ">{itemData?.Name}</h2>
              <div className="flex mt-3 space-x-5 items-center">
                <div className="flex border-r border-gray-400  pr-5 items-center space-x-1">
                  <AiFillStar className="text-red-700 text-xl" />
                  <h2 className="text-base font-semibold"> 4.7</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <BsFillPatchCheckFill className="text-blue-800 text-xl" />
                  <h2 className="text-sm tracking-wide font-semibold">
                    50 Verified Ratings
                  </h2>
                </div>
              </div>
              <div className="flex mt-3 items-baseline space-x-3">
                <h2 className="text-2xl font-bold">$350</h2>
                <h2 className="line-through text-base">$350</h2>
                <h2 className="text-xl text-red-700 font-semibold">
                  (25% off)
                </h2>
              </div>
              <hr className="my-6" />
              <div className="">
                <h2 className="text-lg  font-bold">Select Colors</h2>
                <div className="mt-3 grid grid-cols-5 gap-4">
                  <h2 className="bg-black font-semibold tracking-wider cursor-pointer text-center p-1 rounded-md text-white">
                    Black
                  </h2>
                  <h2 className="bg-green-500 font-semibold tracking-wider cursor-pointer text-center p-1 rounded-md text-white">
                    Green
                  </h2>
                  <h2 className="bg-red-700 font-semibold tracking-wider cursor-pointer text-center p-1 rounded-md text-white">
                    Red
                  </h2>
                </div>
              </div>
              <hr className="my-6" />
              <div className="">
                <h2 className="text-lg  font-bold">Select Size</h2>
                <div className="mt-3 grid grid-cols-7 gap-4">
                  <h2 className="bg-gray-500 font-semibold tracking-wider cursor-pointer text-center p-1 rounded-md text-white">
                    M
                  </h2>
                  <h2 className="bg-gray-500 font-semibold tracking-wider cursor-pointer text-center p-1 rounded-md text-white">
                    L
                  </h2>
                  <h2 className="bg-gray-500 font-semibold tracking-wider cursor-pointer text-center p-1 rounded-md text-white">
                    XL
                  </h2>
                </div>
              </div>
              <hr className="my-6" />
              <Row className="items-center space-x-4">
                <Col span={5}>
                  <div className="flex justify-between bg-white border border-gray-200 p-1 rounded-lg shadow-sm items-center">
                    <AiOutlineMinus className="text-3xl hover:bg-gray-300 rounded-full duration-300 cursor-pointer" />
                    <h2 className="text-lg font-semibold">0</h2>
                    <AiOutlinePlus className="text-3xl duration-300 cursor-pointer hover:bg-gray-300 rounded-full" />
                  </div>
                </Col>
                <Col span={7}>
                  <ButtonComp
                    bg="bg-gray-200 text-black"
                    title={"Add to Cart"}
                  />
                </Col>
                <Col span={8}>
                  <ButtonComp bg="bg-blue-600 text-white" title={"Buy Now"} />
                </Col>
                <Col span={1.5}>
                  <Wishlist item={itemData} />
                </Col>
              </Row>
              <hr className="my-6" />
              <div className="flex items-center  justify-between">
                <h2 className="text-base flex space-x-2 items-center">
                  <span className="font-semibold text-gray-800 ">
                    Sold By :{" "}
                  </span>{" "}
                  Soumik Variety Store{" "}
                  <BsFillPatchCheckFill className="text-blue-600" />
                </h2>
                <h2 className="text-base">
                  <span className="font-semibold text-gray-800 ">
                    Delivery By :{" "}
                  </span>{" "}
                  Mar 07, 2023
                </h2>
              </div>
              <hr className="my-6" />
              <Card title="Delivery Option" className="shadow-md mb-5">
                <p>
                  Enter your area / village pincode below to check this product
                  is available or not for delivery to your door steps.
                </p>
                <Input.Group className="mt-4" compact>
                  <Input
                    style={{ width: "calc(100% - 100px)" }}
                    placeholder="Enter Pincode Here"
                  />
                  <Button loading type="primary" className="bg-blue-700 ">
                    Check
                  </Button>
                </Input.Group>
              </Card>
            </Col>
          </Row>
        </Modal>
      </div>
    </>
  );
};

export default QuickViewModal;
