
/* eslint-disable */;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import TopHeader from "../TopHeader/TopHeader";
// import { async } from "@firebase/util";
import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    unsubscribe();
  }, []);

  //data fetching from firebase
  const q = query(collection(db, "movies"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    setMoviesList(
      querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      })
    );
    setIsLoading(false);
  });

  const handleDelete = async (id) => {
    const docRef = doc(db, "movies", id);
    try {
      await deleteDoc(docRef);
      moviesList.splice(
        moviesList.findIndex((movie) => movie.id === id),
        1
      );
    } catch (err) {
      console.log(err);
    }
  };

  const movielists = moviesList.map((movie) => {
    return (
      <tr>
        <td>
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            {movie.name}
          </Link>
        </td>
        <td>
          <button
            onClick={() => {
              handleDelete(movie.id);
            }}
            className="btn btn-danger"
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  });
  return (
    <AdminLayout>
      {!isLoading && moviesList.length === 0 && (
        <h2 className="text-warning text-center">oops! no movies were found</h2>
      )}
      {!isLoading && moviesList.length > 0 && (
        <table className="table  table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>{movielists}</tbody>
        </table>
      )}
      {isLoading && <h1 className="text-warning text-center">Loading.....</h1>}
    </AdminLayout>
  );
};

export default Dashboard;
