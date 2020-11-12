import React from "react"

const Favorites = () => {
    return (
        <div className="favorites">
            <h2>User's List</h2>
            <div className="fav-container">
                <div className="row">
                    <h3>Movies</h3>
                    <div className="col">
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </div>
                <div className="row">
                    <h3>Drinks</h3>
                    <div className="col">
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </div>
                <div className="row">
                    <h3>Treats</h3>
                    <div className="col">
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites