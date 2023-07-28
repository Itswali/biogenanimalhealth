import React from "react";
import Product from "./Product";
import product1 from '../../assests/products/bromacid.jpeg'
import product2 from '../../assests/products/tribiotic.jpeg'
import product3 from '../../assests/products/lions moxin-c.jpeg'

import product4 from '../../assests/products/colistin.jpeg'
import product5 from '../../assests/products/b-g aspro-c.jpeg'
import product6 from '../../assests/products/bronco.jpeg'
import product7 from '../../assests/products/floxicol.jpeg'
import product8 from '../../assests/products/eco-man.jpeg'
import product9 from '../../assests/products/ensol-ag.jpeg'
import product13 from '../../assests/products/trisul.jpeg'

import product14 from '../../assests/products/tylo.jpeg'

import product10 from '../../assests/products/symodef.jpeg'
import product11 from '../../assests/products/Biotak.jpeg'
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";




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
    {
      image: product11,
      name: "Biotak",
    },
  ];

  return (
    <>
    <Navbar />
      <div className="product-wrapper">
        {products.map((product, index) => (
          <div key={index} className="product-container">
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

