import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <>
      <div className="justify-center flex items-center h-screen w-full">
        <Spin size="large" />
      </div>
    </>
  );
};

export default Loader;
