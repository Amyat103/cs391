import { styled } from 'styled-components';
import { useState } from 'react';

const CalculatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: rgb(104, 214, 236);
  padding: 5%;
`;

const CalculatorBox = styled.div`
  margin: 5%;
`;

const ButtonStyled = styled.button`
  margin: 5px;
  padding: 10px;
  width: 50px;
  height: 50px;
`;

const InputStyled = styled.input`
  font-size: 1rem;
  padding: 10px;
  margin-bottom: 20px;
`;

export default function Calculator() {
  const [inputOne, setInputOne] = useState<number>(0);
  const [inputTwo, setInputTwo] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const add = () => {
    setResult(inputOne + inputTwo);
  };
  const subtract = () => {
    setResult(inputOne - inputTwo);
  };
  const multiply = () => {
    setResult(inputOne * inputTwo);
  };
  const divide = () => {
    setResult(inputOne / inputTwo);
  };
  const power = () => {
    setResult(Math.pow(inputOne, inputTwo));
  };

  return (
    <CalculatorStyled>
      <CalculatorBox>
        <label>
          {' '}
          <h2>Input 1</h2>
        </label>
        <InputStyled
          type='number'
          value={inputOne}
          onChange={(e) => setInputOne(Number(e.target.value))}
        ></InputStyled>
        <label>
          {' '}
          <h2>Input 2</h2>
        </label>
        <InputStyled
          type='number'
          value={inputTwo}
          onChange={(e) => setInputTwo(Number(e.target.value))}
        ></InputStyled>
        <div>
          <ButtonStyled onClick={add}>+</ButtonStyled>
          <ButtonStyled onClick={subtract}>-</ButtonStyled>
          <ButtonStyled onClick={multiply}>*</ButtonStyled>
          <ButtonStyled onClick={divide}>/</ButtonStyled>
          <ButtonStyled onClick={power}>=</ButtonStyled>
        </div>
        {result && <h2>Result: {result}</h2>}
      </CalculatorBox>
    </CalculatorStyled>
  );
}
