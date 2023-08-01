import React from "react";
import product1 from "../../assests/products/Bromacid.png";
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

import product10 from '../../assests/products/Symodex.png'
import btn from "../../assests/arrow.png";
import { useRef } from "react";
import "./P.scss";
import { Link } from "react-router-dom";

const P = () => {
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

  const productContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = productContainerRef.current;
    if (container) {
      const scrollOffset = container.offsetWidth; // Scroll one container width at a time
      if (direction === "left") {
        container.scrollLeft -= scrollOffset;
      } else if (direction === "right") {
        container.scrollLeft += scrollOffset;
      }
    }
  };

  return (
    <section className="product">
      <h1>Products</h1> <hr />
      <button className="pre-btn" onClick={() => handleScroll("left")}>
        <img src={btn} alt="Previous" />
      </button>
      <button className="nxt-btn" onClick={() => handleScroll("right")}>
        <img src={btn} alt="Next" />
      </button>
      <div ref={productContainerRef} className="product-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              <img src={product.image} className="product-thumb" alt="" />
              {/* <button className="card-btn">See More</button> */}
              <Link className="card-btn" to={`/product/${product.name}`}>Read More</Link>
            </div>
            <div className="product-info">
              <h2 className="product-brand">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default P;

