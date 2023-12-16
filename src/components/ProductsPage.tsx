import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import { calculatedPercentage } from "@/fetchData";
import FormattedPrice from "./FormattedPrice";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const ProductsPage = ({ item }: ProductProps) => {

  const starArray = Array.from({ length: item?.rating }, (_, index) => (
    <span className="text-yellow-400" key={index}>
      <CiStar />
    </span>
  ));
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
      <Link href={{pathname:"/product", query:{_id:item?._id}}}>
        <div className=" w-full h-96 group overflow-hidden relative">
         
          <Image
            src={item.image}
            height={500}
            width={500} 
            alt="Product"
            className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-lg"
          />
         
          {item?.isNew && (
            <span className="absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-lg bg-white group-hover:bg-fuchsia-600 group-hover:text-white duration-200">
              New
            </span>
          )}
        </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <p>{item?.title}</p>
          <div className="flex items-center justify-between">
            <div className="border-[1px] border-fuchsia-600 py-1 px-4 rounded-lg text-xs">
              <p>{calculatedPercentage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={item?.oldPrice} />
              </p>
              <p className="font-extrabold">
                <FormattedPrice amount={item?.price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button  className="bg-fuchsia-600 px-4 py-2 text-sm tracking-wide rounded-lg text-slate-100 hover:bg-fuchsia-800 hover:text-white duration-200">add to cart</button>
            <div className="flex items-center gap-x-1">{starArray}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
