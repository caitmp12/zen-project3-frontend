import React from "react";

const Steven = () => {
  return (
    <div>
            <h2>Movies</h2>
            {/* search bar */}
            <label htmlFor="search"></label>
            <input type="text"></input>

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
        </div>
  );
};

export default Steven;
