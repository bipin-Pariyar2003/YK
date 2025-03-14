import React from "react";
import { Button, Typography, Stack } from "@mui/material";
import businessCategories from "assets/businessCategories";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "reducers/categorySlice";
const B_Categories = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category)); // Dispatch the selected category
  };

  return (
    <>
      {/* <Stack sx={{ height: "550px", mt: 0 }}> */}
      <Stack sx={{ height: { xs: "250px", md: "100svh" }, mt: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Select Business Category
        </Typography>

        <Stack
          sx={{ overflowY: "auto", overflowX: "hidden", pb: { xs: 0, md: "100px" } }}
        >
          {businessCategories.map((category) => (
            <React.Fragment key={category}>
              <Button onClick={() => handleCategoryClick(category)}>{category}</Button>
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default B_Categories;
