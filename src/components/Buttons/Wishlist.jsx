import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addWish, removeWish } from "../../redux/slices/wishlistSlice";
import { useResolvedPath } from "react-router-dom";

const Wishlist = ({ item }) => {
  const { pathname } = useResolvedPath();

  const dispatch = useDispatch();
  const { wishProducts } = useSelector((state) => state.wishlistSlice);

  const AddtoWishList = () => {
    dispatch(addWish(item));
  };
  const RemoveWishList = () => {
    dispatch(removeWish(item));
  };
  return (
    <>
      <div
        onClick={
          wishProducts && wishProducts.some((p) => p?.Id === item?.Id)
            ? RemoveWishList
            : AddtoWishList
        }
        className="border cursor-pointer border-gray-600 p-2 rounded-lg"
      >
        {wishProducts && wishProducts.some((p) => p?.Id === item?.Id) ? (
          pathname === "/wishlist" ? (
            <AiFillDelete className="text-2xl text-gray-600" />
          ) : (
            <AiFillHeart className="text-2xl text-gray-600" />
          )
        ) : (
          <AiOutlineHeart className="text-2xl text-gray-600" />
        )}
      </div>
    </>
  );
};

export default Wishlist;
