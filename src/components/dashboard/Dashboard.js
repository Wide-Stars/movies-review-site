/* eslint-disable */ import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <div className='sidebar '>
            <div className="row">
                <div className="col-md-3 left-sidebar">
                    <Link to='/dashboard/add_movie'><li>Post Movie</li></Link>
                    <Link to='/dashboard/movie_lists'><li>Movie List</li></Link>
                </div>
                <div className="col-md-9 left-sidebar">
                    <h1>Welcome to Admin Section!</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
