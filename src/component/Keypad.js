import React from 'react'
import Button from './Button'
import propTypes from 'prop-types'

const Keypad = (props) => (
  <>
    <Button
      onClick={props.onButtonClick}
      className="span-two"
      action="clear"
      text="AC"
    ></Button>
    <Button onClick={props.onButtonClick} action="delete" text="DEL"></Button>
    <Button onClick={props.onButtonClick} action="operation" text="÷"></Button>
    <Button onClick={props.onButtonClick} action="number" text="1"></Button>
    <Button onClick={props.onButtonClick} action="number" text="2"></Button>
    <Button onClick={props.onButtonClick} action="number" text="3"></Button>
    <Button onClick={props.onButtonClick} action="operation" text="*"></Button>
    <Button onClick={props.onButtonClick} action="number" text="4"></Button>
    <Button onClick={props.onButtonClick} action="number" text="5"></Button>
    <Button onClick={props.onButtonClick} action="number" text="6"></Button>
    <Button onClick={props.onButtonClick} action="operation" text="+"></Button>
    <Button onClick={props.onButtonClick} action="number" text="7"></Button>
    <Button onClick={props.onButtonClick} action="number" text="8"></Button>
    <Button onClick={props.onButtonClick} action="number" text="9"></Button>
    <Button onClick={props.onButtonClick} action="operation" text="-"></Button>
    <Button onClick={props.onButtonClick} action="decimal" text="."></Button>
    <Button onClick={props.onButtonClick} action="number" text="0"></Button>
    <Button
      onClick={props.onButtonClick}
      action="equal"
      className="span-two"
      text="="
    ></Button>
  </>
)
Keypad.propTypes = {
  onButtonClick: propTypes.func.isRequired,
}

export default Keypad
