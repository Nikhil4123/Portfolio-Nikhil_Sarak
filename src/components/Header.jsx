import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { id: 'about', label: 'About', icon: <FaHome /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress calculation
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Header background effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = navigationItems.map(item => item.id);
      let current = 'about';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#2F2F2F] z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#00B894] to-[#00D9A5] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className={`fixed w-full top-1 z-40 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-[#1A1A1A]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#2F2F2F]/50' 
          : 'bg-[#0D0D0D]/80 backdrop-blur-sm py-5'
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-white relative group cursor-pointer" onClick={() => scrollToSection('about')}>
              <span className="relative z-10 transition-all duration-300 group-hover:text-[#00D9A5]">Nikhil Sarak</span>
              <div className="absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full transition-all duration-300 group-hover:w-full"></div>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-1">
              {navigationItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-lg font-medium text-sm uppercase tracking-wider transition-all duration-300 group ${
                      activeSection === item.id 
                        ? 'text-[#00D9A5] bg-[#00B894]/10' 
                        : 'text-white hover:text-[#00D9A5] hover:bg-[#00B894]/5'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transform: scrolled ? 'translateY(0)' : 'translateY(-10px)',
                      opacity: scrolled ? 1 : 0
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-3/4 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00D9A5]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                className={`relative p-2 rounded-lg transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'bg-[#00B894]/20 text-[#00D9A5]' 
                    : 'text-white hover:bg-[#00B894]/10'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                  }`}>
                    <FaBars className={`w-6 h-6 transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`} />
                  </span>
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-0 translate-y-0' : 'translate-y-1'
                  }`}>
                    <FaTimes className={`w-6 h-6 transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </span>
                </div>
              </button>
            </div>
          </nav>

          {/* Advanced Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-[#2F2F2F]/50 mt-4">
              <ul className="flex flex-col space-y-2">
                {navigationItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-[#00B894]/20 to-[#00D9A5]/20 text-[#00D9A5] border border-[#00B894]/30' 
                          : 'text-[#B0B0B0] hover:text-white hover:bg-[#00B894]/10'
                      }`}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                        opacity: mobileMenuOpen ? 1 : 0
                      }}
                    >
                      <span className={`text-lg transition-all duration-300 ${
                        activeSection === item.id ? 'text-[#00D9A5]' : 'text-[#B0B0B0] group-hover:text-[#00D9A5]'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                      
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <div className="ml-auto w-2 h-2 bg-[#00D9A5] rounded-full animate-pulse"></div>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Background blur effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/20 to-transparent pointer-events-none"></div>
      </header>
    </>
  );
};

export default Header; 