import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductWithQuant } from "../../type";


interface productState {
  productData: ProductWithQuant[];
  loginDetails: null | string;
  orderData:[]
}

const initialState: productState = {
  productData: [],
  loginDetails: null,
  orderData:[]
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
    increaseQuant: (state, action) => {
      const existingItem = state.productData.find(
        (item: ProductWithQuant) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    decreaseQuant: (state, action) => {
      const existingItem = state.productData.find(
        (item: ProductWithQuant) => item._id === action.payload._id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          existingItem.quantity = 1;
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
    deleteOneItem: (state, action) => {
      state.productData.splice(action.payload._id, 1);
    },
    removeAllItem: (state) => {
      state.productData = [];
    },
    userInfoAdded: (state, action) => {
      state.loginDetails = action.payload;
    },
    deleteUserInfo: (state) => {
      state.loginDetails = null;
    },
    saveOrder:(state,action)=>{
      state.orderData=action.payload
    },
    resetOrder:(state)=>{
      state.orderData=[]
    }
  },
});
export const {
  addToCart,
  increaseQuant,
  decreaseQuant,
  deleteOneItem,
  removeAllItem,
  userInfoAdded,
  deleteUserInfo,
  saveOrder,resetOrder
} = storeSlice.actions;
export default storeSlice.reducer;
