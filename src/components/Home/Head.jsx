import React, { useState, useEffect } from 'react';
import Header from './Header';
import './_header.scss';
import Nav from '../Nav/Nav';

export default function Head() {
  const [backgroundImage, setBackgroundImage] = useState(0);

  const imageUrls = [
    'https://vetpharma.com/wp-content/uploads/2020/02/veterinary-scaled-e1590136673102.jpg',
    'https://vetpharma.com/wp-content/uploads/2020/05/active-ingredients-scaled-1.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div
      className="slider-home slider-control"
      style={{ backgroundImage: `url(${imageUrls[backgroundImage]})` }}
    >
      <div className="slider-bg">
        <Nav />
        <Header backgroundImageIndex={backgroundImage} />
      </div>
    </div>
  );
}
