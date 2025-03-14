import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import colors from "assets/colors";

const Color = () => {
  return (
    <Stack sx={{ width: "500px", height: "550px", mt: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Select Color
      </Typography>
      <Stack sx={{ overflowY: "auto", overflowX: "hidden" }}>
        {colors.map((color) => (
          <React.Fragment key={color}>
            <Button>{color}</Button>
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Color;
