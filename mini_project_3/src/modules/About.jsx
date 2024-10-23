import TennisImage from '../assets/tennis.jpg';
import BoardGameImage from '../assets/board_games.webp';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './About.css';

export default function About() {
  return (
    <>
      <Header Title='About' />
      <div className='body-div'>
        <Nav />
        <main>
          <p>
            <strong>About Me</strong> <br />
            My name is Arkar Myat, I&apos;m a junior studying Computer Science
            at Boston University.
            <br />
            <br />
            <strong>Courses</strong> <br />
            Some courses I&apos;ve taken are Data Structure and Algorithm, Intro
            to Programming, Software Engineering, Web Development, and Algorithm
            Analysis
            <br />
            <br />
            <strong>Hobbies</strong> <br />
            Outside of school I enjoy playing tennis and board games
            <br />
            <br />
            <strong>Learn about me here:</strong> <br />
            <a href='https://github.com/Amyat103' target='_blank'>
              Github
            </a>
            <br />
            <br />
            <a href='https://www.linkedin.com/in/davidmyat/' target='_blank'>
              LinkedIn
            </a>
            <br />
          </p>
          <div className='pictures'>
            <img src={TennisImage} />
            <img src={BoardGameImage} />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
