import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} biogenanimalhealth. All rights reserved.</p>
        <p>Contact: contact@company.com</p>
      </div>
    </div>
  );
}
