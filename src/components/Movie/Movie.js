/* eslint-disable */ import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <Link to={props.url}>
      <img src={props.src} alt="fh" width={props.width} />
    </Link>
  );
};

export default Movie;
