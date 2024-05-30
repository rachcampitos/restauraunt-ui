// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});

const fetchDishes = async (query = "") => {
  try {
    const response = await api.get(`/search.php?s=${query}`);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching dishes:", error);
    throw error;
  }
};

const fetchCategories = async () => {
  try {
    const response = await api.get("/list.php?c=list");
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export { fetchDishes, fetchCategories };
