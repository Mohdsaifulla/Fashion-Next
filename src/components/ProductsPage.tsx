import React from "react";
import { productProps } from "../../type";
import Image from "next/image";
const ProductsPage = ({ item }: productProps) => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="w-full h-96 group overflow-hidden relative">
        <div>
        <Image src={item.image} height={500} width={500} alt="Product" className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-lg"/>
        {item?.isNew && (
          <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-orange-600 group-hover:text-white duration-200">
            New
          </span>
          
        )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
