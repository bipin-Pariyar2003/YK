import React from "react";
import { Button, Typography, Stack } from "@mui/material";
import businessCategories from "assets/businessCategories";
const B_Categories = () => {
  return (
    <>
      <Stack sx={{ width: "500px", height: "550px", mt: 2 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Select your Business Category
        </Typography>

        <Stack sx={{ overflowY: "auto", overflowX: "hidden" }}>
          {businessCategories.map((category) => (
            <React.Fragment key={category}>
              <Button>{category}</Button>
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default B_Categories;
