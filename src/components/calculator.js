
import React, { useState } from 'react';
import './cal.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const ButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setOutput(result);
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else if (value === '⌫') { 
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <input type="text" value={output} readOnly />
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => ButtonClick('7')}>7</button>
          <button onClick={() => ButtonClick('8')}>8</button>
          <button onClick={() => ButtonClick('9')}>9</button>
          <button onClick={() => ButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => ButtonClick('4')}>4</button>
          <button onClick={() => ButtonClick('5')}>5</button>
          <button onClick={() => ButtonClick('6')}>6</button>
          <button onClick={() => ButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => ButtonClick('1')}>1</button>
          <button onClick={() => ButtonClick('2')}>2</button>
          <button onClick={() => ButtonClick('3')}>3</button>
          <button onClick={() => ButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => ButtonClick('0')}>0</button>
          <button onClick={() => ButtonClick('.')}>.</button>
          <button onClick={() => ButtonClick('=')}>=</button>
          <button onClick={() => ButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => ButtonClick('C')}>C</button>
          <button onClick={() => ButtonClick('⌫')}>⌫</button> {/* Backspace button */}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
