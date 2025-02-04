import Navbar from "./Components/Navbar.tsx";
import { LineGraph } from "./Components/LineGraph.tsx";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { BarGraph } from "./Components/BarGraph.tsx";
import axios from "axios";
import Home from "./pages/home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
