import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const ShowMovie = (props) => {

    const { movie } = props

    console.log(movie)

    return (
        <div>
            <div className="show-container">
                <h2>{movie.title}</h2>
                <div className="show-flex">
                    <div className="show-row">
                        <img src={movie.poster} className="pic"/>
                        <div className="show-col">
                            <h3>Rating: {movie.rated}</h3>
                            <p className="show-p">{movie.plot}</p>
                        </div>
                    </div>
                </div>
                <Link to={"/movies/search"}><button className="button movie-button">Not in the mood for {movie.title}? Click here to Search Movies</button></Link>    
            </div>
        </div>
    );
};

export default ShowMovie;