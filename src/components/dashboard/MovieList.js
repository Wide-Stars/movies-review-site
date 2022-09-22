import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import TopHeader from "../TopHeader/TopHeader";

const Dashboard = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "movies"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMoviesList(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);
  console.log(moviesList);
  return (
    <div className="container-fluid">
      <TopHeader />
      <div className="sidebar ">
        <div className="row">
          <div className="col-md-3 left-sidebar">
            <Link to="/dashboard/add_movie">
              <li>Post Movie</li>
            </Link>
            <Link to="/dashboard/movie_lists">
              <li>Movie List</li>
            </Link>
          </div>
          <div className="col-md-9 left-sidebar">
            {moviesList.map((movie) => (
              <Link to={`/movie/${movie.id}`}>
                <li>{movie.name}</li>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
