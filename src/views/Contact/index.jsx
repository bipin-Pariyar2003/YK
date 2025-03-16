import React from "react";
import Navbar from "Components/Navbar";
import { Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          // textAlign: "center",
        }}
      >
        {/* About Us  */}
        <Stack sx={{ lineHeight: 2, p: 2, mt: 2, height: "100%", width: "80%" }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            {" "}
            About Us
          </Typography>
          <Stack>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                mb: 2,
              }}
            >
              Welcome to <b style={{ marginBottom: 2 }}>YoroKobi</b>, the ultimate tool
              for businesses to create and customize posters effortlessly.
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "justify", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
            >
              Whether you're promoting offers, events, or special announcements, our
              intuitive platform helps you design high-quality posters in minutes—no
              design experience needed!
            </Typography>
          </Stack>
        </Stack>

        {/* Contact Us */}
        <Stack sx={{ lineHeight: 2, p: 2, height: "100%", width: "80%" }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Contact Us
          </Typography>
          <Stack>
            <Typography
              variant="h6"
              sx={{
                textAlign: "justify",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                mb: 2,
              }}
            >
              If you have any questions, feedback, or suggestions, please don't hesitate
              to reach out to us. We're here to help you make your posters stand out!
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* icons and links  */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "350px",
          backgroundColor: "#ccc",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <a
          href="mailto:bipin.pariyar2002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EmailIcon
            sx={{
              color: "inherit",
              height: "50px",
              width: "50px",
              ":hover": { scale: 1.2, cursor: "pointer" },
            }}
          />
        </a>
        <a
          href="https://linkedin.com/in/yorokobi-enterprise-software-systems-480661334"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <LinkedInIcon
            sx={{
              color: "inherit",
              height: "50px",
              width: "50px",
              ":hover": { scale: 1.2, cursor: "pointer" },
            }}
          />
        </a>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#333",
          color: "#fff",
          fontSize: "0.9rem",
          height: "100px",
        }}
      >
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          &copy; {new Date().getFullYear()} YoroKobi. All Rights Reserved.
        </Typography>
      </Stack>
    </>
  );
};

export default Contact;
