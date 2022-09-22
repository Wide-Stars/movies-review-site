/* eslint-disable */ import React from "react";
import Card from "../UI/Card";

const DetailsBanner = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          {/* <iframe
            width="100%"
            height="420"
            src={props.src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <iframe width="100%"
            height="420" src={`https://www.youtube.com/embed${props.src}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Card className="col-md-4">
          <h4>Movie Name: {props.movieName}</h4>
          <h5>Director: {props.director}</h5>
          <h5>Writers: {props.writers}</h5>
          <h5>Stars: {props.stars}</h5>
        </Card>
      </div>
    </div>
  );
};

export default DetailsBanner;
