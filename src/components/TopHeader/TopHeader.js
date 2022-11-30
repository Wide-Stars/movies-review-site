/* eslint-disable */;
import React, { useRef, useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./topHeader.module.css";
import { db } from "../../firebase"
import { collection, query, where, getDocs } from "firebase/firestore";


const TopHeader = () => {

  const navigate = useNavigate();


  const [hasError, setErrors] = useState(false);

  const searchRef = useRef("")



  const getSearchedMovie = async (movieName) => {
    const q = query(collection(db, "movies"), where("name", "==", movieName));

    const querySnapshot = await getDocs(q);

    console.log(querySnapshot?.docs[0]?.id);

    if (querySnapshot?.docs[0]?.id) {

      setErrors(false);

      // navigate to movie details page
      navigate(`/movie/${querySnapshot?.docs[0].id}`);


    } else {

      setErrors(true);


    }
  }

  const onSearchClicked = () => {
    getSearchedMovie(searchRef.current.value)







  }

  return (
    <div className="mb-5">
      <header className={classes["top-header"]}>
        <Link className={classes["nav-brand"]} to="/"><RiMovie2Fill color="ff0000" />Film Craving</Link>

        <input ref={searchRef} type="search" className={`form-control rounded ${!hasError ? "m-3" : ""}`} placeholder="Search" aria-label="Search" />
        {hasError && <p className="text-center m-3 ">The movie doesn't exist</p>}
        <button onClick={onSearchClicked} type="button" className="btn btn-outline-primary ">Search</button>


        <Navigation />

      </header>
      <hr />
    </div>
  );
};

export default TopHeader;
