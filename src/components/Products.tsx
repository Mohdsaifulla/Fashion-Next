import React from "react";
import { getProducts } from "@/fetchData";
import ProductsPage from "./ProductsPage";

const Products = async () => {
  const produtcts = await getProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 items-center justify-center px-6">
      {produtcts.map((item) => (
        <ProductsPage />
      ))}
    </div>
  );
};

export default Products;
