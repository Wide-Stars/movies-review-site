import { React, useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  collectionGroup,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./topHeader.module.css";
import { RiMovie2Fill } from "react-icons/ri";





const TopHeader = () => {

  const [search, setSearch] = useState("");


  const [moviesList, setMoviesList] = useState([]);

  const q = query(collection(db, "movies"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      setMoviesList(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  return (
    <div className="mb-5">
      <header className={classes["top-header"]}>
        <Link className={classes["nav-brand"]} to="/"><RiMovie2Fill color="ff0000" />Film Craving</Link>

        <input onChange={(e) => { setSearch(e.target.value) }} type="search" className={`form-control rounded `} placeholder="Search" aria-label="Search" />

        <button type="button" className="btn btn-outl ine-primary ">Search</button>


        <Navigation />

      </header>
      <div className=" d-flex justify-content-center">
        <div style={
          {
            width: "60%",
            marginLeft: "-14rem"
          }
        } className="d-flex justify-content-center flex-column mt-3  ">
          <ul className="list-group list-group-flush bg-dark ">

            {
              moviesList.filter((movie) => {
                if (search == "") {

                } else if (movie.name.toLowerCase().includes(search.toLowerCase())) {
                  return movie
                }
              }).map((movie) => {
                return (
                  <li className="list-group-item text-white bg-dark">
                    <Link className="text-decoration-none 
							text-light" to={`/movie/${movie.id}`}>{movie.name}</Link>
                  </li>
                )

              })}

          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopHeader;
