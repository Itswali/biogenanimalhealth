import React from "react";

const Speaker = ({ quote, quote2, quote3 }) => (
  <div className="speaker">
    <div className="speaker-box">
      <div className="speaker-details">
        <h3 className="speaker-quote item">{quote}</h3>
        <h3 className="speaker-quote item">{quote2}</h3>
        <h3 className="speaker-quote item">{quote3}</h3>
      </div>
    </div>
  </div>
);

export default Speaker;
