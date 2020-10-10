import React, { useState } from 'react'
import Display from './component/Display'
import Keypad from './component/Keypad'

function App() {
  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('0')
  const [currentValue, setCurrentValue] = useState(0)
  const [previousValue, setPreviousValue] = useState(0)
  const [operation, setOperation] = useState('')
  const [lastKeyStrokeIsEqual, setLastKeyStrokeIsEqual] = useState(false)
  const [lastKeyStrokeIsOperation, setLastkeyStrokeIsOperation] = useState(
    false,
  )
  const [currentDecimalPosition, setCurrentDecimalPosition] = useState(-1)

  const onButtonClick = (action, text) => {
    switch (action) {
      case 'number':
        handleNumberClick(text)
        break
      case 'decimal':
        decimalClicked()
        break
      case 'delete':
        handleDelete()
        break
      case 'operation':
        handleOperationClicked(text)
        break
      case 'clear':
        resetState()
        break
      case 'equal':
        handleEqualClicked()
        break
    }
  }

  const handleNumberClick = (text) => {
    let resetCurrentValue = false
    if (lastKeyStrokeIsOperation) {
      resetCurrentValue = true
      setLastkeyStrokeIsOperation(false)
    } else if (lastKeyStrokeIsEqual) {
      resetCurrentValue = true
      setLastKeyStrokeIsEqual(false)
      resetState()
    }
    console.log(currentValue)
    if (
      (currentValue === 0 && currentDecimalPosition === -1) ||
      resetCurrentValue
    ) {
      updateCurrent(text)
    } else {
      updateCurrent(current + text)
      if (currentDecimalPosition > -1) {
        setCurrentDecimalPosition(currentDecimalPosition + 1)
      }
    }
  }
  const decimalClicked = () => {
    if (currentDecimalPosition === -1) {
      setCurrentDecimalPosition(0)
      updateCurrent(current + '.')
    }
  }

  const handleDelete = () => {
    if (lastKeyStrokeIsOperation || lastKeyStrokeIsEqual) return
    if (current.length === 1) {
      updateCurrent('0')
    }else{
      setCurrent(current.slice(0, -1))
      setCurrentValue(current - 0)
    }
  }

  const handleOperationClicked = (text) => {
    if (operation && !lastKeyStrokeIsOperation && !lastKeyStrokeIsEqual) {
      const calculateResult = calculate()
      setOperation(text)
      setPreviousValue(calculateResult)
      setPrevious(calculateResult + text)
      setLastKeyStrokeIsEqual(false)
      setLastkeyStrokeIsOperation(true)
    }    
    else{
      setOperation(text)
      setPreviousValue(currentValue)
      setPrevious(current + text)
      setLastKeyStrokeIsEqual(false)
      setLastkeyStrokeIsOperation(true)
    }
  }

  const calculate = () => {
    let calculationResult;
    switch (operation) {
      case '+':
        calculationResult = previousValue + currentValue
        break
      case '-':
        calculationResult = previousValue - currentValue
        break
      case '*':
        calculationResult = previousValue * currentValue
        break
      case '÷':
        if (current === 0) {
          let expression = previous + current
          resetState()
          setPrevious(expression)
          setCurrent('BOOM!')
          return null
        } else {
          calculationResult = previousValue / currentValue
          break
        }
        default: break
    }
    updateCurrent(calculationResult + '')
    setPrevious(previous + current)
    setLastkeyStrokeIsOperation(false)
    setLastKeyStrokeIsEqual(true)
    return calculationResult;
  }
  
  const updateCurrent = (value) => {
    setCurrent(value)
    setCurrentValue(value - 0)
  }
  const resetState = function () {
    setPrevious('')
    setPreviousValue(0)
    updateCurrent('0')
    setOperation('')
    setLastKeyStrokeIsEqual(false)
    setLastkeyStrokeIsOperation(false)
    setCurrentDecimalPosition(-1)
  }

  const handleEqualClicked = () => {
    calculate()
  }

  return (
    <div className="calculator-grid">
      <Display previous={previous} current={current} />
      <Keypad onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
