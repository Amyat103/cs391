import styled from 'styled-components';
import { Weather } from '@app/interfaces/weather';

const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  padding: 2rem;
  border: 2px solid red;
  margin: 1rem;
  width: 200px;
  border-radius: 10px;
`;

export default function WeatherCard(props: Weather) {
  return (
    <WeatherCardWrapper className='weather-card'>
      <h2>{props.datetime}</h2>
      <p>{props.condition}</p>
      <p>{props.description}</p>
      <p>
        {props.tempmin}°-{props.tempmax}
      </p>
    </WeatherCardWrapper>
  );
}
