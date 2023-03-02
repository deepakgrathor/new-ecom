import React, { useState } from "react";
import ButtonComp from "../Buttons/ButtonComp";
import Wishlist from "../Buttons/Wishlist";
import { MdOutlineDeliveryDining, MdTrendingUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { browsingProduct } from "../../redux/slices/browsingSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const setBrowsingProduct = (product) => {
    dispatch(browsingProduct(product));
  };

console.log("product card");

  return (
    <>
      <div className="shadow-md  border m-3 border-gray-200 rounded-lg">
        <div
          onClick={() => setBrowsingProduct(item)}
          className="relative cursor-pointer"
        >
          <img
            className="rounded-lg h-64 bg-cover w-full"
            src={`http://shopadmin.vipswallet.com/${item?.ImageThumbURL1}`}
            alt=""
          />
          <h2 className="absolute top-2 left-2 bg-red-500 text-sm py-0.5 text-white px-3 rounded-md">
            Sale
          </h2>
          <MdTrendingUp className="absolute top-3 right-3" />
        </div>
        <div className="p-2">
          <div className="space-y-0.5">
            <h2 className="font-semibold">{item?.Name?.slice(0, 25)}...</h2>
            <h2 className="space-x-2 items-center">
              <span className="text-blue-500 text-lg font-medium">
                ₹{item?.SalePrice}
              </span>
              <span className="line-through text-sm">₹{item?.Price}</span>
              <span className="text-red-800 font-medium">
                ({item?.CostPrice}% Off)
              </span>
            </h2>
            <h2 className="flex items-center space-x-2">
              <MdOutlineDeliveryDining className=" text-xl" />
              <h2> Delivery by {item?.DeliveryEnd}</h2>
            </h2>
          </div>
          <div className="flex mt-4 space-x-3 items-center justify-between">
            <ButtonComp item={item} title="Quick View" />
            <Wishlist item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
