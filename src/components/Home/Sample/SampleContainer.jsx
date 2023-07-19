import React from "react";
import { Link } from "react-router-dom";
import Sample from "./Sample";

const SampleContainer = () => {
  const samples = [
    {
      image: "http://absvet.org/images/thumbnails/EC%20Immune.png",
      name: "Ec Immune",
    },
    {
      image: "http://absvet.org/images/thumbnails/Phyto-Sal.png",
      name: "Phyto Sal",
    },
    {
      image: "http://absvet.org/images/thumbnails/Apsure%20.png",
      name: "Apsure",
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
