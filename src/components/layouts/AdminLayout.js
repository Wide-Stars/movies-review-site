/* eslint-disable */;
import { Link } from "react-router-dom";
import TopHeader from "../TopHeader/TopHeader";

const AdminLayout = (props) => {
  return (
    <div className="container-fluid">
      <TopHeader />
      <div className="sidebar">
        <div className="row">
          <div className="col-md-3 left-sidebar">
            <Link to="/dashboard/add_movie">
              <li>Post Movie</li>
            </Link>
            <Link to="/dashboard/movie_lists">
              <li>Movie List</li>
            </Link>
            <Link to="/dashboard/users_lists">
              <li>Users List</li>
            </Link>
          </div>
          <div className="col-md-9 left-sidebar">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
