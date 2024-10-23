import BUImage from '../assets/bu.webp';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import './Education.css';

export default function Education() {
  return (
    <>
      <Header Title='Education' />
      <div className='body-div'>
        <Nav />
        <main>
          <p>
            I studied my K-12 at Yangon International School, a school located
            in Yangon, Myanmar
            <br />
            <br />
            After that I decided that I want to study in the US, so I applied to
            University of La Verne as a Business Administration Major
            <br />
            <br />
            After 3 years, I decided that I want to change school, so I changed
            my major as well to Computer Science and I transferred into BU and
            switch my major to cs at the fall of 2023.
            <br />
            <br />
          </p>
          <img src={BUImage} alt='Boston University' />
        </main>
      </div>
      <Footer />
    </>
  );
}
