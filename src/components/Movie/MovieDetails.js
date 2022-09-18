import React from "react";
import AddReview from "../Review/AddReview";
import Review from "../Review/Review";
import Title from "../UI/Title";
import DetailsBanner from "./DetailsBanner";

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
      <DetailsBanner />
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
