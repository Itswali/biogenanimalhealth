import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assests/logo.png';
import './_nav.scss';
import { Link } from 'react-router-dom';

const Menu = () => (
  <ul className="navigation">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/product">Product</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/#contact">Contact</Link>
    </li>
  </ul>
);

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav menu">
      <div className="nav-links">
        <div className="nav-links-logo">
          <img src={logo} alt="logo" className="logo-nav" />
        </div>
        <div className="nav-links-container">
          <Menu />
        </div>
      </div>
      <div className="nav-menu">
        {/* Show the open button only if the mobile menu is closed */}
        {!toggleMenu && (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav-menu-container scale-up-center">
            {/* Close button inside the .nav-menu-container */}
            <div
              className="nav-menu-close-button"
              onClick={() => setToggleMenu(false)}
            >
              <RiCloseLine color="#000" size={28} />
            </div>
            <div className="nav-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


