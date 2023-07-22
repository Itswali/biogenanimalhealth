import React from 'react';
import fb from '../../../assests/fb.svg';
import instagram from '../../../assests/insta.svg';
import linkedin from '../../../assests/linkedin.svg';
import twitter from '../../../assests/twitter.svg';

export default function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Animal Health Livestock Product Line</h2>
      <h3>Contact Us</h3>
      <p>Help line: 0332-1999 682</p>
      <p>Address: 8-Km Chakbeli Road Rawat Rawalpindi Pakistan.</p>
      <p>Website: www.biogenanimalhealth.com</p>
      <div className="social-media">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  );
}
