import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = (props) => {

  const { setSelectedRandomList, randomList } = props
   
    useEffect(() => {
      return () => {setSelectedRandomList({movie: {}, drink: {}, treat: {}})}
    }, [])
    console.log(randomList)

    return (
        <div className="home">
          <button className="randomizer" onClick={() => 
            props.selectRandomList()}>
                Click Me!
          </button>
          <div className="results">
              <Link to={`movies/${randomList.movie._id}`}
                onClick={() => 
                  props.selectMovie(randomList.movie)}>{randomList.movie.title}</Link>
              <Link to={`/drinks/${randomList.drink._id}`} onClick={() =>
               props.selectItem(randomList.drink) 
            }>{randomList.drink.name}</Link>
              <Link to={`/treats/${randomList.treat._id}`} onClick={() =>
               props.selectItem(randomList.treat) 
            }>{randomList.treat.name}</Link>
          </div>
        </div>
    )
}

export default Home