import React, { useEffect, useRef } from "react";
import * as fabric from "fabric";
import { Box, Button, Stack } from "@mui/material";
import Navbar from "Components/Navbar";
import { useSelector } from "react-redux";

const Editor = () => {
  const canvasRef = useRef(null);
  const selectedImage = useSelector((state) => state.image.selectedImage); // Get selected image from state
  console.log("Selected Image: ", selectedImage?.src);

  useEffect(() => {
    // Ensure that the canvas is created only once
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 500,
      backgroundColor: "#f0f0f0",
    });

    // Check if there is a selected image
    if (selectedImage && selectedImage.src) {
      console.log("Selected Image:", selectedImage);
      console.log("Src: ", selectedImage.src);

      // Add image to the canvas
      fabric.Image.fromURL(
        selectedImage.src,
        (img) => {
          console.log("Image loaded:", img);
          img.set({ left: 0, top: 0 }).scaleToWidth(500);
          canvas.clear(); // Clear canvas before adding new image
          canvas.add(img);
          canvas.renderAll(); // Ensure the canvas is rendered after adding the image
        },
        { crossOrigin: "anonymous" }
      ).catch((error) => {
        console.error("Error loading image:", error);
      });
    } else {
      console.log("No image selected");
    }

    // Store the canvas instance in the ref
    canvasRef.current = canvas;

    // Cleanup function to dispose of the canvas on unmount
    return () => {
      canvas.dispose();
    };
  }, [selectedImage]);

  const addText = () => {
    const text = new fabric.IText("Edit me!", {
      left: 100,
      top: 100,
      fontSize: 24,
      fill: "black",
    });
    canvasRef.current.add(text);
  };

  const saveAsImage = () => {
    const dataURL = canvasRef.current.toDataURL({ format: "png" });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "edited-image.png";
    link.click();
  };

  return (
    <>
      <Navbar />
      <Box sx={{ textAlign: "center", p: 2 }}>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Button variant="contained" onClick={addText}>
            Add Text
          </Button>
          <Button variant="contained" onClick={saveAsImage} color="success">
            Download Image
          </Button>
        </Stack>
        <canvas ref={canvasRef} />
      </Box>
    </>
  );
};

export default Editor;
