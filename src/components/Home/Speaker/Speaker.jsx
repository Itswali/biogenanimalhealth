import React from "react";

const Speaker = ({ name, position, image, quote }) => (
  <div className="speaker">
    <div className="speaker-box">
      <img src={image} alt={name} className="speaker-image" />
      <div className="speaker-details">
        <h3 className="speaker-quote item">{quote}</h3>
        <h2 className="speaker-name item">{name}</h2>
        <p className="speaker-position item">{position}</p>
      </div>
    </div>
  </div>
);

export default Speaker;
