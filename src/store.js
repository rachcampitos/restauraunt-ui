import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "./features/dishesSlices";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducer,
  },
});
