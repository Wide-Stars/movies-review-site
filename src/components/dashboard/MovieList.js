import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import TopHeader from "../TopHeader/TopHeader";
import deleteImg from "../../images/icons8-remove-48.png";
import { async } from "@firebase/util";

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

  const handleDelete = async (id) => {
    const docRef = doc(db, 'movies', id)
    try {
      await deleteDoc(docRef)
      moviesList.splice(moviesList.findIndex((movie) => movie.id === id), 1)
    } catch (err) {
      console.log(err)
    }
  }
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
              <>

                <div style={{ display: "flex" }}>
                  <Link to={`/movie/${movie.id}`} key={movie.id} style={{ flex: 10 }}>
                    <li >{movie.name}
                    </li>
                  </Link>
                  <img style={{ flex: 1, paddingTop: "10px" }} src={deleteImg} onClick={() => { handleDelete(movie.id) }} />
                </div>

              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
