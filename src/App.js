/* eslint-disable */;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMove from "./components/dashboard/AddMove";
import MovieList from "./components/dashboard/MovieList";
import Admin from "./pages/Admin";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/movie/:id" element={<Details />} />
        <Route path="/dashboard" element={<Admin />} />
        <Route path="/dashboard/add_movie" element={<AddMove />} />
        <Route path="dashboard/movie_lists" element={<MovieList />} />
      </Routes>
    </Router>
  );
};

export default App;
