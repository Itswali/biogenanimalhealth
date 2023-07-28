import React from 'react';

export default function Header({ backgroundImageIndex }) {
  const headers = [
    'Dietary Supplements',
    'Veterinary Products', // Add more header texts corresponding to the images
  ];

  return (
    <header className="header">
      <h1>{headers[backgroundImageIndex]}</h1>
    </header>
  );
}
