import ProductsPage from "@/components/ProductsPage";
import { getProducts } from "@/fetchData";
import React from "react";
import { Products } from "../../../type";
import SingleProduct from "@/components/SingleProduct";

type ProductSearchParams = {
  [_id:string]: number;
  // title: string;
  // isNew: string;
  // oldPrice: string;
  // price: string;
  // description: string;
  // category: string;
  // image: string;
  // rating: string;
};

type Props = {
  searchParams:  ProductSearchParams;
};

const Product = async (searchParams: Props) => {
  console.log(searchParams);

  const otherProducts = await getProducts();
  return (
    <div>
      <SingleProduct/>
      <div>{searchParams.searchParams.title}</div>
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
