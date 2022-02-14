import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Project />
      <Contact />
     
    </main>
    </>
  );
}

export default App;
