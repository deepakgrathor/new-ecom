import React, { memo } from "react";

const AdBanner = ({ BannerImage, BannerURL }) => {
  console.log("chl re");
  return (
    <>
      <div
        onClick={(a) => window?.open(BannerURL, "_blank")}
        className="container cursor-pointer flex justify-center mx-auto"
      >
        <img src={BannerImage} className="" alt="" />
      </div>
    </>
  );
};

export default memo(AdBanner);
