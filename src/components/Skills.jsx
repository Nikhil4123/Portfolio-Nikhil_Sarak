/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { FaCode, FaLaptopCode, FaMobile, FaShieldAlt, FaServer, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7) {
          setAnimateSkills(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check in case user is already at skills section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-3xl" />,
      skills: ['Java', 'JavaScript', 'C++', 'C'],
      delay: '0'
    },
    {
      title: 'Web Development',
      icon: <FaLaptopCode className="text-3xl" />,
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML/CSS', 'MongoDB', 'MySQL', 'Firebase', 'Socket.io', 'WebSockets', 'LangFlow'],
      delay: '100'
    },
    {
      title: 'Mobile Development',
      icon: <FaMobile className="text-3xl" />,
      skills: ['Java', 'Kotlin', 'Flutter', 'Android Studio', 'Firebase'],
      delay: '200'
    },
    {
      title: 'Cybersecurity',
      icon: <FaShieldAlt className="text-3xl" />,
      skills: ['Kali Linux', 'Network Security', 'Wireshark', 'Metasploit'],
      delay: '300'
    },
    {
      title: 'DevOps Skills',
      icon: <FaServer className="text-3xl" />,
      skills: ['AWS', 'Docker', 'Linux', 'Jenkins', 'Kubernetes', 'Redis'],
      delay: '400'
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaBrain className="text-3xl" />,
      skills: ['NLP', 'Data Analysis', 'TensorFlow', 'OpenAI API', 'LangChain'],
      delay: '500'
    }
  ];

  // Function to generate floating particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      // Generate random values for different particle behaviors
      const size = Math.random() * 10 + 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      const direction = Math.random() > 0.5 ? 'float-y-up' : 'float-y-down';
      
      particles.push(
        <div 
          key={i} 
          className={`absolute rounded-full bg-[#00B894] opacity-20 ${direction}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`
          }}
        ></div>
      );
    }
    return particles;
  };

  return (
    <section id="skills" className="py-24 bg-[#0D0D0D] relative w-full overflow-hidden">
      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00B894] opacity-5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#00D9A5] opacity-5 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        {/* Floating 3D Grid (CSS Only) */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 opacity-20 hidden lg:block">
          <div className="w-full h-full border border-[#00B894] rounded-lg transform rotate-12 animate-pulse-slow"></div>
          <div className="w-full h-full border border-[#00B894] rounded-lg transform -rotate-12 absolute top-0 animate-pulse-slow animation-delay-2000"></div>
          <div className="w-full h-full border border-[#00B894] rounded-lg absolute top-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Floating Code-like Elements */}
        <div className="absolute top-1/3 left-10 opacity-20 text-[#00B894] hidden md:block">
          <div className="rotate-12">
            <div>{'<html>'}</div>
            <div className="ml-4">{'<body>'}</div>
            <div className="ml-8">{'<div class="skills">'}</div>
            <div className="ml-12">{'<code>for(passion + skills) {'}</div>
            <div className="ml-16">{'createAmazingProjects();'}</div>
            <div className="ml-12">{'}'}</div>
            <div className="ml-8">{'</div>'}</div>
            <div className="ml-4">{'</body>'}</div>
            <div>{'</html>'}</div>
          </div>
        </div>
        
        <div className="absolute bottom-1/3 right-10 opacity-20 text-[#00B894] hidden md:block">
          <div className="-rotate-12">
            <div>{'function develop() {'}</div>
            <div className="ml-4">{'const skills = "frontend + backend";'}</div>
            <div className="ml-4">{'return innovative_solutions;'}</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative text-white">
            Technical Skills
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full"></div>
          </h2>
          <p className="text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            My technical toolkit spans web development, mobile apps, AI, and security. 
            Here's a comprehensive breakdown of my expertise across various domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden border border-[#2F2F2F] bg-[#1A1A1A] hover:shadow-lg transition-all duration-300 hover:border-[#00B894] h-full transform ${animateSkills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${category.delay}ms` }}
            >
              {/* Glass-like header */}
              <div className="p-6 backdrop-blur-sm bg-[#1A1A1A] border-b border-[#2F2F2F] relative overflow-hidden">
                {/* Background pattern for header */}
                <div className="absolute inset-0 opacity-5 overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-[#00B894]"></div>
                </div>
                
                <div className="flex items-center mb-2 relative z-10">
                  <div className="p-3 bg-[#00B894] bg-opacity-20 rounded-full mr-4 text-[#00B894]">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              
              {/* Skills list as badges */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full bg-[#00B894] bg-opacity-20 text-white text-sm font-medium hover:bg-opacity-30 transition-all hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B894] to-[#00D9A5] opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="bg-[#00B894] w-24 transform origin-top-left rotate-45 translate-y-[-50%] translate-x-[30%] h-5 opacity-60"></div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
      
      {/* Tech particles floating in background (pure CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {renderParticles()}
      </div>
    </section>
  );
};

export default Skills;