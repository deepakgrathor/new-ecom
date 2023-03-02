import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSubCategory } from "../../redux/slices/shopping/allCategorySlice";
import Carousel from "react-multi-carousel";
import Loader from "../../components/Common/Loader";
import {
  getProductsByCategory,
  getProductsBySubCategory,
} from "../../redux/slices/shopping/productSlice";
import ProductCard from "../../components/Shopping/ProductCard";
import { Card, Col, Row, Select } from "antd";

const ProductList = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [products, setProducts] = useState([]);
  const { subCat, loading } = useSelector(
    (state) => state.allCategorySlice.getSubCatbyCat
  );
  const { data, loading: catProLoading } = useSelector(
    (state) => state.productSlice.categoryByProduct
  );
  const { data: subCatByPro } = useSelector(
    (state) => state.productSlice.subCategoryByProduct
  );
  const getSubCatFunc = (id) => {
    dispatch(getProductsBySubCategory(id));
  };
  useEffect(() => {
    setProducts(subCatByPro.Data);
  }, [subCatByPro]);
  useEffect(() => {
    if (!subCatByPro) {
      setProducts(data.Data);
    }
    dispatch(getSubCategory(state));
    dispatch(getProductsByCategory(state));
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 6,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 991, min: 712 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 712, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // Sorted Filters
  const handleSorted = (e) => {
    let newArr = [...products];
    if (e === "lowtohigh") {
      const sorted = newArr.sort((a, b) => a?.SalePrice - b?.SalePrice);
      setProducts(sorted);
    } else if (e === "hightolow") {
      const sorted = newArr.sort((a, b) => b?.SalePrice - a?.SalePrice);
      setProducts(sorted);
    } else {
      setProducts(subCatByPro ? subCatByPro : data);
    }
  };
  return (
    <>
      <div className="my-32">
        <div className="container mx-auto">
          {!loading && subCat ? (
            <Carousel responsive={responsive} infinite={true}>
              {subCat &&
                subCat.Data?.map((e) => {
                  return (
                    <div
                      onClick={() => getSubCatFunc(e.Id)}
                      key={e.Id}
                      className="text-center  cursor-pointer space-y-2 justify-center flex flex-col items-center"
                    >
                      <img
                        className="w-32"
                        src={`http://shopadmin.vipswallet.com/Content/Images/subcategories/${e?.ImageUrl}`}
                        alt=""
                      />
                      <h2 className="text-center font-semibold text-xl">
                        {e?.Name}
                      </h2>
                    </div>
                  );
                })}
            </Carousel>
          ) : (
            <Loader />
          )}
          <div className="">
            <Card className="my-10 shadow">
              <Row>
                <Col span={6}>
                  <Select
                    onChange={handleSorted}
                    size="large"
                    defaultValue={"recom"}
                  >
                    <Select.Option value="recom">Recommended</Select.Option>
                    <Select.Option value="lowtohigh">
                      Price : Low to High
                    </Select.Option>
                    <Select.Option value="hightolow">
                      Price : High to Low
                    </Select.Option>
                  </Select>
                </Col>
              </Row>
            </Card>
            <div className="grid grid-cols-5 gap-5">
              {data && !catProLoading ? (
                products?.map((e) => {
                  return <ProductCard item={e} key={e.Id} />;
                })
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
