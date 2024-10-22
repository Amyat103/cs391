import { styled } from 'styled-components';

const HeaderStyled = styled.header`
  background-color: brown;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h1>Arkar Myat Resume</h1>
    </HeaderStyled>
  );
}
