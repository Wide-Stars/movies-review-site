import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Admin from "./pages/Admin";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/movieDetails" element={<Details />} />
        <Route path="/dashboard" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
