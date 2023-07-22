import React from 'react';
import { Link } from 'react-router-dom';

const Sample = ({ image, name }) => (

  <div className="sample-box">
    <img src={image} alt={name} className="sample-image" />
    <div className="sample-details">
      <h2 className="sample-name">{name}</h2>
    </div>
    <div className="sample-button">
    <Link to={`/product/${name}`}>Read More</Link>
    </div>
  </div>

);

export default Sample;
