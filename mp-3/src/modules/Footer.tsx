import { styled } from 'styled-components';

const FooterStyled = styled.footer`
  background-color: brown;
  text-align: center;
  padding: 5px;
  color: white;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <h1>All Rights Reserved by Arkar Myat</h1>
    </FooterStyled>
  );
}
