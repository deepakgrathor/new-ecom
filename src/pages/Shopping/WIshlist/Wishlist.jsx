import React from "react";
import SectionTitle from "../../../components/Common/SectionTitle";
import ProductCard from "../../../components/Shopping/ProductCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishProducts } = useSelector((state) => state.wishlistSlice);
  console.log("wishlist");
  return (
    <>
      <div className="py-20  container mx-auto">
        <SectionTitle title={"Your Wishlist"} />
        {wishProducts?.length > 0 ? (
          <div className="grid mt-20 grid-cols-5 gap-5">
            {wishProducts?.map((e) => {
              return <ProductCard key={e?.Id} item={e} />;
            })}
          </div>
        ) : (
          <Link to={'/'} className="flex justify-center">
            <img
            
              className="w-2/4"
              src="https://ik.imagekit.io/43tomntsa/dribble_shot_62_4x.webp"
              alt=""
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default Wishlist;
