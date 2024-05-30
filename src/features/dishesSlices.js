// src/features/dishesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDishes, fetchCategories } from "../api/foodApi";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (query = "") => {
    return await fetchDishes(query);
  }
);

export const getCategories = createAsyncThunk(
  "dishes/getCategories",
  async () => {
    return await fetchCategories();
  }
);

const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    dishes: [],
    categories: [],
  },
  reducers: {
    createDish: (state, action) => {
      state.dishes.push(action.payload);
    },
    deleteDish: (state, action) => {
      state.dishes = state.dishes.filter(
        (dish) => dish.idMeal !== action.payload.id
      );
    },
    updateDish: (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.idMeal === action.payload.id
      );
      if (index !== -1) {
        state.dishes[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDishes.fulfilled, (state, action) => {
      state.dishes = action.payload || [];
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload || [];
    });
  },
});

export const { createDish, deleteDish, updateDish } = dishesSlice.actions;
export default dishesSlice.reducer;
