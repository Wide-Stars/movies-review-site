import React from "react";
import AddReview from "../Review/AddReview";
import Review from "../Review/Review";
import Title from "../UI/Title";
import DetailsBanner from "./DetailsBanner";

import { useLocation } from 'react-router-dom'
import { db } from "../../firebase"
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 32,
    rating: 5,
    name: "Hablu khan",
    date: "18 Sep 2022",
    description: "lorem dgdos agdag ajgodfg ikajgifdjgpagjsdg ",
  },
  {
    id: 82,
    rating: 5,
    name: "Hablu khan",
    date: "18 Sep 2022",
    description: "lorem dgdos agdag ajgodfg ikajgifdjgpagjsdg ",
  },
  {
    id: 824,
    rating: 5,
    name: "Hablu khan",
    date: "18 Sep 2022",
    description: "lorem dgdos agdag ajgodfg ikajgifdjgpagjsdg ",
  },
  {
    id: 823,
    rating: 5,
    name: "Hablu khan",
    date: "18 Sep 2022",
    description: "lorem dgdos agdag ajgodfg ikajgifdjgpagjsdg ",
  },
];



const MovieDetails = () => {
  const [movie, setMovie] = useState({})

  const getMovieData = async () => {
    const snap = await getDoc(doc(db, 'movies', 'VCAiXRYDrLk0ih4SG4gh'))
    if (snap.exists()) {
      console.log(snap.data())
      setMovie(snap.data())
    }
    else {
      console.log("No such document")
    }
  }

  useEffect(() => {
    getMovieData()

  }, [])

  const currentId = useLocation().pathname.split("/")[2];
  console.log(currentId);







  const userReviews = reviews.map((review) => {
    return (
      <Review
        rating={review.rating}
        name={review.name}
        date={review.date}
        description={review.description}
      />
    );
  });

  return (
    <div>
      <DetailsBanner
        src={movie.tailerUrl}
        movieName={movie.name || "N/A"}
        director={movie.director || "N/A"}
        writers={movie.writers || "N/A"}
        stars={movie.stars || "N/A"}
      />
      <Title>Reviews</Title>
      <div className="row">
        <div className="col-md-7">
          {userReviews}
        </div>
        <div className="col-md-5">
          <h2>Sumbit Your Review</h2>
          <AddReview />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
