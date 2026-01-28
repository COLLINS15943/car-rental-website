import { useState } from "react";
import "../styles/Header.css";
import { NAVIGATION_ITEMS, AUTH_ITEMS, HEADER_TEXT, getAllNavigationItems } from "../constants/navigationData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

        <h1 className="brand" onClick={scrollToTop}>{HEADER_TEXT.brand}</h1>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul className="nav-center"> 
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="nav-right">
            {AUTH_ITEMS.map((item) => (
              <li key={item.id}>
                <a 
                  className={item.className} 
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Slide Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <h2>{HEADER_TEXT.mobileMenuTitle}</h2>
            <button className="close-btn" onClick={closeMenu}>{HEADER_TEXT.closeButton}</button>
          </div>
          <nav className="mobile-nav">
            <ul>
              {getAllNavigationItems().map((item) => (
                <li key={item.id}>
                  <a 
                    className={item.className || ""} 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
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
