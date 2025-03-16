import "./App.css";
import GetStarted from "views/GetStarted";
import Home from "views/Home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "views/Contact";
import ViewImages from "views/ViewImages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/view-images" element={<ViewImages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
