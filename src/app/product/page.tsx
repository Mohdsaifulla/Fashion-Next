import ProductsPage from "@/components/ProductsPage";
import { getProducts } from "@/fetchData";
import React from "react";
import { Products } from "../../../type";
import SingleProduct from "@/components/SingleProduct";

const Product = async () => {
  const otherProducts = await getProducts();
  return (
    <>
    <div className="">
      <SingleProduct />
      <div>
        <p className="flex justify-center items-center mt-4 font-bold text-3xl">Our Other Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 items-center justify-center px-4 ">
          {otherProducts.map((item: Products) => (
            <ProductsPage key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
