import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './Calculator.css';

export default function Calculator() {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState(null);
  const [resultColor, setResultColor] = useState('black');

  const handleInputOneChange = (e) => {
    setInputOne(Number(e.target.value));
  };

  const handleInputTwoChange = (e) => {
    setInputTwo(Number(e.target.value));
  };

  const add = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne + inputTwo;
      setResult(ans);

      if (ans < 0) {
        setResultColor('red');
      } else {
        setResultColor('black');
      }
    } else {
      setResult('Invalid Input');
    }
  };

  const subtract = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne - inputTwo;
      setResult(ans);

      if (ans < 0) {
        setResultColor('red');
      } else {
        setResultColor('black');
      }
    } else {
      setResult('Invalid Input');
    }
  };

  const multiply = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne * inputTwo;
      setResult(ans);

      if (ans < 0) {
        setResultColor('red');
      } else {
        setResultColor('black');
      }
    } else {
      setResult('Invalid Input');
    }
  };

  const divide = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne / inputTwo;
      setResult(ans);

      if (ans < 0) {
        setResultColor('red');
      } else {
        setResultColor('black');
      }
    } else {
      setResult('Invalid Input');
    }
  };

  const power = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = Math.pow(inputOne, inputTwo);
      setResult(ans);

      if (ans < 0) {
        setResultColor('red');
      } else {
        setResultColor('black');
      }
    } else {
      setResult('Invalid Input');
    }
  };

  const clearScreen = () => {
    setInputOne(0);
    setInputTwo(0);
    setResult(null);
    setResultColor('black');
  };

  const validNumber = (value) => {
    return !isNaN(value);
  };

  return (
    <>
      <Header Title='Calculator' />
      <div className='body-div'>
        <Nav />
        <main>
          <div className='calculator'>
            <label htmlFor='input-one'>Input 1</label>
            <input
              id='input-one'
              type='number'
              value={inputOne}
              onChange={handleInputOneChange}
            />
            <label htmlFor='input-two'>Input 2</label>
            <input
              id='input-two'
              type='number'
              value={inputTwo}
              onChange={handleInputTwoChange}
            />
            <br />
            <button id='add' onClick={add}>
              +
            </button>
            <button id='sub' onClick={subtract}>
              -
            </button>
            <button id='mul' onClick={multiply}>
              *
            </button>
            <button id='dvd' onClick={divide}>
              /
            </button>
            <button id='pow' onClick={power}>
              **
            </button>
            <button id='clear' onClick={clearScreen}>
              Clear
            </button>
          </div>
          <h3 id='output' style={{ color: resultColor }}>
            Result: {result}
          </h3>
        </main>
      </div>
      <Footer />
    </>
  );
}
