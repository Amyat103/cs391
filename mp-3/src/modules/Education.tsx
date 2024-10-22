import styled from 'styled-components';
import BUImage from '../assets/bu.webp';

const EducationStyled = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 100vh;
`;

const ImageStyled = styled.img`
  width: 300px;

  @media (max-width: 750px) {
    width: 150px;
  }
`;
const Content = styled.p`
  text-align: center;
  fontsize: 18px;
`;

export default function Education() {
  return (
    <EducationStyled>
      <Content>
        I studied my K-12 at Yangon International School, a school located in
        Yangon, Myanmar
        <br />
        <br />
        After that I decided that I want to study in the US, so I applied to
        University of La Verne as a Business Administration Major
        <br />
        <br />
        After 3 years, I decided that I want to change school, so I changed my
        major as well to Computer Science and I transferred into BU and switch
        my major to cs at the fall of 2023.
        <br />
        <br />
      </Content>
      <ImageStyled src={BUImage} alt='Boston University' />
    </EducationStyled>
  );
}
