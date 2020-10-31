import React from "react";

const Show = (props) => {
  const { item, type } = props;

  console.log(item);

  return (
    <div>
      <div className="show-container">
        <h2>{item.name}</h2>
        <div className="show-flex">
          <div className="show-row">
            <img src={item.img} className="pic"/>
            <div className="show-col">
              <h3>Ingredients</h3>
              <ul>
                {item.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="show-row">
            <div className="show-col">
              <h3>Directions</h3>
              <p className="show-p">{item.directions}</p>
            </div>
          </div>
          <div className="show-row edit-delete-buttons">
            <button className="edit-delete"
              onClick={() => {
                props.selectItem(item, type);
                props.history.push(`/edit/${type}s`);
              }}>Edit
            </button>
            <button className="edit-delete"
              onClick={() => {
                props.deleteItem(item, type);
                props.history.push(`/${type}s`);
              }}>Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
