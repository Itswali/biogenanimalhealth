import React from "react";
import { Link } from "react-router-dom";
import Sample from "./Sample";
import sample1 from '../../../assests/products/bromacid.jpeg'
import sample2 from '../../../assests/products/symodef.jpeg'
import sample3 from '../../../assests/products/lions moxin-c.jpeg'

const SampleContainer = () => {
  const samples = [
    {
      image: sample1,
      name: "Bromacid",
    },
    {
      image: sample2,
      name: "Symodef",
    },
    {
      image: sample3,
      name: "Lions Moxin-C",
    },
  ];

  return (
    <>
      <div className="sample-container">
        {samples.map((sample, index) => (
          <Sample key={index} image={sample.image} name={sample.name} />
        ))}
      </div>
      <div className="button-box">
        <Link to="/product" className="button-self">
          VIEW ALL PRODUCTS
        </Link>
      </div>
    </>
  );
};

export default SampleContainer;
