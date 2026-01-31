import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="loader-rail">
          <div className="loader-bar"></div>
        </div>
        <p className="loader-text"><span>Loading</span> portfolio...</p>
      </div>
    );
  }

  return (
    <div className="app w-full min-h-screen bg-[#0D0D0D]">
      <Header />
      <main className="w-full">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
