import "./App.css";
import EditPage from "views/EditPage";
import GetStarted from "views/GetStarted";
import Home from "views/Home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "views/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
