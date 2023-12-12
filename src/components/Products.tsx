import React from "react";
import { getProducts } from "@/fetchData";
import ProductsPage from "./ProductsPage";
import { products } from "../../type";

const Products = async () => {
  const produtcts = await getProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 items-center justify-center px-6">
      {produtcts?.map((item:products) => (
        <ProductsPage item={item} key={item._id}/>
      ))}
    </div>
  );
};

export default Products;
