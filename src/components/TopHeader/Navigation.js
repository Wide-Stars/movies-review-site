import React from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
