import React from "react";
import Navbar from "Components/Navbar";
import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import imgArray from "assets/images/imgArray";

const EditPage = () => {
  const selectedCategory = useSelector((state) => state.category);
  const selectedColor = useSelector((state) => state.color);
  const selectedType = useSelector((state) => state.type);

  // Access the selected images based on category and color
  const selectedImages = imgArray[selectedCategory]?.[selectedColor] || [];

  return (
    <>
      <Navbar />
      <Stack sx={{ display: "flex" }}>
        <Stack sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h4">Select Template</Typography>
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

        {selectedImages.length > 0 ? (
          selectedImages.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} width={"250px"} />
          ))
        ) : (
          <p>No images available for the selected category and color.</p>
        )}
      </Stack>
    </>
  );
};

export default EditPage;
