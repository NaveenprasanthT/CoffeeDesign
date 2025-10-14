import React from "react";
import "./styles/footer.css";
import {
  FacebookIcon,
  BehanceIcon,
  DribbbleIcon,
  TwitterIcon,
} from "./svgIcon";
import QuestionsCard from "./QuestionsCard";
import logoImages from "../assets/image/logo.png";
function Footer() {
  return (
    <div className=".sectionWrap">
      <QuestionsCard />
      <div className="contact-wrap">
        {/* Header */}
        <header className="contact-header">
          <div className="contact-brand">
            <img src={logoImages} width={361} alt="logoImages" />
          </div>

          <nav className="social" aria-label="Social links">
            <div>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <FacebookIcon color="#D4002A" />
                <span>Facebook</span>
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-link"
              >
                <TwitterIcon color="#D4002A" />
                <span>Twitter</span>
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                className="social-link"
              >
                <DribbbleIcon color="#D4002A" />
                <span>Dribbble</span>
              </a>
            </div>

            <div>
              {" "}
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="social-link"
              >
                <BehanceIcon color="#D4002A" />
                <span>Behance</span>
              </a>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="contact-main">
          <section className="left">
            <h1 id="contactTitle" className="contact-title">
              Let's Work <br />
              Together
            </h1>

            <ul className="contacts" aria-label="Contact details">
              <li>
                <a href="mailto:Contact@Coffeedesign.In">
                  Contact@Coffeedesign.In
                </a>
              </li>
              <li>
                <a href="tel:+917386091360">+91 7386091360</a>
              </li>
            </ul>
          </section>

          <aside className="right" aria-labelledby="quickLinksTitle">
            <h2 id="quickLinksTitle" className="right-title">
              Quick Links
            </h2>
            <ul className="links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </aside>
        </main>

        {/* Footer */}
        <footer className="contact-footer">
          <small>© 2023 CoffeedesignGroup</small>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
