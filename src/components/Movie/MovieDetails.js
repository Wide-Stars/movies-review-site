/* eslint-disable */;
import AddReview from "../Review/AddReview";
import Review from "../Review/Review";
import Title from "../UI/Title";
import DetailsBanner from "./DetailsBanner";
import { auth } from "../../auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from 'react-router-dom'
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase"

import { useEffect, useState } from "react";




const MovieDetails = () => {
  const [user] = useAuthState(auth);

  const [movie, setMovie] = useState({})
  const [reviews, setReviews] = useState('')


  const getMovieData = async (id) => {

    const snap1 = doc(db, 'movies', id)

    await updateDoc(snap1, {
      view: increment(1)

    });

    const snap = await getDoc(doc(db, 'movies', id))
    if (snap.exists()) {

      setMovie(snap.data())

      if (snap.data().review) {
        setReviews(JSON.parse(snap?.data().review));

      } else {
        setReviews([])
      }

    }
    else {
      console.log("No such document")
    }

  }

  const currentId = useLocation().pathname.split("/")[2];

  const reRenderHandler = () => {
    getMovieData(currentId)

  }
  useEffect(() => {

    reRenderHandler()


  }, [])



  const userReviews = reviews.length > 0 ? reviews.map((review) => {

    return (
      <Review
        rating={review.rating || "Loading.. ."}
        name={review.name || "Loading.. ."}
        date={review.date || "00/00/0000"}
        description={review.comment || "Loading.. ."}
      />
    );
  }) : null;

  return (
    <div>
      <DetailsBanner
        src={movie.tailerUrl}
        movieName={movie.name || "Loading.. ."}
        director={movie.director || "Loading.. ."}
        writers={movie.writer || "Loading.. ."}
        stars={movie.stars || "Loading.. ."}
        description={movie.description || "...."}
        view={movie.view || "Loading.. ."}
      />
      <Title>Reviews</Title>


      <div className="row">
        <div className="col-md-7">

          {reviews === 'empty' ? <h3 className="text-center">No Reviews</h3> : userReviews}

          {reviews === '' ? <h3 className="text-center">Loading reviews</h3> : ""}




        </div>
        <div className="col-md-5">
          {!user && <p className="text-center lead  ">Please login to add a new review</p>}
          {user && <>  <h2>Sumbit Your Review</h2>
            <AddReview id={currentId} reviews={reviews} reRenderHandler={reRenderHandler} /></>}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
