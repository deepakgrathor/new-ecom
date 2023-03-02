import React, { memo } from "react";
import SectionTitle from "../../components/Common/SectionTitle";
import ButtonComp from "../../components/Buttons/ButtonComp";

const ShopByCategory = () => {
  console.log("shop by category");
  return (
    <>
      <div className="new-container mx-auto">
        <SectionTitle
          title={"Shop By "}
          SubTitle={"Shopping Category"}
          description={"We've got every shopping mood covered!"}
        />
        <div className="space-y-16">
          <div className="grid mt-16 grid-cols-6 gap-3">
            {ShopCategoryArr.map((e) => {
              return (
                <div className="text-center duration-300 cursor-pointer hover:-translate-y-3">
                  <img className="rounded-xl" src={e.img} alt="" />
                  <h2 className="font-semibold text-lg tracking-wide">
                    {e.title}
                  </h2>
                </div>
              );
            })}
          </div>
          <ButtonComp title="View All" width={32} />
        </div>
      </div>
    </>
  );
};

export const ShopCategoryArr = [
  {
    img: "https://ik.imagekit.io/43tomntsa/fashion.jpg",
    title: "Fashion",
  },
  {
    img: "https://ik.imagekit.io/43tomntsa/mobile.jpg",
    title: "Mobile",
  },
  {
    img: "https://ik.imagekit.io/43tomntsa/electronics.jpg",
    title: "Electronics",
  },
  {
    img: "https://ik.imagekit.io/43tomntsa/footwear.jpg",
    title: "Footwear",
  },
  {
    img: "https://ik.imagekit.io/43tomntsa/grocery.jpg",
    title: "Grocery",
  },
  {
    img: "https://ik.imagekit.io/43tomntsa/furniture.jpg",
    title: "Furniture",
  },
];

export default memo(ShopByCategory);
