import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import colors from "assets/colors";
import { useDispatch } from "react-redux";
import { setSelectedColor } from "reducers/colorSlice";

const Color = () => {
  const dispatch = useDispatch();

  const handleColorClick = (color) => {
    dispatch(setSelectedColor(color)); // Dispatch the selected color
  };
  return (
    // <Stack sx={{ width: "500px", height: "550px", mt: 2 }}>
    <Stack sx={{ mt: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Select Color
      </Typography>
      <Stack sx={{ overflowY: "auto", overflowX: "hidden" }}>
        {colors.map((color) => (
          <React.Fragment key={color}>
            <Button onClick={() => handleColorClick(color)}>{color}</Button>
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Color;
