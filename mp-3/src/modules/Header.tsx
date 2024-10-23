import { styled } from 'styled-components';

const HeaderStyled = styled.h1`
  background-color: brown;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  height: 15vh;
`;

export default function Header({ Title }: { Title: string }) {
  return <HeaderStyled>{Title}</HeaderStyled>;
}
