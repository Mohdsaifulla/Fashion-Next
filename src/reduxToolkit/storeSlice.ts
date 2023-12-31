import { createSlice } from "@reduxjs/toolkit";
import { ProductWithQuant, Products } from "../../type";
import {ProductProps } from "../../type";



interface productState {
  productData: ProductWithQuant[];
  singleProducts:ProductWithQuant | null;
  loginDetails: null | string;
  orderData:{
    order:ProductWithQuant[]
  };
}

const initialState: productState = {
  productData: [],
  singleProducts:null,
  loginDetails: null,
  orderData:{
    order:[]
  },
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
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData.order = [];
    },
    singleProductSlice:(state,action)=>{
      state.singleProducts=action.payload
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
  saveOrder,
  resetOrder,
  singleProductSlice
} = storeSlice.actions;
export default storeSlice.reducer;
