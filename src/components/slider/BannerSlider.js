/* eslint-disable */;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "../Movie/Movie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    unsubscribe();
  }, []);

  //data fetching
  const q = query(collection(db, "movies"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    setMoviesList(
      querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      })
    );
    setIsLoading(false);
  });

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
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
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <>
      {!isLoading ? (
        <Slider {...settings}>
          {moviesList.map((movie) => (
            <Movie
              url={`/movie/${movie.id}`}
              key={movie.id}
              src={movie.coverImgUrl}
              width="490px"
            />
          ))}
        </Slider>
      ) : (
        <Skeleton
          width={540}
          inline
          height={275}
          count={3}
          baseColor="#242323"
        />
      )}
    </>
  );
};

export default BannerSlider;
