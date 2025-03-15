import React from "react";
import Navbar from "Components/Navbar";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import imgArray from "assets/images/imgArray";
import { Height } from "@mui/icons-material";

const EditPage = () => {
  const selectedCategory = useSelector((state) => state.category);
  const selectedColor = useSelector((state) => state.color);
  const selectedType = useSelector((state) => state.type);

  // Access the selected images based on category and color
  const selectedImages = imgArray[selectedCategory]?.[selectedColor] || [];

  return (
    <>
      <Navbar />
      <Stack sx={{ display: "flex", px: 2, pb: 5 }}>
        <Stack sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h4">Select A Template</Typography>
        </Stack>
        <Typography>
          Selected Business Category: <b>{selectedCategory}</b>
        </Typography>
        <Typography>
          Selected Color: <b>{selectedColor} </b>
        </Typography>
        <Typography>
          Selected Orientation: <b>{selectedType} </b>
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            alignItems: "center",
            mt: 2,

            gap: 2,
          }}
        >
          {selectedImages.length > 0 ? (
            selectedImages.map((image) => (
              <Box
                component="img"
                key={image.id}
                src={image.src}
                alt={image.alt}
                sx={{
                  // height: { xs: "auto", md: "350px" },
                  // width: { xs: "200px", md: "auto" },
                  // width: selectedType === "landscape" ? "841px" : "594px",
                  // height: selectedType === "landscape" ? "594px" : "841px",
                  width: selectedType === "landscape" ? "70vw" : "50vw", // 70% or 50% of viewport width
                  height: "auto",
                  maxWidth: selectedType === "landscape" ? "700px" : "500px", // Scaled down from 841x594
                  maxHeight: selectedType === "landscape" ? "500px" : "700px",
                  aspectRatio: selectedType === "landscape" ? "1.414" : "0.707",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
              />
            ))
          ) : (
            <p>No images available for the selected category and color.</p>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default EditPage;
