import React from 'react';
import { Link } from 'react-router-dom';
import './_header.scss';
// import img2 from '../../assests/img.png';

const backgroundImage = 'http://absvet.org/images/main-slider/slider-3.jpg';

export default function Header() {
  return (
    <header className="header">
      <div
        className="header-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="header-content">
        <div className="header-text-container">
          <h1 className="header-heading">A Quote to Display above Image</h1>
        </div>
        <div className="header-button-container">
          <Link to="/product" className="header-button">
            View Products
          </Link>
        </div>
      </div>
    </header>
  );
}
