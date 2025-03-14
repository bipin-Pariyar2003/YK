import { Button, Stack, Typography, Card, Box } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "Components/Navbar";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/home");
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
        }}
      >
        {/* Animated Typography for Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ textAlign: "center" }} // Center text & button
        >
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
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

        {/* <Typography
          sx={{ backgroundColor: "#ccc", lineHeight: 2, p: 2, mt: 2, height: "100%" }}
        >
          <Typography variant="h4"> About Us</Typography> Welcome to <b>YoroKobi</b>, the
          ultimate tool for businesses to create and customize posters effortlessly.
          Whether you're promoting offers, events, or special announcements, our intuitive
          platform helps you design high-quality posters in minutes—no design experience
          needed!
        </Typography> */}
      </Stack>
    </>
  );
};

export default LandingPage;
