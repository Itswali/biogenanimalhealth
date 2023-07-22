import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-details">
        <h2 className="product-detail-name">{product.name}</h2>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
        {/* Add more details about the product here */}
      </div>
    </div>
  );
};

export default ProductDetail;
