import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/main";

import Home from "./routes/Home";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>

  )
}

export default App