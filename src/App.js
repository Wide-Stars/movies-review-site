import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import TopHeader from "./components/TopHeader/TopHeader";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <TopHeader />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/movieDetails" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
