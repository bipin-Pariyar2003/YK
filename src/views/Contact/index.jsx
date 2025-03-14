import React from "react";
import Navbar from "Components/Navbar";
import { Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80svh",
        }}
      >
        <Typography>Contact us for more info</Typography>
      </Stack>
    </>
  );
};

export default Contact;
