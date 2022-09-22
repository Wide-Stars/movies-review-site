/* eslint-disable */ import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMove from "./components/dashboard/AddMove";
import MovieList from "./components/dashboard/MovieList";
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
        <Route path="dashboard/movie_lists" element={<MovieList />} />
      </Routes>
    </Router>
  );
};

export default App;
