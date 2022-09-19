import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='sidebar '>
            <div className="row">
                <div className="col-md-3 left-sidebar">
                    <Link to='/dashboard/add_movie'><li>Post Movie</li></Link>
                </div>
                <div className="col-md-8 container">
                    <h1>Welcome to Admin Section!</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
