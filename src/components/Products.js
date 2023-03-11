import React from "react";
import "./Products.css";

const products = ({ meals }) => {
  return (
    <div className="products">
      <h3>{meals.name}</h3>
      <img src={meals.image} alt="" />
      <p>{meals.description}</p>
      <h4>{meals.price}</h4>
    </div>
  );
};

export default products;
