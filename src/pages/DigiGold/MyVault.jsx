import React from "react";

const MyVault = () => {
  return (
    <>
      <div className="w-2/4 mt-10 p-5 mx-auto rounded-t-3xl shadow-md items-center border-t border-l border-r border-blue-300 bg-white flex flex-col">
        <h2 className="text-2xl font-semibold tracking-wide px-8 -mt-10 bg-blue-900 p-2 rounded-lg text-white ">
          My Vault
        </h2>
        <div className="w-full mt-6 pb-3 flex items-center justify-around">
          <div className="space-y-2 ">
            <h2 className="text-2xl text-blue-800 font-bold">GOLD GRAMS</h2>
            <h2 className="text-lg tracking-wide text-center font-semibold">
              0.0000 Grams
            </h2>
          </div>
          {"|"}
          <div className="space-y-2">
            <h2 className="text-2xl text-blue-800 font-bold">SILVER GRAMS</h2>
            <h2 className="text-lg tracking-wide font-semibold text-center">
              0.0000 Grams
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyVault;
