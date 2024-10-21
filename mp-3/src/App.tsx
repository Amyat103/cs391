import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './modules/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
