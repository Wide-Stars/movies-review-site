/* eslint-disable */
import React, { useState, useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
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
import { async } from "@firebase/util";
import Card from "../UI/Card";
import { auth } from "../../auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  console.log("test")

  useEffect(() => {
    setIsLoading(true);
    unsubscribe();
    if (!user) {
      navigate("/login");

    }
  }, [user]);

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

  return (
    <AdminLayout>
      <div className="row">
        <div className="col-md-6">
          <Card>
            {!isLoading && <h3>Total Movie item: {moviesList.length}</h3>}
            {isLoading && (
              <h1 className="text-warning text-center">Loading.....</h1>
            )}
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            {isLoading && (
              <h1 className="text-warning text-center">Loading.....</h1>
            )}
            {!isLoading && <h3 className="text-info text-center">Comming soon...</h3>}
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
