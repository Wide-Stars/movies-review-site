/* eslint-disable */;
import { RiMovie2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "./topHeader.module.css";

const TopHeader = () => {
  return (
    <div className="mb-5">
      <header className={classes["top-header"]}>
        <Link className={classes["nav-brand"]} to="/"><RiMovie2Fill color="ff0000" />Movie Revies</Link>
        <Navigation />
      </header>
      <hr />
    </div>
  );
};

export default TopHeader;
