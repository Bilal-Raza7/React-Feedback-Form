import React from 'react'
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types'

function Button({ children , version, type, isDisable }) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>Send
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
  }
  
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
  } 

export default Button
