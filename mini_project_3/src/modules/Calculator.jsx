import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './Calculator.css';

export default function Calculator() {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [result, setResult] = useState(null);

  const add = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne + inputTwo;
      setResult(ans);
      document.getElementById('output').style.color = ans < 0 ? 'red' : 'black';
    } else {
      setResult('Invalid Input');
    }
  };

  const subtract = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne - inputTwo;
      setResult(ans);
      document.getElementById('output').style.color = ans < 0 ? 'red' : 'black';
    } else {
      setResult('Invalid Input');
    }
  };

  const multiply = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne * inputTwo;
      setResult(ans);
      document.getElementById('output').style.color = ans < 0 ? 'red' : 'black';
    } else {
      setResult('Invalid Input');
    }
  };

  const divide = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = inputOne / inputTwo;
      setResult(ans);
      document.getElementById('output').style.color = ans < 0 ? 'red' : 'black';
    } else {
      setResult('Invalid Input');
    }
  };

  const power = () => {
    if (validNumber(inputOne) && validNumber(inputTwo)) {
      const ans = Math.pow(inputOne, inputTwo);
      setResult(ans);
      document.getElementById('output').style.color = ans < 0 ? 'red' : 'black';
    } else {
      setResult('Invalid Input');
    }
  };

  const clearScreen = () => {
    setInputOne(0);
    setInputTwo(0);
    setResult(null);
  };

  const validNumber = (value) => {
    return !isNaN(value) && value !== '';
  };

  return (
    <>
      <Header Title='Calculator' />
      <div className='body-div'>
        <Nav />
        <main>
          <div className='calculator'>
            <label htmlFor='input-one'>Input 1</label>
            <input id='input-one' />
            <label htmlFor='input-two'>Input 2</label>
            <input id='input-two' />
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
          <h3 id='output'>{result}</h3>
          <script src='calculator.js'></script>
        </main>
      </div>
      <Footer />
    </>
  );
}
