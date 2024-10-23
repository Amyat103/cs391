import calculatorImage from '../assets/calculator.png';
import terrierScheduleImage from '../assets/terrier_schedule.png';
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <main>
      <div className='project-list'>
        <div className='project-item'>
          <h3>
            <Link to='/calculator'>Calculator jsx</Link>
          </h3>
          <img src={calculatorImage} alt='Calculator Project' />
        </div>
      </div>
      <div className='project-item'>
        <h3>
          <a href='https://terrier-schedule.dev/' target='_blank'>
            Terrier Schedule
          </a>
        </h3>
        <img src={calculatorImage} alt='Calculator Project' />
      </div>
    </main>
    // <ProjectStyled>
    //   <MainStyled>
    //     <ProjectList>
    //       <ProjectItem>
    //         <Link to='/calculator'>
    //           <h2>Calculator</h2>
    //           <ProjectImage src={calculatorImage} alt='Calculator Project' />
    //         </Link>
    //       </ProjectItem>
    //       <ProjectItem>
    //         <a href='https://terrier-schedule.dev/' target='_blank'>
    //           <h2>Terrier Schedule</h2>
    //           <ProjectImage src={terrierScheduleImage} alt='Terrier Schedule' />
    //         </a>
    //       </ProjectItem>
    //     </ProjectList>
    //   </MainStyled>
    // </ProjectStyled>
  );
}
