import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [
    {
      name: "Nike Air Huarache Le",
      category: "clothes",
    },
    {
      name: "Jacket",
      category: "clothes",
    },
    {
      name: "PlayStation 5",
      category: "tech",
    },
    {
      name: "Xbox Series S 512GB",
      category: "tech",
    },
    {
      name: "iMac 2021",
      category: "tech",
    },
    {
      name: "iPhone 12 Pro",
      category: "tech",
    },
    {
      name: "AirPods Pro",
      category: "tech",
    },
    {
      name: "AirTag",
      category: "tech",
    },
  ],
};

export const categoriesSlice = createSlice({
  name: "filterProducts",
  initialState: initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.products[0].category = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
