import React from 'react';
import PropTypes from 'prop-types';
import { RoundArrow } from '../svgIcon';
import './styles/button.css';

function TouchButton(props) {
  return(
    <div className="btn-wrap" onClick={props?.clickFunction}>
      <p>Get In Touch</p>
      {props?.arrow && <span><RoundArrow /></span>}
    </div>
  );
}

TouchButton.propTypes = {
  clickFunction: PropTypes.func.isRequired,
  arrow: PropTypes.bool,
};

TouchButton.defaultProps = {
  arrow: false,
};

export default TouchButton;
