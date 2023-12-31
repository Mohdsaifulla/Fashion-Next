"use client";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";
import toast, { Toaster } from "react-hot-toast";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import FormattedPrice from "./FormattedPrice";
import Image from "next/image";

import { addToCart } from "@/reduxToolkit/storeSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { singleProducts } = useSelector((state: RootState) => state.fashion);
  // console.log(singleProducts);
  if (!singleProducts) {
    return null; 
  }

  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      <div className="">
        <Image
          src={singleProducts?.image}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{singleProducts?.title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={singleProducts?.price} />
          </p>
        </div>
        <p className="text-lightText">{singleProducts?.description}</p>
        <div className="text-sm text-lightText flex flex-col">
          <span>
            SKU: <span className="text-darkText">{singleProducts?._id}</span>
          </span>
          <span>
            Category:{" "}
            <span className="text-darkText">{singleProducts?.category}</span>
          </span>
        </div>
        <div
          onClick={() =>
            dispatch(addToCart(singleProducts)) &&
            toast.success(
              `${singleProducts?.title.substring(0, 15)} added successfully!`
            )
          }
          className="flex items-center cursor-pointer group"
        >
          <button className="bg-darkText text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
            add to cart
          </button>
          <span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
            <IoMdCart />
          </span>
        </div>
        <p className="flex items-center gap-x-2 text-sm">
          <MdFavoriteBorder className="text-xl" />
          Add to wishlist
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
