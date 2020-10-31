import React, { useEffect } from "react";
import pumpkin from "../images/pumpkin.png"
import { Link } from "react-router-dom"


const Steven = (props) => {

    const {searchedMovies, getSearchMovies, forwardPage, pageNumber} = props
   

    const [searchData, setSearchData] = React.useState(props.search)


   
    const handleSubmit = (event) => {
        event.preventDefault();

        getSearchMovies(searchData, 1)
    }

    const handleChange = (event) => {
        setSearchData(event.target.value)
    }

    
    useEffect(() => {
        return () => {
    setSearchData("")
        }
    },[])

    const moviePoster = (movie) => {
        return movie.poster_path !== null ?
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
            : <img src={pumpkin} />
    }
    
  return (
    <div className="outer-container">
        <h2>Movies</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                search="search"
                value={searchData}
                onChange={handleChange}
                placeholder="Search Movie"
                className="search"
            />
            <input type="submit" className="button"value={props.label} />
        </form>
        <div className="index-container">
            {searchedMovies.results && searchedMovies.results.map((movie) => (
                <div className="map">
                    <div className="each">
                        <Link to={`/movies/${movie.title}`}
                            onClick={() => 
                        props.selectMovie({poster:`https://image.tmdb.org/t/p/w342/${movie.poster_path}` ,title: movie.title , rated: movie.vote_average , plot: movie.overview})}>
                            {moviePoster(movie)}
                            <p>{movie.title}</p>
                        </Link>
                
                    </div>
                </div> 
            ))} 
            <div className="filling-empty-space-childs"></div>
        </div>
        <div className="arrow" onClick = {() => {
            forwardPage()
            console.log(pageNumber.count)
            getSearchMovies(searchData, 2)   
            }}>
            <div className="field-wrap">
                <label>Next</label>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div> 
    </div>
  )
};

export default Steven;


