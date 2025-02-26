import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../Assets/Logo1.png"; 
import React from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="World University Logo" width="100" className="logo" />
      </Link>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/search" onClick={closeMenu}>Country Search</Link>
        <Link to="/filter" onClick={closeMenu}>Country Filter</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
