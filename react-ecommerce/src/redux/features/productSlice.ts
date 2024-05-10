import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import { ProductSlice } from "../../models/ProductSlice";

const initialState: ProductSlice = {
  allProducts: [],
  categories: [],
  newProducts: [],
  featuredProducts: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    updateNewList: (state, action: PayloadAction<Product[]>) => {
      return { ...state, newProducts: action.payload };
    },
    updateFeaturedList: (state, action: PayloadAction<Product[]>) => {
      return { ...state, featuredProducts: action.payload };
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
      return { ...state, allProducts: action.payload };
    },
  },
});

export const {
  updateNewList,
  updateFeaturedList,
  addProducts,
} = productSlice.actions;
export default productSlice.reducer;
