import { createSlice } from "@reduxjs/toolkit";

// Load the selected image from sessionStorage, if it exists
const savedImage = sessionStorage.getItem("selectedImage");
const initialState = {
  selectedImage: savedImage ? { src: savedImage } : null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.selectedImage = action.payload;
      // Save the selected image to sessionStorage whenever it is set
      sessionStorage.setItem("selectedImage", action.payload.src);
    },
    clearImage: (state) => {
      state.selectedImage = null;
      // Remove the selected image from sessionStorage when it's cleared
      sessionStorage.removeItem("selectedImage");
    },
  },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
