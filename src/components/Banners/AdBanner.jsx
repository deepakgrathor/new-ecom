import React from "react";

const AdBanner = ({ BannerImage, BannerURL }) => {
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

export default AdBanner;
