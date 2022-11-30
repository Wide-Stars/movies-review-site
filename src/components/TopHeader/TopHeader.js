/* eslint-disable */;
import { RiMovie2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./topHeader.module.css";
import { db } from "../../firebase"
import { collection, query, where, getDocs } from "firebase/firestore";


const TopHeader = () => {

  const navigate = useNavigate();



  const getSearchedMovie = async (movieName) => {
    const q = query(collection(db, "movies"), where("name", "==", movieName));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs[0].id);
    if (querySnapshot.docs[0]?.id) {

      // navigate to movie details page
      navigate(`/movie/${querySnapshot.docs[0].id}`);


    } else {

    }
  }

  const onSearchClicked = () => {
    getSearchedMovie("Dhaka Attack")



  }

  return (
    <div className="mb-5">
      <header className={classes["top-header"]}>
        <Link className={classes["nav-brand"]} to="/"><RiMovie2Fill color="ff0000" />Film Craving</Link>

        <input type="search" className="form-control rounded m-5" placeholder="Search" aria-label="Search" />
        <button onClick={onSearchClicked} type="button" className="btn btn-outline-primary ">Search</button>


        <Navigation />

      </header>
      <hr />
    </div>
  );
};

export default TopHeader;
