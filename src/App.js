import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMove from "./components/Movie/AddMove";
import Admin from "./pages/Admin";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/dashboard/add_movie" element={<AddMove />} />
      </Routes>
    </Router>
  );
};

export default App;
