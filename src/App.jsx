import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
