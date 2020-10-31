import React, { useEffect } from "react";

const Steven = (props) => {

    const {searchedMovies, getSearchMovies} = props
   
    const page = {
        number: 1
    }

    const [searchData, setSearchData] = React.useState(props.search)
    const [thePage, setPage] = React.useState(page)

   
    const handleSubmit = (event) => {
        event.preventDefault();
        page.number = 1;
        getSearchMovies(searchData, thePage.number)
    }

    const nextPage = (page) => {
        page.number += 1;
        setPage(page)
    }

    const handleChange = (event) => {
        setSearchData(event.target.value)
    }

    
    useEffect(() => {
        return () => {
    setSearchData("")
        }
    },[])

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
                        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
                        <p>{movie.title}</p>
                    </div>
                </div> 
            ))} 
            <div className="filling-empty-space-childs"></div>
            <div onClick = {() => {
                nextPage(page)
                getSearchMovies(searchData, thePage)   
                }}><ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>   
    </div>
  )
};

export default Steven;


