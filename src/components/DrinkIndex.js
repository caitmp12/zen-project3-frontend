import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const DrinkIndex = (props) => {

    const {drinks} = props

    return (
        <div>
            <header>
                <h2>Drinks</h2>
            </header>
            <div className="index-container">
                {drinks.map((drink) => (
                    <div className="map" onClick={() => {
                        props.selectItem(drink)
                        props.history.push(`/drinks/${drink._id}`)}}>
                            <div className="each">
                                <img src={drink.img} />
                                <p>{drink.name}</p>
                            </div>
                    </div> 
                ))}
                <div className="filling-empty-space-childs"></div>
            </div> 
            <footer>
                <Link to={"/create/drinks"}><button>Brew Your Own</button></Link>
            </footer>
        </div>
    )
}

export default DrinkIndex


