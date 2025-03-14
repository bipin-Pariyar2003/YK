import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "left" }}>
          <Button
            color="inherit"
            sx={{ ml: "10rem", fontSize: "1.2rem" }}
            onClick={handleHome}
          >
            Live Demo
          </Button>

          <Box sx={{ ml: "auto", mr: "10rem" }}>
            <Button color="inherit" sx={{}} onClick={handleHome}>
              Home
            </Button>
            <Button color="inherit" sx={{}} onClick={handleContact}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
