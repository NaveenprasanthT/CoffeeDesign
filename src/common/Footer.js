import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import frame from '../assets/image/frame.png';
import './styles/footer.css';
import { FacebookIcon, InstagramIcon, LinkedInIcon, RoundArrow, YoutubeIcon } from './svgIcon';
import TouchButton from './Components/Button';

function Footer() {

  const handleClick = () => {
    console.log("Get in touch");
  };

  return (
    <div className=".sectionWrap">
      <div className="imgContent">
        <img src={frame} alt='frame' className="contentImage" />
        <div className="contentContainer">
          {/* <img src='/assets/footer/vector.png' width={1000} height={1000} className="vectorImage" /> */}
          <h1>More Than a Job, It's a  Career Path.</h1>
        </div>
      </div>
      <div className="mainFooter">
        <h5>Discovering the new narratives</h5>
        <h1>Request More Information</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Egestas dictum vitae nisi praesent enim.</p>
        <TouchButton
          label="Get In Touch"
          clickFunction={handleClick}
          arrow={<RoundArrow />}
        />
        <div className="rights">© 2023 Coffee Design Studio</div>
        <div className="onlyBorder"></div>
        <div className="linksWrap">
          <div className="logoContainer">
            <img src={logo} alt='logo' className="footerLogo" />
          </div>
          <div className="pageLinks">
            <Link href='/'>Home</Link>
            <Link href='/'>About us</Link>
            <Link href='/'>Terms and Conditions</Link>
            <Link href='/'>Privacy Policy</Link>
          </div>
          <div className="socialMedia">
            <span><LinkedInIcon color="#FFFFFF" /></span>
            <span><FacebookIcon color="#FFFFFF" /></span>
            <span><InstagramIcon color="#FFFFFF" /></span>
            <span><YoutubeIcon color="#FFFFFF" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
