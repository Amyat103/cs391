import { Characters } from '../interface/Characters';
import styled from 'styled-components';

const AllDogsDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: bisque;
`;

const DogDiv = styled.div<{ status: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 30%;
  padding: 2%;
  margin: 1%;
  background-color: ${(props) =>
    props.status === 'Alive' ? 'darkorange' : 'black'};
  color: ${(props) => (props.status !== 'Alive' ? 'white' : 'black')};
  border: 3px darkred solid;
  font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
  text-align: center;
`;

const DogImage = styled.img`
  max-height: 200px;
`;

function Dogs(props: { data: Characters[] }) {
  return (
    <AllDogsDiv>
      {props.data.map((dog) => (
        <DogDiv key={dog.id}>
          <h4>{dog.id}</h4>
          <h2>{dog.breed}</h2>
          <DogImage src={dog.image} alt={dog.breed} className='dog-image' />
        </DogDiv>
      ))}
    </AllDogsDiv>
  );
}

export default Dogs;
