import React from 'react'
import propTypes from 'prop-types'

const Display = (props) => (
  <div className="output">
    <div className="previous-operand">{props.previous}</div>
    <div className="current-operand">{props.current}</div>
  </div>
)
Display.propTypes = {
  previous: propTypes.string.isRequired,
  current: propTypes.string.isRequired,
}

export default Display
