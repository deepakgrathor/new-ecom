import React from "react";

const ButtonComp = ({ title, width }) => {
  return (
    <>
      <div
        className={`flex ${
          width ? "w-32" : "w-full"
        } mx-auto cursor-pointer border-gray-600 rounded-md  border py-2 justify-center`}
      >
        <div className="">
          <button className={`text-black  ${width ? width : "w-full"} px-7`}>
            {title}
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonComp;
