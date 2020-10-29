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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        value={formData.img}
        placeholder="Image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        name="ingredients"
        value={formData.ingredients}
        placeholder="Ingredients"
        onChange={handleChange}
      />
      <input
        type="text"
        name="directions"
        value={formData.directions}
        placeholder="Directions"
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;
