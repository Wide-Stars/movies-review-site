import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../UI/Title";
import Movie from "../Movie/Movie";

const movieData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2015/talwar/poster.jpg",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2015/talwar/poster.jpg",
  },
  {
    id: 15,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2015/talwar/poster.jpg",
  },
  {
    id: 571,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2015/talwar/poster.jpg",
  },

  {
    id: 33,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2015/talwar/poster.jpg",
  },
  {
    id: 13,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2015/talwar/poster.jpg",
  },
];

const LatestMovie = () => {
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
        {movieData.map((movie) => (
          <Movie src={movie.thumbnail} width="220px" />
        ))}
      </Slider>
    </div>
  );
};

export default LatestMovie;
