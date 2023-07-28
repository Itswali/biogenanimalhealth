import React from "react";

const Sample = ({ image, name }) => (
  <div className="product-box">
    <div className="image-container">
    <img src={image} alt={name} className="product-image" />
    </div>
    <div className="product-details">
      <h2 className="product-name">{name}</h2>
    </div>
  </div>
);

export default Sample;
