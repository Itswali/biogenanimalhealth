import React from "react";

const Pp = ({ image, name }) => (
  <div className="products-box">
    <div className="image-container">
      <img src={image} alt={name} className="product-image" />
    </div>
    <div className="detail-container">
      <h2 className="product-name">{name}</h2>
    </div>
  </div>
);

export default Pp;
