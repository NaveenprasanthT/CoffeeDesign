import React from 'react';
import PropTypes from 'prop-types';
import './styles/button.css';

function TouchButton(props) {
  return(
    <button className="btn-wrap" onClick={props?.clickFunction}>
      <p>{props?.label}</p>
      {props?.arrow && <span>{props?.arrow}</span>}
    </button>
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
