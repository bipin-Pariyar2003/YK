import React from "react";
import Navbar from "Components/Navbar";
import BCategories from "Components/BCategories";
import Color from "Components/Color";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Access state from Redux store
  const selectedCategory = useSelector((state) => state.category);
  const selectedColor = useSelector((state) => state.color);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit");
  };
  return (
    <>
      <Navbar />
      <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <BCategories sx={{ display: "flex", flex: 1 }} />
        <Color sx={{ display: "flex", flex: 1 }} />

        {/* Display selected values */}

        <Stack
          sx={{ display: "flex", flex: 1, textAlign: "left", justifyContent: "center" }}
        >
          {selectedCategory && (
            <Typography variant="h6">
              Selected Business Category: {selectedCategory}
            </Typography>
          )}
          {selectedColor && (
            <Typography variant="h6">Selected Color: {selectedColor}</Typography>
          )}

          {selectedCategory && selectedColor && (
            <Button
              sx={{ mt: 2, width: "max-content", textAlign: "center" }}
              onClick={handleEdit}
            >
              Start Edit
            </Button>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
