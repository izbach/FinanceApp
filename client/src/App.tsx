import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transactions from "./pages/Transactions.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
