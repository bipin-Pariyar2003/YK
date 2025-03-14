import React from "react";
import Navbar from "Components/Navbar";
import BCategories from "Components/BCategories";
import Color from "Components/Color";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Type from "Components/Type";

const GetStarted = () => {
  // Access state from Redux store
  const selectedCategory = useSelector((state) => state.category);
  const selectedColor = useSelector((state) => state.color);
  const selectedType = useSelector((state) => state.type);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit");
  };
  return (
    <>
      <Navbar />
      <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row", gap: 5 } }}>
        <BCategories sx={{ display: "flex", flex: 1 }} />
        <Color sx={{ display: "flex", flex: 1 }} />
        <Type sx={{ display: "flex", flex: 1 }} />

        {/* Display selected values */}

        <Stack
          sx={{ display: "flex", flex: 1, textAlign: "left", justifyContent: "center" }}
        >
          {selectedCategory && (
            <Typography variant="h6">
              Selected Business Category: <b>{selectedCategory}</b>
            </Typography>
          )}
          {selectedColor && (
            <Typography variant="h6">
              Selected Color: <b>{selectedColor}</b>
            </Typography>
          )}
          {selectedType && (
            <Typography variant="h6">
              Selected Orientation: <b>{selectedType}</b>
            </Typography>
          )}

          {selectedCategory && selectedColor && selectedType && (
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

export default GetStarted;
