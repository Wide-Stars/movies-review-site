/* eslint-disable */ import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../UI/Title";
import Movie from "../Movie/Movie";

import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../firebase'





const LatestMovie = () => {

  const [moviesList, setMoviesList] = useState([])


  useEffect(() => {
    const q = query(collection(db, "movies"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMoviesList(querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }));

    });
  }, [])

  // console.log(moviesList)

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,

    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Title>Latest Movies</Title>
      <Slider {...settings}>
        {moviesList.map((movie) => (
          <Movie key={movie.id} src={movie.coverImgUrl} width="220px" url={`/movie/${movie.id}`} />
        ))}
      </Slider>
    </div>
  );
};

export default LatestMovie;
