import React, { useState } from "react";

export default function Show({
  match: {
    params: { id },
  },
  cheese,
  updateCheese,
  deleteCheese,
  history,
}) {
  const showCheese = cheese.find((c) => c._id === id);
  const [formData, setFormData] = useState(showCheese);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCheese(formData, id);
    history.push("/");
  };

  const removeCheese = () => {
    deleteCheese(showCheese._id);
    history.push("/");
  };
  return (
    <div className="cheese">
      <h1>{showCheese.name}</h1>
      <h2>{showCheese.countryOfOrigin}</h2>
      <img src={showCheese.image} alt={showCheese.name} />
      <button id="delete" onClick={removeCheese}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={formData.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  );
}
