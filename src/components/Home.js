import React from "react"
import { Link } from "react-router-dom"

const Home = (props) => {
    const {randomList} = props
    return (
        <div className="home">
          <button className="randomizer" onClick={() => 
            props.selectRandomList()}>
                Randomizer
          </button>
          <div className="results">
              <a href="#">Movie</a>
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