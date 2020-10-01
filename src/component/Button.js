import React from 'react';
import propTypes from 'prop-types';

const Button = props => (
  <button
    className={props.className ? props.className : ""}
    onClick={() => props.onClick(props.action, props.text)}
  >
    {props.text}
  </button>
);
Button.propTypes = {
  className: propTypes.string,
  text: propTypes.string.isRequired,
  action: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};
export default Button;