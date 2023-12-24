import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.css';
import vector from '../../assets/image/Vector.png';

function Header(props) {
  return (
    <div className="header-wrap">
      <h1>{props?.heading}</h1>
      <div className="header-container">
        <div className="title-container">
          <h2>{props?.title}</h2>
          {props?.underline && <img src={vector} alt="vector" className="underline" />}
        </div>
        <p>{props?.desc}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.node,
  desc: PropTypes.string,
  underline: PropTypes.bool,
}

Header.defaultProps = {
  title: undefined,
  desc: undefined,
  underline: false,
}

export default Header;
