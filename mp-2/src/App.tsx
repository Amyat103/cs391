import Dogs from './components/Dogs';
import { useEffect, useState } from 'react';
import { Characters } from './interface/Characters';
import styled from 'styled-components';

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
`;

function App() {
  const [data, setData] = useState<Characters[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        'https://dog.ceo/api/breed/frise/images/random/10'
      );
      const { message }: { message: string[] } = await res.json();
      const results: Characters[] = [];

      for (let i = 0; i < message.length; i++) {
        const url = message[i];
        const breed = url.split('/')[url.split('/').length - 2];

        results.push({
          id: i + 1,
          image: url,
          breed: breed,
        });
      }

      setData(results);
    }

    fetchData()
      .then(() => console.log('Data fetched'))
      .catch((e: Error) => console.error('There was the error: ' + e));
  }, []);

  return (
    <ParentDiv>
      <Dogs data={data} />
    </ParentDiv>
  );
}

export default App;
