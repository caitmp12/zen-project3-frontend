import React from "react";

const Show = (props) => {
  const { item, type } = props;

  console.log(item);

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

          <button
            onClick={() => {
              props.selectItem(item, type);
              props.history.push(`/edit/${type}s`);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.deleteItem(item, type);
              props.history.push(`/${type}s`);
            }}
          >
            Delete
          </button>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Show;
