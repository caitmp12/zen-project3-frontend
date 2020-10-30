import React from "react"

const MoviesIndex = (props) => {

  const { movies } = props

  return (
    <div>
      <h2>Movies</h2>
      <label htmlFor="search"></label>
      <input type="text"></input>
      <div className="index-container">
        <div className="flex">
          {movies.map((movie) => (
            <>
              <img src={movie.poster} />
              <p
                onClick={() => {
                  props.selectItem(movie)
                  props.history.push(`/movies/${movie._id}`)
                }}>{movie.title}</p>
                <ul>
                  <li>{movie.year}</li>
                  <li>{movie.rated}</li>
                </ul>
                <p>{movie.plot}</p>
            </>
          ))}
        </div>
        <div className="filling-empty-space-childs"></div>
      </div>
    </div>
  )
}

export default MoviesIndex
