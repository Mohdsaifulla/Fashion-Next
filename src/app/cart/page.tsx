"use client";

import Container from "@/components/Container";
import { useDispatch, useSelector } from "react-redux";
import { ProductWithQuant } from "../../../type";
import { removeAllItem } from "@/reduxToolkit/storeSlice";
import PaymentForm from "@/components/PaymentForm";
import Link from "next/link";
import type { RootState } from "@/reduxToolkit/store";
import CartItem from "@/components/CartItem";
const CartPage = () => {
  const { productData } = useSelector((state: RootState) => state.fashion);

  const dispatch = useDispatch();
  return (
<div>
      {productData.length > 0 ? (
        <div className="px-6">
          <h2 className="text-2xl font-bold mb-2 font-mono text-gray-600 py-1">Cart Items</h2>
          <div className="flex flex-col gap-5">
            <CartItem />
            <div className="flex items-center justify-end">
              <button
                onClick={() => dispatch(removeAllItem())}
                className="bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-200"
              >
                reset cart
              </button>
            </div>
            {/* Payment Form */}
            <PaymentForm />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
          <p className="border-[1px] border-orange-600 w-full p-2 text-center">
            Your product cart is currently empty
          </p>
          <Link href={"/"}>
            <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-orange-600 duration-200">
              Return to Shop
            </button>
          </Link>
        </div>
      )}
</div>
  );
};

export default CartPage;
