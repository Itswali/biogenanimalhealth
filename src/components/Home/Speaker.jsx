import React from "react";

const Speaker = ({ name, position, image, quote }) => (
  <div className="speaker">
    <img src={image} alt={name} className="speaker-image" />
    <div className="speaker-details">
      <h3 className="speaker-quote">{quote}</h3>
      <h2 className="speaker-name">{name}</h2>
      <p className="speaker-position">{position}</p>
    </div>
  </div>
);

export default Speaker;
