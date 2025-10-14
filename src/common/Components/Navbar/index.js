import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="nav-wrapper" role="banner" aria-label="Primary">
      <div className="nav-inner">
        {/* Brand */}
        <div className="nav-brand">
          <div className="nav-logo">
            <img src={logo} alt="Coffee Design logo" />
          </div>

        </div>

        {/* Navigation Links */}
        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/works" className="nav-link">Works</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="nav-cta" aria-label="Contact">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
