import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setSelectedColor: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedColor } = colorSlice.actions;
export default colorSlice.reducer;
