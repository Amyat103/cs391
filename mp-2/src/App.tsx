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
      const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
      const { results }: { results: Characters[] } = await res.json();
      setData(results);
      console.log(data);
      console.log(res);
      console.log(results);
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
