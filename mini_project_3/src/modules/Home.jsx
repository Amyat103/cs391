import MeImage from '../assets/picture.jpeg';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

export default function Home() {
  return (
    <>
      <Header Title='David Myat Resume' />
      <div className='body-div'>
        <Nav />
        <div className='body-div'>
          <main>
            <img src={MeImage} alt='Profile' />
            <p>
              My name is Arkar Myat, I&apos;m a junior studying Computer Science
              at Boston University.
              <br />
              <br />
              I&apos;m currently interning at CoSphere and Y Stem and Chess.
              During my free time I learn new tools like libraries and
              frameworks and use them to build projects <br />
              <br />
              My most recent project is called Terrier Schedule, its a
              full-stack scheduler
            </p>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
