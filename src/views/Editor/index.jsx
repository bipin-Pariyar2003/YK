import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as fabric from "fabric";
import { Box, Button, Stack } from "@mui/material";
import Navbar from "Components/Navbar";

const Editor = () => {
  const location = useLocation();
  const canvasRef = useRef(null);
  const image = location.state?.image; // Get selected image from state

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 500,
      backgroundColor: "#f0f0f0",
    });

    if (image) {
      fabric.Image.fromURL(image.src, (img) => {
        img.scaleToWidth(500);
        canvas.add(img);
      });
    }

    canvasRef.current = canvas;
    return () => {
      canvas.dispose();
    };
  }, [image]);

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
