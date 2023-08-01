import React from "react";
import Product from "./Product";
import product1 from '../../assests/products/Bromacid.png'
import product2 from '../../assests/products/Tribiotic.png'
import product3 from '../../assests/products/LIONS MOXIN-C.png'

import product4 from '../../assests/products/COLISTIN.png'
import product5 from '../../assests/products/B-G Aspro-C.png'
import product6 from '../../assests/products/BRONCO-CTC.png'
import product7 from '../../assests/products/FLOXICOL.png'
import product8 from '../../assests/products/ECO-MAN.png'
import product9 from '../../assests/products/ENSOL-AG.png'
import product13 from '../../assests/products/TRISUL-T.png'

import product14 from '../../assests/products/Tylo-200.png'

import product10 from '../../assests/products//Symodex.png'
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";




const ProductContainer = () => {
  const products = [
    {
      image: product1,
      name: "Bromacid",
    },
    {
      image: product2,
      name: "Tribiotic",
    },
    {
      image: product3,
      name: "Lions Moxin-C",
    },
    {
      image: product4,
      name: "Colistin",
    },
    {
      image: product5,
      name: "B G Aspro-C",
    },
    {
      image: product6,
      name: "Bronco",
    },
    {
      image: product7,
      name: "Floxicol",
    },
    {
      image: product8,
      name: "Eco-Main",
    },
    {
      image: product9,
      name: "Ensol-AG",
    },
    {
      image: product13,
      name: "Trisul-T",
    },
    {
      image: product14,
      name: "Tylo",
    },
    {
      image: product10,
      name: "Symodef",
    },
  ];

  return (
    <>
    <Nav />
      <div className="product-wrapper">
        {products.map((product, index) => (
          <div key={index} className="product-containr">
            <Product image={product.image} name={product.name} />
            <div className="product-button">
            <Link to={`/product/${product.name}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <footer />
    </>
  );
};

export default ProductContainer;

