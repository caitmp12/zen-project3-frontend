import React from "react"

const TreatsIndex = (props) => {

    const { treats } = props

    return (
        <div>
            <h2>Treats</h2>
            <label htmlFor="search"></label>
            <input type="text"></input>
            <div className="index-container">
                <div className="flex">
                    {treats.map((treat) => (
                        <>
                            <img src={treat.img} />
                            <p>{treat.name}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TreatsIndex