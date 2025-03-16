import { createSlice } from "@reduxjs/toolkit";
const savedColor = sessionStorage.getItem("selectedColor");
const initialState = savedColor ? JSON.parse(savedColor) : null;

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setSelectedColor: (state, action) => {
      const newColor = action.payload;
      sessionStorage.setItem("selectedColor", JSON.stringify(newColor));
      return newColor;
    },

    clearSelectedColor: (state) => {
      sessionStorage.removeItem("selectedColor");
      return null;
    },
  },
});

export const { setSelectedColor, clearSelectedColor } = colorSlice.actions;
export default colorSlice.reducer;
