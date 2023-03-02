import React from "react";
import { useDispatch } from "react-redux";
import { openCloseModal } from "../../redux/slices/quickViewSlice";
const ButtonComp = ({ title, width, item, bg }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        onClick={() => dispatch(openCloseModal(item))}
        className={`flex ${
          width ? "w-32" : "w-full"
        } mx-auto cursor-pointer border-gray-300 rounded-md  border py-2 justify-center ${
          bg ? bg : "text-black bg-white"
        }`}
      >
        <div className="">
          <button className={` font-medium tracking-wider  ${width ? width : "w-full"} px-7`}>
            {title}
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonComp;
