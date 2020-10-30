import React from "react"
import { Route, Link, Switch } from "react-router-dom"

const Nav = () => {

    return (
        <div className="nav">
            <Link to={"/"}><ion-icon name="home-outline"></ion-icon></Link>
            <Link to ={"/movies"}><ion-icon name="videocam-outline"></ion-icon></Link>
            <Link to={"/drinks"}><ion-icon name="wine-outline"></ion-icon></Link>
            <Link to={"/treats"}><ion-icon name="pizza-outline"></ion-icon></Link>
            <Link to={"/"}><ion-icon name="star-outline"></ion-icon></Link>
            <Link to={"/"}><ion-icon name="people-outline"></ion-icon></Link>
        </div>
    )
}

export default Nav