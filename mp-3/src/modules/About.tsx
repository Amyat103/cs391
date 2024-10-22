import { styled } from 'styled-components';
import BUImage from '../assets/bu.webp';
import TennisImage from '../assets/tennis.jpg';
import BoardGameImage from '../assets/board_games.webp';

const AboutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  font-size: 20px;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;

  @media (max-width: 750px) {
    img {
      width: 100px;
    }
  }
`;

const StyledP = styled.p`
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
`;

export default function About() {
  return (
    <AboutStyled>
      <StyledP>
        <strong>About Me</strong> <br />
        My name is Arkar Myat, I'm a junior studying Computer Science at Boston
        University.
        <br />
        <br />
        <strong>Courses</strong> <br />
        Some courses I've taken are Data Structures, Algorithms, Web
        Development, and more.
        <br />
        <br />
        <strong>Hobbies</strong> <br />
        Outside of school, I enjoy playing tennis and board games.
        <br />
        <br />
        <strong>Learn about me here:</strong> <br />
        <a
          href='https://github.com/Amyat103'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        <br />
        <br />
        <a
          href='https://www.linkedin.com/in/davidmyat/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </StyledP>
      <ImageDiv>
        <StyledImg src={BUImage} alt='Boston University' />
        <StyledImg src={BoardGameImage} alt='Board Games' />
        <StyledImg src={TennisImage} alt='Tennis' />
      </ImageDiv>
    </AboutStyled>
  );
}
