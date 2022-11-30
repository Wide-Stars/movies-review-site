/* eslint-disable */;
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./topHeader.module.css";

const TopHeader = () => {

  const onSearchClicked = () => {
    console.log("search clicked");
  }

  return (
    <div className="mb-5">
      <header className={classes["top-header"]}>
        <Link className={classes["nav-brand"]} to="/"><RiMovie2Fill color="ff0000" />Film Craving</Link>

        <input type="search" class="form-control rounded m-5" placeholder="Search" aria-label="Search" />
        <button onClick={onSearchClicked} type="button" class="btn btn-outline-primary ">Search</button>


        <Navigation />

      </header>
      <hr />
    </div>
  );
};

export default TopHeader;
