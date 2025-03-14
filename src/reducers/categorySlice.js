import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
