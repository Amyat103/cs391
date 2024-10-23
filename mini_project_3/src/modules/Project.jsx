import calculatorImage from '../assets/calculator.png';
import terrierScheduleImage from '../assets/terrier_schedule.png';
import { Link } from 'react-router-dom';
import './Project.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

export default function Project() {
  return (
    <>
      <Header Title='Projects' />
      <div className='body-div'>
        <Nav />
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
            <img src={terrierScheduleImage} alt='Terrier Schedule' />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
