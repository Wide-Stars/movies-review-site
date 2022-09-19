import React from "react";
import { Link } from "react-router-dom";
import AddReview from "../Review/AddReview";
import TopHeader from "../TopHeader/TopHeader";

const AddMove = () => {
  return (
    <div className="container-fluid">
      <TopHeader />
      <div className="sidebar ">
        <div className="row">
          <div className="col-md-3 left-sidebar">
            <Link to="/dashboard/add_movie">
              <li>Post Movie</li>
            </Link>
          </div>
          <div className="col-md-8 container">
            <AddReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMove;
