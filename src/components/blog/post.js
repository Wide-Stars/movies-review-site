import { React, useEffect, useState } from "react";
import { FaClock, FaEye, } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  collectionGroup,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const Post = () => {
  const [moviesList, setMoviesList] = useState([]);

  const q = query(collection(db, "movies"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      setMoviesList(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);
  return (
    <div className="mt-5">
      {moviesList.map((movie) => {
        return (
          <div className="card mb-3" key={movie.id}>
            <h5 className="card-title text text-dark text-center">
              {movie.name}
            </h5>

            <div className="row"></div>

            <div className="row ">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex post-time ps-4">
                  <FaClock className="me-2" size={20} />
                  <p>{movie.releaseDate ? movie.releaseDate : "Date not available"}</p>
                </div>

                <div className="d-flex post-time ps-4">
                  <BsFillStarFill size={20} className="text-warning me-2" />



                  <p>{Math.floor(Math.random() * 10) + 4} /10</p>


                </div>

                <div className="d-flex post-time pe-4">
                  <FaEye className="me-2" size={20} />
                  <p>{movie.view ? movie.view : "0"}</p>
                </div>
              </div>
            </div>

            <img
              src={movie.coverImgUrl}
              className="card-img-top"
              alt="..."
              width={"664px"}
              height={"374px"}
            />
            <div className="card-body text-center">
              <p className="card-text text-dark">{movie.description}</p>

              <Link to={"/movie/" + movie.id}>
                <button type="button" className="btn btn-outline-primary">
                  View more
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
