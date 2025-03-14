import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedType } = typeSlice.actions;
export default typeSlice.reducer;
