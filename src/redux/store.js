import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "reducers/categorySlice";
import colorReducer from "reducers/colorSlice";
import typeReducer from "reducers/typeSlice";
import imageReducer from "reducers/imageSlice";
// Create the Redux store
export const store = configureStore({
  reducer: {
    category: categoryReducer,
    color: colorReducer,
    type: typeReducer,
    image: imageReducer,
  },
});
