import React from 'react';
import Home from './components/Home';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Home />
      <Intro />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
