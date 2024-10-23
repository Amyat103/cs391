import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './modules/Nav';
import Header from './modules/Header';
import Footer from './modules/Footer';
import About from './modules/About';
import Education from './modules/Education';
import Experience from './modules/Experience';
import Project from './old/Project';
import Calculator from './modules/Calculator';
import { styled } from 'styled-components';
import './index.css';
import Home from './modules/Home';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 85%;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  background-color: rgb(104, 214, 236);
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;

const MainStyled = styled.main`
  flex: 1;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <MainDiv>
        <Header Title='David Myat Resume' />
        <StyledDiv>
          <Nav />
          <MainStyled>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/education' element={<Education />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/project' element={<Project />} />
              <Route path='/calculator' element={<Calculator />} />
            </Routes>
          </MainStyled>
        </StyledDiv>
        <Footer />
      </MainDiv>
    </BrowserRouter>
  );
}

export default App;
