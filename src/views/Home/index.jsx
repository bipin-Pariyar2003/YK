import React from "react";
import Navbar from "Components/Navbar";
import B_Categories from "Components/B_Categories";
import Color from "Components/Color";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <B_Categories />
        <Color />
      </Stack>
    </>
  );
};

export default Home;
