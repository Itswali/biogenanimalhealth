import React from 'react';

const Sample = ({ image, name }) => (

  <div className="sample-box">
    <img src={image} alt={name} className="sample-image" />
    <div className="sample-details">
      <h2 className="sample-name">{name}</h2>
    </div>
    <div className="sample-button">
      <button>Read More</button>
    </div>
  </div>

);

export default Sample;
