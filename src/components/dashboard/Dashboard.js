import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../../firebase'

const Dashboard = () => {
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const q = query(collection(db, "movies"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setMoviesList(querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }));
        });

    }, [])
    console.log(moviesList)
    return (
        <div className='sidebar '>
            <div className="row">
                <div className="col-md-3 left-sidebar">
                    <Link to='/dashboard/add_movie'><li>Post Movie</li></Link>
                </div><div className="col-md-3 left-sidebar">

                    {moviesList.map((movie) => <Link to={`/movie/${movie.id}`}><li>{movie.name}</li></Link>)}
                </div>
                <div className="col-md-5 left-sidebar">
                    <h1>Welcome to Admin Section!</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
