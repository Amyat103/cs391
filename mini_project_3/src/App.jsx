import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './modules/Home';
import About from './modules/About';
import Education from './modules/Education';
import Experience from './modules/Experience';
import Project from './modules/Project';
import Calculator from './modules/Calculator';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/project' element={<Project />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
