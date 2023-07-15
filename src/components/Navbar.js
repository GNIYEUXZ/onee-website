import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import navToggler from "../assets/img/nav-toggler.svg";
import shape1 from "../assets/img/shape1.svg";
import shape2 from "../assets/img/shape2.svg";
import shape3 from "../assets/img/shape3.svg";
import shape4 from "../assets/img/shape4.svg";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="mobile-navbar">
      <button className="mobile-navbar-toggler" onClick={toggleNavbar}>
        <img src={navToggler} alt='nav-toggler' />
      </button>
      <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
        <div className="mobile-navbar-links">
          <Link to="/" className="mobile-navbar-link" onClick={handleLinkClick}>  <img src={shape1} alt="home icon"/> Home</Link>
          <Link to="/projects" className="mobile-navbar-link" onClick={handleLinkClick}> <img src={shape2} alt="projects icon"/>Projects</Link>
          <Link to="/about" className="mobile-navbar-link" onClick={handleLinkClick}> <img src={shape3} alt="about icon"/> About</Link>
          <Link to="/contact" className="mobile-navbar-link" onClick={handleLinkClick}> <img src={shape4} alt="contact icon"/> Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
