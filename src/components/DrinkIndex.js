import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const DrinkIndex = (props) => {

    const {drinks} = props

    return (
        <div>
            <h2>Drinks</h2>
            <label htmlFor="search"></label>
            <input type="text"></input>
            <div className="index-container">
                <div className="flex">
                {drinks.map((drink) => (
                    <>
                    <img src={drink.img} />
                    <p
                        onClick={() => {
                            props.selectItem(drink)
                            props.history.push(`/drinks/${drink._id}`)
                        }}>{drink.name}</p>
                    </>
                ))}
                </div>
            </div>
        </div>
    )
}

export default DrinkIndex


//prop called match, props.match.params.id
//onClick on the button, historypush