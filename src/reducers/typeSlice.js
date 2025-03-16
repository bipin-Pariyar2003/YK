import { createSlice } from "@reduxjs/toolkit";

const savedType = sessionStorage.getItem("selectedType");
const initialState = savedType ? JSON.parse(savedType) : null;

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      const newType = action.payload;
      sessionStorage.setItem("selectedType", JSON.stringify(newType));
      return newType;
    },
    clearSelectedType: (state) => {
      sessionStorage.removeItem("selectedType");
      return null;
    },
  },
});

export const { setSelectedType, clearSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
