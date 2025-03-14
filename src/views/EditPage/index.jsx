import React from "react";
import Navbar from "../../Components/Navbar";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const EditPage = () => {
  const selectedCategory = useSelector((state) => state.category);
  const selectedColor = useSelector((state) => state.color);

  return (
    <>
      <Navbar />
      <Typography variant="h1">This is edit page</Typography>
      <Typography variant="">Selected Business Category: {selectedCategory}</Typography>
      <p>Selected Color: {selectedColor}</p>
    </>
  );
};

export default EditPage;
