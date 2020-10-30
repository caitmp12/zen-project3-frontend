import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const TreatsIndex = (props) => {

    const { treats } = props

    return (
        <div>
            <h2>Treats</h2>
            <label htmlFor="search"></label>
            <input type="text"></input>
            <div className="index-container">
                    {treats.map((treat) => (
                        <div className="map" onClick={() => {
                            props.selectItem(treat)
                            props.history.push(`/treats/${treat._id}`)
                        }}>
                            <div className="each">
                                <img src={treat.img} />
                                <p>{treat.name}</p>
                            </div>    
                        </div>
                    ))}
                    <div className="filling-empty-space-childs"></div>
            </div>
            <Link to={"/create/treats"}> Build Your Own</Link>
        </div>
    )
}

export default TreatsIndex

