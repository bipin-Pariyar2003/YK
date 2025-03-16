import React, { useState } from "react";
import Navbar from "Components/Navbar";
import BCategories from "Components/BCategories";
import Color from "Components/Color";
import {
  Button,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Type from "Components/Type";

const GetStarted = () => {
  // Access state from Redux store
  const selectedCategory = useSelector((state) => state.category);
  const selectedColor = useSelector((state) => state.color);
  const selectedType = useSelector((state) => state.type);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleEdit = () => {
    setOpen(true); // Open the dialog instead of alert()
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/view-images");
  };

  return (
    <>
      <Stack sx={{ height: "100svh", overflow: { xs: "auto", md: "hidden" } }}>
        <Navbar />
        <Stack
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            px: 2,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flex: 2,
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              height: "100svh",
            }}
          >
            <BCategories
              sx={{
                display: "flex",
                flex: 1,
                border: "1px solid black",
              }}
            />
            <Color sx={{ display: "flex", flex: 1, border: "1px solid black" }} />
            <Type sx={{ display: "flex", flex: 1, border: "1px solid black" }} />
          </Stack>

          {/* Display selected values */}

          <Stack
            sx={{
              display: "flex",
              flex: 1,
              textAlign: "left",
              justifyContent: "center",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            }}
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
      </Stack>

      {/* MUI Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Poster Size Information</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            The poster size is A1 only. <br />
            📏 **Inches**: 23.4 in × 33.1 in <br />
            📐 **CM**: 59.4 cm × 84.1 cm <br />
            📌 **MM**: 594 mm × 841 mm
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Proceed</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GetStarted;
