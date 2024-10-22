import { styled } from 'styled-components';
import MeImage from '../assets/picture.jpeg';

const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(104, 214, 236);
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 95%;
`;

const ImageStyled = styled.img`
  width: 200px;

  @media (max-width: 750px) {
    width: 100px;
  }
`;

const ParagraphStyled = styled.p`
  font-size: 24px;
  margin: 20px 0;
`;

export default function Home() {
  return (
    <HomeStyled>
      <MainContent>
        <ImageStyled src={MeImage} alt='Profile' />
        <ParagraphStyled>
          My name is Arkar Myat, I'm a junior studying Computer Science at
          Boston University.
          <br />
          <br />
          I'm currently interning at CoSphere and Y Stem and Chess. During my
          free time I learn new tools like libraries and frameworks and use them
          to build projects.
          <br />
          <br />
          My most recent project is called Terrier Schedule, it's a full-stack
          scheduler.
        </ParagraphStyled>
      </MainContent>
    </HomeStyled>
  );
}
