import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/main";


function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div> Please insert landing page</div>} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>

  )
}

export default App