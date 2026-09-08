import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { NAVIGATION_ITEMS, AUTH_ITEMS, HEADER_TEXT } from "../constants/navigationData";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effect for dynamic navbar styling & scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active indicator
      const sections = NAVIGATION_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  };

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    if (id) setActiveSection(id);
    scrollToSection(href);
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setActiveSection("home");
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="headcont">
        {/* Brand / Logo */}
        <div className="brand-wrapper" onClick={scrollToTop} role="button" tabIndex={0}>
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zM7.5 15c.83 0 1.5-.67 1.5-1.5S8.33 12 7.5 12 6 12.67 6 13.5 6.67 15 7.5 15zm9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
            </svg>
          </div>
          <span className="brand-text">
            Car<span className="brand-accent">Rental</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul className="nav-center">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                >
                  {item.label}
                  {activeSection === item.id && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            {AUTH_ITEMS.map((item) => (
              <button
                key={item.id}
                className="auth-btn"
                onClick={() => { navigate("/signin"); closeMenu(); }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Slide Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-header">
            <div className="brand-wrapper mobile-brand">
              <span className="brand-text">
                Car<span className="brand-accent">Rental</span>
              </span>
            </div>
            <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
              {HEADER_TEXT.closeButton}
            </button>
          </div>
          <nav className="mobile-nav">
            <ul>
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mobile-auth-wrapper">
                {AUTH_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    className="mobile-auth-btn"
                    onClick={() => { navigate("/signin"); closeMenu(); }}
                  >
                    {item.label}
                  </button>
                ))}
              </li>
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

