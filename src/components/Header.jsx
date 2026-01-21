import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="headcont">
        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <h1 className="brand">Car Rental</h1>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul className="nav-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Vehicle Models</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/our-team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className="nav-right">
            <li>
              <a href="/sign-in">Sign in</a>
            </li>
            <li>
              <a className="register-button" href="/register">
                Register
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Slide Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h2>Menu</h2>
            <button className="close-btn" onClick={closeMenu}>×</button>
          </div>
          <nav className="mobile-nav">
            <ul>
              <li><a href="/" onClick={closeMenu}>Home</a></li>
              <li><a href="/about" onClick={closeMenu}>About</a></li>
              <li><a href="/contact" onClick={closeMenu}>Vehicle Models</a></li>
              <li><a href="/testimonials" onClick={closeMenu}>Testimonials</a></li>
              <li><a href="/our-team" onClick={closeMenu}>Our Team</a></li>
              <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
              <li><a href="/sign-in" onClick={closeMenu}>Sign in</a></li>
              <li><a className="register-button" href="/register" onClick={closeMenu}>Register</a></li>
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;
