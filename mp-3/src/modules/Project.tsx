import { styled } from 'styled-components';
import calculatorImage from '../assets/calculator.png';
import terrierScheduleImage from '../assets/terrier_schedule.png';
import { Link } from 'react-router-dom';

const ProjectStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: rgb(104, 214, 236);
  padding: 5%;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectItem = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const MainStyled = styled.main`
  flex: 1;
  width: 95%;
  padding: 5%;
  overflow: auto;
`;

const ProjectImage = styled.img`
  width: 350px;
  height: auto;
`;

export default function Project() {
  return (
    <ProjectStyled>
      <MainStyled>
        <ProjectList>
          <ProjectItem>
            <Link to='/calculator'>
              <h2>Calculator</h2>
              <ProjectImage src={calculatorImage} alt='Calculator Project' />
            </Link>
          </ProjectItem>
          <ProjectItem>
            <a href='https://terrier-schedule.dev/' target='_blank'>
              <h2>Terrier Schedule</h2>
              <ProjectImage src={terrierScheduleImage} alt='Terrier Schedule' />
            </a>
          </ProjectItem>
        </ProjectList>
      </MainStyled>
    </ProjectStyled>
  );
}
