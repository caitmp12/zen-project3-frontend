import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const TreatsIndex = (props) => {

    const { treats } = props

    return (
        <div>
            <header>
                <h2>Treats</h2>
            </header>
            <div className="index-container">
                {treats.map((treat) => (
                    <div className="map" onClick={() => {
                        props.selectItem(treat)
                        props.history.push(`/treats/${treat._id}`)}}>
                            <div className="each">
                                <img src={treat.img} />
                                <p>{treat.name}</p>
                            </div>    
                    </div>
                ))}
                <div className="filling-empty-space-childs"></div>
            </div>
            <footer>
                <Link to={"/create/treats"}><button>Build Your Own</button></Link>
            </footer>
        </div>
    )
}

export default TreatsIndex

