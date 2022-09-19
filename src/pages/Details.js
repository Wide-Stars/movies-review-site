import React from 'react';
import MovieDetails from '../components/Movie/MovieDetails';
import TopHeader from '../components/TopHeader/TopHeader';

const Details = () => {
    return (
        <div className="container">
            <TopHeader />
            <MovieDetails />
        </div>
    );
}

export default Details;
