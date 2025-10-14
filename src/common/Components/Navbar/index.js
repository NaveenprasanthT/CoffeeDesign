import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-wrapper" role="banner" aria-label="Primary">
      <div className="nav-inner">
        {/* Brand */}
        <div className="nav-brand">
          <img src={logo} alt="Coffee Design logo" className="nav-logo" />
        </div>

        {/* Hamburger for mobile */}
        <button
          className="nav-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Works
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
