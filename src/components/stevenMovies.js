import React, { useEffect } from "react";

const Steven = (props) => {

    const {searchedMovies, getSearchMovies, page} = props
   
    
    
    const [searchData, setSearchData] = React.useState(props.search)
    const [thePage, setPage] = React.useState(1)

    const handleSubmit = (event) => {
        event.preventDefault();
        getSearchMovies(searchData, 1)
    }

    const handleChange = (event) => {
        setSearchData(event.target.value)
    }
    const setthePage = (pageNumber) => {
        setPage(thePage)
    }
    
    // useEffect(() => {
    //     return () => {
    // setSearchData("")
    //     }
    // },[])

  return (
    <div>
            <h2>Movies</h2>
            {/* search bar */}
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                search="search"
                value={searchData}
                onChange={handleChange}
                />
                <input type="submit" value={props.label} />
            </form>
              <div className="index-container">
                  {searchedMovies.results && searchedMovies.results.map((movie) => (
                    <div className="map">
                            <div className="each">
                                <img src={movie.poster_path} />
                                <p>{movie.title}</p>
                            </div>
                    </div> 
            
                ))} 
                <div className="filling-empty-space-childs"></div>
                <p onClick = {() => {
                    setPage(2)
                    getSearchMovies(searchData, thePage)
                    
                }}
                ><ion-icon name="play-outline"></ion-icon></p>


            </div>   

        </div>
  )
};

export default Steven;


