import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const ShowMovie = (props) => {

    const { movie } = props

    console.log(movie)

    return (
        <div>
            <div>
                <div>
                   <img src={movie.poster} />
                    <h2>{movie.title}</h2>
                    <h2>{movie.rated}</h2>
                    <p>{movie.plot}</p>
                </div>    
            </div>
            <Link to={"/movies/search"}>Not in the mood for {movie.title}? Click here to Search Movies</Link>
        </div>
    );
};

export default ShowMovie;