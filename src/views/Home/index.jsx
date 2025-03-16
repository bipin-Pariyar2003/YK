import { Button, Stack, Typography, Card, Box } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "Components/Navbar";
import { useNavigate } from "react-router-dom";
import yorokobiTransparent from "assets/images/yorokobi-transparent.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/getStarted");
  };

  return (
    <>
      <Navbar />
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80svh",
          px: 2, // Padding for small screens
          position: "relative", // Enables absolute positioning inside
          // backgroundImage: `url(${yorokobiTransparent})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: { xs: "translate(-50%, -250%)", md: "translate(-50%, -115%)" }, // Centers the image
            width: { xs: "100px", md: "300px" },
            height: { xs: "100px", md: "300px" },
            backgroundImage: `url(${yorokobiTransparent})`,
            backgroundSize: "cover",

            backgroundRepeat: "no-repeat",
            filter: "brightness(80%)", // Dim the image (adjust the %)
            zIndex: -1, // Keep the background behind the content
          },
        }}
      >
        {/* Animated Typography for Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ textAlign: "center" }} // Center text & button
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              mt: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Welcome to the <br /> Yorokobi Enterprises Software Systems
          </Typography>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 2, fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Here you can customize the poster of your business according to your choice,
            for various offers or schemes.
          </Typography>
          {/* Centered Get Started Button */}
          <Button sx={{ mt: 2 }} onClick={handleGetStarted}>
            Get Started
          </Button>
        </motion.div>

        {/* Blinking Small Notice at Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }} // Blinking effect
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Card
              sx={{
                backgroundColor: "#ffeb3b",
                color: "#333",
                padding: "8px 16px", // Smaller padding
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)", // Lighter shadow
                borderLeft: "4px solid #ff9800", // Orange accent
                textAlign: "center",
                maxWidth: "250px", // Smaller width
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                ⚠️ Important Note
              </Typography>
              <Typography variant="body2" mt={0.5}>
                Poster size: <strong>A1</strong> only.
              </Typography>
            </Card>
          </motion.div>
        </motion.div>
      </Stack>
    </>
  );
};

export default LandingPage;
