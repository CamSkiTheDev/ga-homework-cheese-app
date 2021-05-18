import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Index({ cheese, createCheese }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    countryOfOrigin: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCheese(formData);
    setFormData({
      name: "",
      image: "",
      countryOfOrigin: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          onChange={handleChange}
          value={formData.image}
        />
        <input
          type="text"
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
          value={formData.countryOfOrigin}
        />
        <input type="submit" value="Add Cheese" />
      </form>
      {cheese ? (
        cheese.map((cheese) => (
          <div key={cheese._id}>
            <Link to={`/cheese/${cheese._id}`}>
              <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.countryOfOrigin}</h3>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
