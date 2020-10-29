import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const DrinkIndex = (props) => {

    const {drinks} = props

    return (
        <div>
            <h2>Drinks</h2>
            {/* search bar */}
            <label htmlFor="search"></label>
            <input type="text"></input>

            <div className="index-container">
                {drinks.map((drink) => (
                    <div className="map" onClick={() => {
                        props.selectDrink(drink)
                        props.history.push(`/drinks/${drink._id}`)}}>
                            <div className="each">
                                <img src={drink.img} />
                                <p>{drink.name}</p>
                            </div>
                    </div> 
                ))}
                <div className="filling-empty-space-childs"></div>
            </div>
        </div>
    )
}

export default DrinkIndex


//prop called match, props.match.params.id
//onClick on the button, historypush