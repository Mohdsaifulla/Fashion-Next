import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductWithQuant } from "../../type";

interface productState {
  productData: ProductWithQuant[];
  loginDetails: null | string;
}

const initialState: productState = {
  productData: [],
  loginDetails: null,
};

export const storeSlice = createSlice({
  name: "fashion",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.productData.find(
        (item: ProductWithQuant) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
  },
});
export const { addToCart } = storeSlice.actions;
export default storeSlice.reducer;
