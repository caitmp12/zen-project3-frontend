import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.item);
  const { type } = props;
  console.log(type);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData, type);
    props.history.push(`/${type}s`);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <h2>Create Your New {`${type}`}</h2>
      <form onSubmit={handleSubmit}>
        <div className="field-wrap">
          <label>Name:</label><input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="field-wrap">
          <label>Picture:</label><input
            type="text"
            name="img"
            value={formData.img}
            placeholder="Image URL"
            onChange={handleChange}
          />
        </div>
        <div className="field-wrap">
          <label>Ingredients:</label><input
            className="textarea-medium"
            type="textarea"
            name="ingredients"
            value={formData.ingredients}
            placeholder="Ingredients"
            onChange={handleChange}
          />
        </div>
        <div className="field-wrap">
          <label>Directions:</label><input
            className="textarea-large"
            type="textarea"
            name="directions"
            value={formData.directions}
            placeholder="Directions"
            onChange={handleChange}
          />
        </div>
        <input className="submit-button" type="submit" value={props.label.toUpperCase()} />
      </form>
    </div>
  );
};

export default Form;
