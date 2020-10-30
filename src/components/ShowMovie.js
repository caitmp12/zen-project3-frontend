import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const ShowMovie = (props) => {

    const { film } = props

    console.log(film)

    return (
        <div>
            <div className="index-container">
                <div className="show-flex">
                    <img src={film.img} />
                    <h2>{film.title}</h2>
                    <h2>{film.rated}</h2>
                    <p>{film.plot}</p>
                </div>    
            </div>
        </div>
    );
};

export default ShowMovie;