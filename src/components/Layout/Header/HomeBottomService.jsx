import React from "react";
import { HeaderBottomMenu } from "./HeaderBottomService";

const HomeBottomService = ({ grid, bg }) => {
  return (
    <>
      <div
        className={`bg-blue-100 shadow-lg
         container mx-auto  rounded-2xl mt-10`}
      >
        <div
          className={`${
            grid
              ? `grid grid-cols-4 gap-4 py-10`
              : "flex items-center justify-evenly"
          } `}
        >
          {HeaderBottomMenu.map((e) => {
            return (
              <div
                className={` ${
                  grid ? "p-5" : "py-4"
                } hover:scale-105 duration-300 cursor-pointer text-center space-y-1`}
              >
                <img className="w-16 mx-auto" src={e.img} alt="" />
                <h2 className="font-semibold tracking-wide text-center">
                  {e.title}
                </h2>
                {grid && <p className="w-52 mx-auto">{e.desc}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeBottomService;
