import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './modules/Nav';
import Header from './modules/Header';
import Footer from './modules/Footer';
// import About from './modules/About';
// import Education from './modules/Education';
// import Experience from './modules/Experience';
// import Project from './modules/Project';
// import Calculator from './modules/Calculator';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        {/* <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/project' element={<Project />} />
        <Route path='/calculator' element={<Calculator />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
