import React from "react";
import Product from "./Product";
import sample1 from '../../assests/products/bromacid.jpeg'
import sample2 from '../../assests/products/tribiotic.jpeg'
import sample3 from '../../assests/products/lions moxin-c.jpeg'

import sample4 from '../../assests/products/colistin.jpeg'
import sample5 from '../../assests/products/b-g aspro-c.jpeg'
import sample6 from '../../assests/products/bronco.jpeg'
import sample7 from '../../assests/products/floxicol.jpeg'
import sample8 from '../../assests/products/eco-man.jpeg'
import sample9 from '../../assests/products/ensol-ag.jpeg'
import sample12 from '../../assests/products/trisol.jpeg'
import sample13 from '../../assests/products/trisul.jpeg'

import sample14 from '../../assests/products/tylo.jpeg'
import sample10 from '../../assests/products/Biotak.jpeg'

import sample11 from '../../assests/products/symodef.jpeg'
// import sample10 from '../../assests/products/floxicol.jpeg'




const ProductContainer = () => {
  const samples = [
    {
      image: sample1,
      name: "Bromacid",
    },
    {
      image: sample2,
      name: "Tribiotic",
    },
    {
      image: sample3,
      name: "Lions Moxin-C",
    },
    {
      image: sample4,
      name: "Colistin",
    },
    {
      image: sample5,
      name: "B G Aspro-C",
    },
    {
      image: sample6,
      name: "Bronco",
    },
    {
      image: sample7,
      name: "Floxicol",
    },
    {
      image: sample8,
      name: "Eco-Main",
    },
    {
      image: sample9,
      name: "Ensol-AG",
    },
    {
      image: sample12,
      name: "Trisol",
    },
    {
      image: sample13,
      name: "Trisul-T",
    },
    {
      image: sample14,
      name: "Tylo",
    },
    {
      image: sample10,
      name: "Biotak",
    },
    {
      image: sample11,
      name: "Symodef",
    },
  ];

  return (
    <>
      <div className="product-container">
        {samples.map((sample, index) => (
          <Product key={index} image={sample.image} name={sample.name} />
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
