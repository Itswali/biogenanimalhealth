import React from "react";
import { Link } from "react-router-dom";

const Product = ({ image, name }) => (
  <div className="product-box">
    <img src={image} alt={name} className="product-image" />
    <div className="product-details">
      <h2 className="product-name">{name}</h2>
    </div>
    <div className="product-button">
    <Link to={`/product/${name}`}>Read More</Link>
    </div>
  </div>
);

export default Product;
