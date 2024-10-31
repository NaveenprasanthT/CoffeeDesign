import React, { useRef, useState } from 'react';
import { RoundArrow } from '../../../common/svgIcon';
import headerImg from '../../../assets/image/headerImg.png';
import TouchButton from '../../../common/Components/Button';
import './styles/HeaderSection.css';
import ReactPlayer from 'react-player';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

function HeaderSection() {
  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  const videoRef = useRef();
  const [duration, setDuration] = useState(0);

  const handleChange = (e, newValue) => {
    setDuration(newValue);
    // if (videoRef.current) {
    //   videoRef.current.seekTo(newValue / 100);
    // }
  };

  const handleClick = () => {
    console.log("Click");
  };

  return (
    <>
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
      <ReactPlayer
        height='500px'
        width='500px'
        url='https://signage-cms-dev.s3.ap-south-1.amazonaws.com/user-content/1729620251156.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4OW5LNEKECZFZPXM%2F20241031%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20241031T065930Z&X-Amz-Expires=86400&X-Amz-Signature=628112dd2410f98fbdb65679408e5f0b702b9d1696bb262cbdcb39077b4bc598&X-Amz-SignedHeaders=host'
        ref={videoRef}
        controls={true}
      />
      <br />
      <PrettoSlider
        value={duration}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        onChange={handleChange}
        defaultValue={0}
      />
    </>
  );
}

export default HeaderSection;
