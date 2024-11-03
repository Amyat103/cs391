'use client';

import styled from 'styled-components';

import { useState } from 'react';
import Link from 'next/link';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
`;

const StyledBox = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  margin: 3rem;
  padding: 2rem 1rem;
  gap: 2rem;
  algin-items: center;
  jutify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
`;

export default function Home() {
  const [city, setCity] = useState('');

  return (
    <StyledDiv>
      <h1> Find the Weather in any city!</h1>
      <p>Enter a city name below to get the current weather</p>
      <StyledBox>
        <StyledInput
          type='text'
          value={city}
          placeholder='City name'
          onChange={(e) => setCity(e.target.value)}
        />
        <Link href={`${city}`}>Get Weather</Link>
      </StyledBox>
    </StyledDiv>
  );
}
