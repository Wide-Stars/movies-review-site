import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    thumbnail:
      "https://i.ytimg.com/vi/s_uKTQmGjFs/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://i.ytimg.com/vi/s_uKTQmGjFs/maxresdefault.jpg",
  },
  {
    id: 15,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail:
      "https://i.ytimg.com/vi/s_uKTQmGjFs/maxresdefault.jpg",
  },
  {
    id: 571,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail:
      "https://i.ytimg.com/vi/s_uKTQmGjFs/maxresdefault.jpg",
  },

  {
    id: 33,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail: "https://i.ytimg.com/vi/s_uKTQmGjFs/maxresdefault.jpg",
  },
  {
    id: 13,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    thumbnail:
      "https://i.ytimg.com/vi/s_uKTQmGjFs/maxresdefault.jpg",
  },
];


const BannerSlider = () => {
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
        {movieData.map((movie) => (
          <Movie src={movie.thumbnail} width="560px" />
        ))}
      </Slider>
    </>
  );
};

export default BannerSlider;
