// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { selectedImage: null };

// const imageSlice = createSlice({
//   name: "image",
//   initialState,
//   reducers: {
//     setImage: (state, action) => {
//       state.selectedImage = action.payload;
//     },
//     clearImage: (state) => {
//       state.selectedImage = null;
//     },
//   },
// });

// export const { setImage, clearImage } = imageSlice.actions;
// export default imageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Load the selected image from localStorage, if it exists
const savedImage = localStorage.getItem("selectedImage");
const initialState = {
  selectedImage: savedImage ? { src: savedImage } : null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.selectedImage = action.payload;
      // Save the selected image to localStorage whenever it is set
      localStorage.setItem("selectedImage", action.payload.src);
    },
    clearImage: (state) => {
      state.selectedImage = null;
      // Remove the selected image from localStorage when it's cleared
      localStorage.removeItem("selectedImage");
    },
  },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
