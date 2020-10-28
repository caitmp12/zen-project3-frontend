import React from "react"

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
                    <p>{drink.name}</p>
                    </>
                ))}
                </div>
            </div>
        </div>
    )
}

export default DrinkIndex