import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // ✅ get current path
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const isHomePage = location.pathname === "/";
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    if (!isHomePage) return; // only apply scroll effect on home page

    const handleScroll = () => {
      if (window.scrollY > 320) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`nav-wrapper ${
        isHomePage ? (isScrolled ? "" : "home-bg") : ""
      }`}
      role="banner"
      aria-label="Primary"
    >
      <div className="nav-inner">
        {/* Left: Logo */}
        <div className="nav-left">
          <img src={logo} alt="Coffee Design logo" className="nav-logo" />
        </div>

        {/* Center: Navigation Links */}
        <nav
          className={`nav-center ${isMobileMenuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {({ isActive }) => (
              <>
                Home
                <div
                  className={`nav-link-border ${
                    isActive ? "border-active" : ""
                  }`}
                ></div>
              </>
            )}
          </NavLink>

          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
             {({ isActive }) => (
              <>
                Works
                <div
                  className={`nav-link-border ${
                    isActive ? "border-active" : ""
                  }`}
                ></div>
              </>
            )}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
              {({ isActive }) => (
              <>
                About
                <div
                  className={`nav-link-border ${
                    isActive ? "border-active" : ""
                  }`}
                ></div>
              </>
            )}
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
              {({ isActive }) => (
              <>
                Service
                <div
                  className={`nav-link-border ${
                    isActive ? "border-active" : ""
                  }`}
                ></div>
              </>
            )}
          </NavLink>
      
          {/* Add CTA inside mobile menu */}
          <NavLink
            to="/contact"
            className="nav-cta mobile-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
            <div
              className={({ isActive }) =>
                isActive ? "nav-link-border border-active" : ""
              }
            >
              {" "}
            </div>{" "}
          </NavLink>
        </nav>

        {/* Right: CTA for desktop */}
        <div className="nav-right">
          <NavLink to="/contact" className="nav-cta desktop-cta">
            Contact
            <div
              className={({ isActive }) =>
                isActive ? "nav-link-border border-active" : ""
              }
            >
              {" "}
            </div>{" "}
          </NavLink>
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
      </div>
    </header>
  );
};

export default Navbar;
