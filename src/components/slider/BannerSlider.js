import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "../Movie/Movie";

import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../firebase'





const BannerSlider = () => {
  const [moviesList, setMoviesList] = useState([])


  useEffect(() => {
    const q = query(collection(db, "movies"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMoviesList(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, [])

  console.log(moviesList)


  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {moviesList.map((movie, i) => (
          <Movie key={i} src={movie.coverImgUrl} width="560px" />
        ))}
      </Slider>
    </>
  );
};

export default BannerSlider;
