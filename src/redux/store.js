import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./categories";

const store = configureStore({
  reducer: {
    category: productsReducer,
  },
});

export default store;
