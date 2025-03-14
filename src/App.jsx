import "./App.css";
import EditPage from "views/EditPage";
import Home from "views/Home";
import LandingPage from "views/LandingPage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "views/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
