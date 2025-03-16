import "./App.css";
import GetStarted from "views/GetStarted";
import Home from "views/Home";
import Contact from "views/Contact";
import ViewImages from "views/ViewImages";
import Editor from "views/Editor";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/view-images" element={<ViewImages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
