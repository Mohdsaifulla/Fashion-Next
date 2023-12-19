import ProductsPage from "@/components/ProductsPage";
import { getProducts } from "@/fetchData";
import React from "react";
import { Products } from "../../../type";
import SingleProduct from "@/components/SingleProduct";
type Props = {
  searchParams: {
    _id:string |string[]
  };
};

const Product = async (searchParam: Props) => {
  const idString=searchParam.searchParams._id;
  const _id = Number(idString);
  // console.log(_id)
  const otherProducts = await getProducts();
  return (
    <div>
      <SingleProduct />
      <div>
        <p>Our Other Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 items-center justify-center px-6 ">
          {otherProducts.map((item: Products) => (
            <ProductsPage key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
