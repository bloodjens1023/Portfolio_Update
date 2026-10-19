import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Background3D } from './components/Background3D';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const MainContent = () => {
  useScrollReveal();

  return (
    <>
      <Background3D />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
