import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const Show = (props) => {

    const { item } = props

    return (
        <div>
            <div className="index-container">
                <div className="show-flex">
                    <img src={item.img} />
                    <h2>{item.name}</h2>
                    <ul>
                    {item.ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                    ))}                            
                    </ul>  
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Show