import React from "react";
import { VIPS_LOGO, vendorPanelAPi } from "../../../utils/Constants";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { Badge, Button } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import HeaderBottomService from "./HeaderBottomService";
import { useSelector } from "react-redux";

const Header = ({ show }) => {
  const { wishProducts } = useSelector((state) => state.wishlistSlice);
  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <nav class="flex bg-white rounded-b-2xl shadow-md items-center justify-between p-6">
          <div className="flex items-center">
            <div class="flex  items-center flex-no-shrink text-white mr-6">
              <img src={VIPS_LOGO} alt="" className="w-40" />
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm space-x-8 lg:flex-grow">
                {TopNavMenu.map((e) => {
                  return (
                    <NavLink
                      to={e.route}
                      class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white text-lg font-normal"
                    >
                      {e.title}
                    </NavLink>
                  );
                })}
              </div>
              <div>
                <a
                  href="#"
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 items-center">
            <div class=" border-2 border-gray-300 bg-white px-5 rounded-lg h-12 text-sm  items-center flex justify-between  text-gray-600">
              <input
                class="w-80 focus:outline-none"
                type="search"
                name="search"
                placeholder="What are you looking...."
              />

              <FiSearch className="text-xl" />
            </div>
            <div className="space-x-8 flex items-center">
              <Badge count={0} showZero>
                <FiShoppingCart className="text-2xl cursor-pointer" />
              </Badge>
              <Link to={"/wishlist"}>
                <Badge count={wishProducts && wishProducts?.length} showZero>
                  <FiHeart className="text-2xl cursor-pointer" />
                </Badge>
              </Link>
            </div>
            <div className="">
              <Button
                className="shadow text-base p-5 text-gray-700 flex items-center space-x-2"
                icon={<AiOutlineUser />}
                type="dashed"
              >
                Sign In
              </Button>
            </div>
          </div>
        </nav>
        {show && <HeaderBottomService />}
      </div>
    </>
  );
};

export const TopNavMenu = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Shopping",
    route: "/shopping",
  },
  {
    title: "Services",
    route: "/services",
  },
  {
    title: "Online Stores",
    route: "/online-stores",
  },
  {
    title: "Digi Gold",
    route: "/digigold",
  },
  {
    title: "Become a Supplier",
    route: vendorPanelAPi,
  },
];

export default Header;
