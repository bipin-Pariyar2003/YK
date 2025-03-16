import { createSlice } from "@reduxjs/toolkit";

const savedType = localStorage.getItem("selectedType");
const initialState = savedType ? JSON.parse(savedType) : null;

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      const newType = action.payload;
      localStorage.setItem("selectedType", JSON.stringify(newType));
      return newType;
    },
    clearSelectedType: (state) => {
      localStorage.removeItem("selectedType");
      return null;
    },
  },
});

export const { setSelectedType, clearSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
