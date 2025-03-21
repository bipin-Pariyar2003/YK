import React from "react";
import Navbar from "Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import imgArray from "assets/images/imgArray";
import { useNavigate } from "react-router-dom";
import { setImage } from "reducers/imageSlice";

const ViewImages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [uploadedImage, setUploadedImage] = React.useState(null);

  const selectedCategory = useSelector((state) => state.category);
  const selectedColor = useSelector((state) => state.color);
  const selectedType = useSelector((state) => state.type);

  // Access the selected images based on category and color
  const selectedImages = imgArray[selectedCategory]?.[selectedColor] || [];

  const handleImageClick = (image) => {
    dispatch(setImage(image)); // Store in Redux
    navigate("/editor");
  };
  const handleBrowseCategory = () => navigate("/getStarted");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedImg = {
          id: Date.now(), // Use current timestamp as a unique ID
          src: reader.result, // Image source data URL
          alt: file.name, // Use file name as alt text
        };
        setUploadedImage(uploadedImg); // Set the uploaded image in local state
        dispatch(setImage(uploadedImg)); // Dispatch to Redux store
      };
      reader.readAsDataURL(file); // Read the uploaded file as a Data URL
    }
  };

  // Define aspect ratio based on selected type
  const getAspectRatio = () => {
    return selectedType === "landscape" ? "1.414" : "0.707";
  };

  return (
    <>
      <Navbar />
      <Stack sx={{ display: "flex", px: 2, pb: 5 }}>
        <Stack sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h4">Select A Template</Typography>
        </Stack>
        <Typography sx={{ mb: 2 }}>
          <b> Upload Background Yourself:</b>
          <span style={{ marginLeft: "10px" }}>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </span>
        </Typography>

        <Typography>
          Selected Business Category: <b>{selectedCategory}</b>
        </Typography>
        <Typography>
          Selected Color: <b>{selectedColor} </b>
        </Typography>
        <Typography>
          Selected Orientation: <b>{selectedType} </b>
        </Typography>

        {/* Display uploaded image if it exists */}
        {uploadedImage && (
          <Box
            component="img"
            src={uploadedImage.src}
            alt={uploadedImage.alt}
            sx={{
              mt: 2,
              alignItems: "center",
              width: selectedType === "landscape" ? "70vw" : "50vw", // Width based on selectedType
              height: "auto",
              maxWidth: selectedType === "landscape" ? "700px" : "500px",
              maxHeight: selectedType === "landscape" ? "500px" : "700px",
              aspectRatio: getAspectRatio(),
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.01)",
                boxShadow: "0 0 20px rgba(0,0,0,0.8)",
              },
            }}
            onClick={() => handleImageClick(uploadedImage)} // Click to go to editor
          />
        )}

        {/* Display template images */}
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
                onClick={() => handleImageClick(image)} // Navigate on click
                key={image.id}
                src={image.src}
                alt={image.alt}
                sx={{
                  width: selectedType === "landscape" ? "70vw" : "50vw", // 70% or 50% of viewport width
                  height: "auto",
                  maxWidth: selectedType === "landscape" ? "700px" : "500px", // Scaled down from 841x594
                  maxHeight: selectedType === "landscape" ? "500px" : "700px",
                  aspectRatio: getAspectRatio(),
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  cursor: "pointer", // Make it clickable
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: "0 0 20px rgba(0,0,0,0.8)",
                  },
                }}
              />
            ))
          ) : (
            <Stack>
              <Typography
                variant="h4"
                sx={{
                  mt: 2,
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No templates found for the selected category. !!!
              </Typography>
              <Typography variant="h5">
                You Can Upload background Image yourself
              </Typography>
              <Button sx={{ mt: 2, width: "max-content" }} onClick={handleBrowseCategory}>
                {" "}
                Browse Category
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default ViewImages;
