import { createSlice } from "@reduxjs/toolkit";

// Load the selected category from localStorage, if it exists
const savedCategory = localStorage.getItem("selectedCategory");
const initialState = savedCategory ? JSON.parse(savedCategory) : null;

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      const newCategory = action.payload;
      // Save the selected category to both Redux and localStorage
      localStorage.setItem("selectedCategory", JSON.stringify(newCategory));
      return newCategory;
    },
    clearSelectedCategory: (state) => {
      // Clear the selected category from Redux and localStorage
      localStorage.removeItem("selectedCategory");
      return null;
    },
  },
});

export const { setSelectedCategory, clearSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
