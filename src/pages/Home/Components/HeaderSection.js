import React from 'react';
import {RoundArrow} from '../../../common/svgIcon';
import headerImg from '../../../assets/image/headerImg.png';
import TouchButton from '../../../common/Components/Button';
import './styles/HeaderSection.css';

function HeaderSection() {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div className="section-wrap">
      <div className="content">
        <h1>Welcome to <span>Coffee</span> design studio, Where Creativity Takes Flight</h1>
        <p>Crafting iconic brands with visionary design and cutting-edge development—your journey to success starts with us. Elevate your brand experience today.</p>
        <TouchButton
          label="Get In Touch"
          clickFunction={handleClick}
          arrow={<RoundArrow />}
        />
      </div>
      <img src={headerImg} alt="header" className="section-image" />
    </div>
  );
}

export default HeaderSection;
