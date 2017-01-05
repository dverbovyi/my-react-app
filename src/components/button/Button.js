import React, { PropTypes } from 'react'
import './Button.css';

export const Button = ({text, onClick}) => (
  <div className="button">
      <button onClick={onClick}>{text}</button>
  </div>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
