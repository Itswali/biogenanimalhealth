import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import img from '../../assests/img.png';
import logo from '../../assests/logo.jpg';
import img2 from '../../assests/img2.jpg';
import img3 from '../../assests/img3.jpg';
import img4 from '../../assests/img4.jpg';

const images = [
  img,
  logo,
  img2,
  img3,
  img4,
];

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <header className="header">
      <div
        className="header-background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <div className="header-content">
        <h1 className="header-heading">A Quote to Display above Image</h1>
        <Link to="/product" className="header-button">
          View Products
        </Link>
      </div>
      <div className="header-navigation">
        <button className="header-navigation-button" onClick={goToPrevImage}>
          Previous
        </button>
        <button className="header-navigation-button" onClick={goToNextImage}>
          Next
        </button>
      </div>
    </header>
  );
}
