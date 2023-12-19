import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productState {
  productData: [];
  addToCart: [];
  loginDetails: null | string;
}

const initialState: productState = {
  productData: [],
  addToCart: [],
  loginDetails: null,
};

export const storeSlice = createSlice({
  name: "fashion",
  initialState,
  reducers: {

    
  },
});

export default storeSlice.reducer;
