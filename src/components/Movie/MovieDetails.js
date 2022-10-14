/* eslint-disable */;
import AddReview from "../Review/AddReview";
import Review from "../Review/Review";
import Title from "../UI/Title";
import DetailsBanner from "./DetailsBanner";
import { auth } from "../../auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from 'react-router-dom'
import { db } from "../../firebase"
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
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

      if (snap.data().review) setReviews(JSON.parse(snap?.data().review));

    }
    else {
      console.log("No such document")
    }
    console.log(movie)
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
        rating={review.rating || "N/A"}
        name={review.name || "N/A"}
        date={review.date || "00/00/0000"}
        description={review.comment || "N/A"}
      />
    );
  }) : null;

  return (
    <div>
      <DetailsBanner
        src={movie.tailerUrl}
        movieName={movie.name || "N/A"}
        director={movie.director || "N/A"}
        writers={movie.writer || "N/A"}
        stars={movie.stars || "N/A"}
        description={movie.description || "...."}
        view={movie.view || "N/A"}
      />
      <Title>Reviews</Title>


      <div className="row">
        <div className="col-md-7">
          {reviews.length > 0 ? userReviews : <h3 className="text-center">No Reviews</h3>}
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
