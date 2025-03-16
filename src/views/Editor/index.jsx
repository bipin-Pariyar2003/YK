import React, { useEffect, useRef } from "react";
import * as fabric from "fabric";
import { FabricImage } from "fabric";
import { Box, Button, Stack } from "@mui/material";
import Navbar from "Components/Navbar";
import { useSelector } from "react-redux";

const Editor = () => {
  const canvasRef = useRef(null);
  const selectedImage = useSelector((state) => state.image.selectedImage); // Get selected image from state
  console.log("Selected Image: ", selectedImage?.src);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 500,
      backgroundColor: "#f0f0f0",
    });

    if (selectedImage && selectedImage.src) {
      console.log("Src: ", selectedImage.src);

      FabricImage.fromURL(
        selectedImage.src,
        (img) => {
          img.set({ left: 0, top: 0 }).scaleToWidth(500);
          canvas.clear(); // Clear canvas before adding new image
          canvas.add(img);
        },
        { crossOrigin: "anonymous" }
      ); // Use this option for cross-origin images if needed
    } else {
      console.log("No image selected");
    }

    canvasRef.current = canvas;
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
