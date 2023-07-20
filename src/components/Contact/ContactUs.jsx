import React from 'react';

export default function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Animal Health Livestock Product Line</h2>
      <h3>Contact Us</h3>
      <p>Help line: 0332-1999 682</p>
      <p>Address: 8-Km Chakbeli Road Rawat Rawalpindi Pakistan.</p>
      <p>Website: www.biogenanimalhealth.com</p>
      <div className="social-media">
        {/* Add social media logos with links */}
        <a href="./" target="_blank" rel="noopener noreferrer">
          {/* Add Facebook logo here */}
        </a>
        <a href="./" target="_blank" rel="noopener noreferrer">
          {/* Add Instagram logo here */}
        </a>
        <a href="./" target="_blank" rel="noopener noreferrer">
          {/* Add LinkedIn logo here */}
        </a>
        <a href="./" target="_blank" rel="noopener noreferrer">
          {/* Add Twitter logo here */}
        </a>
      </div>
    </div>
  );
}
