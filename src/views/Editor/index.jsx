import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Text } from "react-konva";
import { Box, Button } from "@mui/material";
import Navbar from "Components/Navbar";
import { useSelector } from "react-redux";

const Editor = () => {
  const stageRef = useRef(null); // Reference for the stage
  const selectedImage = useSelector((state) => state.image.selectedImage); // Get selected image from Redux state
  const selectedType = useSelector((state) => state.type); // Get selected orientation type
  const [image, setImage] = useState(null);
  const [imageProps, setImageProps] = useState({ width: 0, height: 0 });
  const [texts, setTexts] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track which text is being edited

  const getAspectRatio = () => {
    // Adjust aspect ratio based on selected type
    return selectedType === "landscape" ? 1.414 : 0.707;
  };

  useEffect(() => {
    if (selectedImage && selectedImage.src) {
      const img = new window.Image();
      img.src = selectedImage.src;
      img.crossOrigin = "anonymous"; // Prevent CORS issues

      img.onload = () => {
        // Get aspect ratio and calculate dimensions based on selected type
        const aspectRatio = getAspectRatio();
        const canvasWidth =
          window.innerWidth * (selectedType === "landscape" ? 0.5 : 0.4); // Use 70% width for landscape and 50% for portrait
        const canvasHeight = canvasWidth / aspectRatio; // Set height based on aspect ratio

        setImage(img);
        setImageProps({
          width: canvasWidth,
          height: canvasHeight,
        });
      };
    }
  }, [selectedImage, selectedType]); // Recalculate when selectedImage or selectedType changes

  // Add new text with draggable, editable, and scalable properties
  const addText = () => {
    setTexts([
      ...texts,
      {
        id: (texts.length + 1).toString(),
        text: "Edit me!",
        x: 100,
        y: 100,
        fontSize: 24,
        draggable: true,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
      },
    ]);
  };

  // Handle text position update during drag
  const handleDragMove = (e, id) => {
    const updatedTexts = texts.map((text) =>
      text.id === id ? { ...text, x: e.target.x(), y: e.target.y() } : text
    );
    setTexts(updatedTexts);
  };

  // Handle text scaling (when user changes scale)
  const handleScale = (e, id) => {
    const scale = e.target.scaleX();
    const updatedTexts = texts.map((text) =>
      text.id === id
        ? { ...text, scaleX: scale, scaleY: scale } // Update scale
        : text
    );
    setTexts(updatedTexts);
  };

  // Handle text rotation (when user rotates)
  const handleRotation = (e, id) => {
    const rotation = e.target.rotation();
    const updatedTexts = texts.map((text) =>
      text.id === id ? { ...text, rotation } : text
    );
    setTexts(updatedTexts);
  };

  // Start editing the text
  const handleTextClick = (id) => {
    setIsEditing(id); // Start editing this text
  };

  // Handle text change during editing
  const handleTextChange = (e, id) => {
    const updatedTexts = texts.map((text) =>
      text.id === id ? { ...text, text: e.target.value } : text
    );
    setTexts(updatedTexts);
  };

  // Save edited text and stop editing
  const handleTextBlur = () => {
    setIsEditing(null); // Stop editing when the user clicks out
  };

  // Download the canvas as an image
  const saveAsImage = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = uri;
    link.download = "edited-image.png";
    link.click();
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", height: "100svh" }}>
        {/* Left Panel: Buttons Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#f0f0f0",
            padding: 2,
          }}
        >
          <Button variant="contained" onClick={addText} sx={{ marginBottom: 2 }}>
            Add Text
          </Button>
          <Button variant="contained" onClick={saveAsImage} color="success">
            Download Image
          </Button>
        </Box>

        {/* Right Panel: Canvas Section */}
        <Box
          sx={{
            flex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <Stage
            ref={stageRef}
            width={imageProps.width}
            height={imageProps.height}
            style={{ border: "1px solid black" }}
          >
            <Layer>
              {image && (
                <Image
                  image={image}
                  x={0}
                  y={0}
                  width={imageProps.width}
                  height={imageProps.height}
                />
              )}
              {texts.map((text) => (
                <Text
                  key={text.id}
                  {...text}
                  onDragMove={(e) => handleDragMove(e, text.id)} // Update text position on drag
                  onTransform={(e) => handleScale(e, text.id)} // Update text scaling
                  onTransformEnd={(e) => handleRotation(e, text.id)} // Update text rotation
                  onClick={() => handleTextClick(text.id)} // Start editing on click
                  fontSize={text.fontSize}
                />
              ))}
            </Layer>
          </Stage>

          {/* Editable Text Input Overlay */}
          {isEditing && (
            <input
              type="text"
              value={texts.find((text) => text.id === isEditing).text}
              onChange={(e) => handleTextChange(e, isEditing)}
              onBlur={handleTextBlur}
              style={{
                position: "absolute",
                top: texts.find((text) => text.id === isEditing).y,
                left: texts.find((text) => text.id === isEditing).x,
                fontSize: `${texts.find((text) => text.id === isEditing).fontSize}px`,
                transform: `rotate(${
                  texts.find((text) => text.id === isEditing).rotation
                }deg)`,
                border: "1px solid black", // Optional styling for the input field
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Editor;
