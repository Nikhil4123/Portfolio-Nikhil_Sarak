/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaServer, FaMobile, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [animateProjects, setAnimateProjects] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7) {
          setAnimateProjects(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Penny_Tracker-Finance Tracker (Website & Mobile App)",
      description: "A comprehensive finance tracking solution with both web platform and mobile app. The system automatically extracts financial transactions from SMS messages, providing real-time expense tracking, analytics, and financial insights across both platforms.",
      features: [
        "Cross-platform solution: Web dashboard + Android mobile app",
        "Automated SMS message scraping for transaction detection",
        "Real-time expense tracking with smart categorization",
        "Interactive web dashboard with charts, reports, and analytics",
        "Mobile app with offline capabilities and push notifications",
        "Synchronized data between web and mobile platforms"
      ],
      techStack: ["React.js", "Node.js", "Android", "Java", "Firebase","flutter"],
      githubLink: "#",
      liveLink: "https://www.pennytracker.tech/",
      androidLink: "#", // Add Android app link here when available
      image: "/project-finance.jpg",
      color: "from-[#00B894] to-[#00D9A5]",
      isFeatured: true, // Mark as featured project
      mockup: (
        <div className="relative w-full h-56 md:h-64 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-[#2F2F2F] group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/project-finance.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="mb-4 p-3 bg-[#00B894] bg-opacity-20 rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaCode className="text-4xl text-[#00B894]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">PennyTracker</h3>
            <p className="text-sm text-center max-w-xs text-[#B0B0B0]">Web & Mobile finance tracking with SMS integration</p>
          </div>
          <div className="absolute bottom-0 right-0 m-4 flex space-x-2">
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">MERN</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">Android</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">Firebase</span>
          </div>
          {/* Featured badge */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#00B894] to-[#00D9A5] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            ⭐ Featured Project
          </div>
        </div>
      )
    },
    {
      title: "SkillRush - Flutter Education App",
      description: "SkillRush is a Flutter-based education app that offers video courses, quizzes, and progress tracking to help users learn new skills and grow at their own pace.",
      features: [
        "Video courses with interactive learning modules",
        "Quiz system with progress tracking",
        "Personalized learning paths and recommendations",
        "Cross-platform mobile app (iOS & Android)"
      ],
      techStack: ["Flutter", "Dart", "Firebase", "State Management"],
      githubLink: "https://github.com/Nikhil4123/SkillRush-",
      liveLink: "#",
      image: "/project-finance.jpg",
      color: "from-[#00B894] to-[#00D9A5]",
      mockup: (
        <div className="relative w-full h-56 md:h-64 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-[#2F2F2F]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/project-finance.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="mb-4 p-3 bg-[#00B894] bg-opacity-20 rounded-full">
              <FaMobile className="text-4xl text-[#00B894]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">SkillRush</h3>
            <p className="text-sm text-center max-w-xs text-[#B0B0B0]">Flutter-based education app with video courses & quizzes</p>
          </div>
          <div className="absolute bottom-0 right-0 m-4 flex space-x-2">
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">Flutter</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">Dart</span>
          </div>
        </div>
      )
    },
    {
      title: "Book Selling Website",
      description: "Built a platform connecting students for buying and selling academic books, featuring real-time chat and optimized backend for faster response times.",
      features: [
        "Integrated real-time chat using WebSockets, supporting 100+ daily conversations", 
        "Optimized backend with Redis caching, reducing response times by 30%",
        "User authentication and profile management",
        "Advanced search and filtering options"
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Socket.io", "Redis"],
      githubLink: "https://github.com/Nikhil4123/book-selling-website",
      liveLink: "#",
      image: "/project-book.jpg",
      color: "from-[#00B894] to-[#00D9A5]",
      mockup: (
        <div className="relative w-full h-56 md:h-64 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-[#2F2F2F]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/project-book.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="mb-4 p-3 bg-[#00B894] bg-opacity-20 rounded-full">
              <FaCode className="text-4xl text-[#00B894]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">BookNest</h3>
            <p className="text-sm text-center max-w-xs text-[#B0B0B0]">Connect, buy and sell academic books with real-time chat</p>
          </div>
          <div className="absolute bottom-0 right-0 m-4 flex space-x-2">
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">MERN</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">Socket.io</span>
          </div>
        </div>
      )
    },
    {
      title: "Job Portal Website",
      description: "Developed a job portal website using the MERN stack to connect job seekers and employers with a seamless user experience.",
      features: [
        "Implemented features including job listings, search functionality, user authentication, and application tracking", 
        "Designed a user-friendly interface with React for seamless browsing",
        "Resume builder and job application tracking",
        "Employer dashboard for posting and managing job listings"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Firebase"],
      githubLink: "https://github.com/Nikhil4123/job-portal",
      liveLink: "#",
      image: "/project-job.jpg",
      color: "from-[#00B894] to-[#00D9A5]",
      mockup: (
        <div className="relative w-full h-56 md:h-64 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] rounded-lg overflow-hidden shadow-lg border border-[#2F2F2F]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/project-job.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="mb-4 p-3 bg-[#00B894] bg-opacity-20 rounded-full">
              <FaServer className="text-4xl text-[#00B894]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">CareerConnect</h3>
            <p className="text-sm text-center max-w-xs text-[#B0B0B0]">Full-featured job portal connecting talent with opportunity</p>
          </div>
          <div className="absolute bottom-0 right-0 m-4 flex space-x-2">
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">MERN</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-20 backdrop-blur-sm rounded-full text-white">Firebase</span>
          </div>
        </div>
      )
    }
  ];

  const renderTechBadge = (tech) => {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-[#00B894] bg-opacity-20 mr-2 mb-2 transform hover:scale-105 transition-all">
        {tech}
      </span>
    );
  };
  
  // Generate random floating particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 12; i++) {
      const size = Math.random() * 10 + 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      const direction = Math.random() > 0.5 ? 'float-y-up' : 'float-y-down';
      
      particles.push(
        <div 
          key={i} 
          className={`absolute rounded-full bg-[#00B894] opacity-10 ${direction}`}
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
  
  // Generate code-like decoration elements
  const CodeDecoration = ({ className }) => (
    <div className={`opacity-20 text-[#00B894] ${className}`}>
      <div>
        <div>{'function Project() {'}</div>
        <div className="ml-4">{'return {'}</div>
        <div className="ml-8">{'id: "portfolio",'}</div>
        <div className="ml-8">{'tech: ["React", "Node"],'}</div>
        <div className="ml-8">{'impact: "high"'}</div>
        <div className="ml-4">{'};'}</div>
        <div>{'}'}</div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00B894] opacity-5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#00D9A5] opacity-5 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        {/* Floating code decorations */}
        <CodeDecoration className="absolute top-1/3 left-10 hidden md:block rotate-12" />
        <CodeDecoration className="absolute bottom-1/3 right-10 hidden md:block -rotate-12" />
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 opacity-10 hidden lg:block">
          <FaDatabase className="absolute top-0 left-0 text-5xl text-[#00B894]" />
          <FaServer className="absolute bottom-0 right-0 text-5xl text-[#00B894]" />
          <FaCode className="absolute top-1/2 right-0 text-5xl text-[#00B894]" />
        </div>
        
        {/* 3D floating elements */}
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 opacity-20 hidden lg:block">
          <div className="w-full h-full border border-[#00B894] rounded transform rotate-45 animate-pulse-slow"></div>
          <div className="w-full h-full border border-[#00B894] rounded absolute top-0 transform -rotate-45 animate-pulse-slow animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative text-white">
            Featured Projects
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full"></div>
          </h2>
          <p className="text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            Check out some of my most recent work across web and mobile development.
          </p>
        </div>
        
        {/* Project Grid with animation */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-6 gap-8 mb-12 transition-all duration-1000 ${
            animateProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Project Navigation */}
          <div className="md:col-span-2 flex md:flex-col gap-4 md:h-fit">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md flex-1 md:flex-initial relative
                  ${activeProject === index ? 
                    'bg-[#00B894] text-white shadow-lg' : 
                    'bg-[#1A1A1A] border border-[#2F2F2F] hover:border-[#00B894]'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transform: animateProjects ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: animateProjects ? 1 : 0
                }}
              >
                {project.isFeatured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#00B894] to-[#00D9A5] text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐
                  </div>
                )}
                <h3 className={`font-semibold ${activeProject === index ? 'text-white' : 'text-white'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mt-1 ${activeProject === index ? 'text-white opacity-80' : 'text-[#B0B0B0]'}`}>
                  {project.techStack.slice(0, 2).join(', ')}
                  {project.techStack.length > 2 && '...'}
                </p>
              </button>
            ))}
          </div>
          
          {/* Active Project Details with animation */}
          <div 
            className="md:col-span-4 bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg border border-[#2F2F2F] transition-all relative group"
            style={{ 
              transitionDelay: '300ms',
              transform: animateProjects ? 'translateY(0)' : 'translateY(20px)',
              opacity: animateProjects ? 1 : 0
            }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B894] to-[#00D9A5] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            {/* Animated corner lines */}
            <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-1 h-10 bg-[#00B894] transform origin-top-left transition-transform duration-300 group-hover:h-20"></div>
              <div className="absolute top-0 left-0 w-10 h-1 bg-[#00B894] transform origin-top-left transition-transform duration-300 group-hover:w-20"></div>
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-1 h-10 bg-[#00B894] transform origin-top-right transition-transform duration-300 group-hover:h-20"></div>
              <div className="absolute top-0 right-0 w-10 h-1 bg-[#00B894] transform origin-top-right transition-transform duration-300 group-hover:w-20"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-10 h-10 overflow-hidden pointer-events-none">
              <div className="absolute bottom-0 left-0 w-1 h-10 bg-[#00B894] transform origin-bottom-left transition-transform duration-300 group-hover:h-20"></div>
              <div className="absolute bottom-0 left-0 w-10 h-1 bg-[#00B894] transform origin-bottom-left transition-transform duration-300 group-hover:w-20"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden pointer-events-none">
              <div className="absolute bottom-0 right-0 w-1 h-10 bg-[#00B894] transform origin-bottom-right transition-transform duration-300 group-hover:h-20"></div>
              <div className="absolute bottom-0 right-0 w-10 h-1 bg-[#00B894] transform origin-bottom-right transition-transform duration-300 group-hover:w-20"></div>
            </div>
            
            <div className="p-6 relative z-10">
              {/* Project mockup display */}
              <div className="mb-6 transform transition-transform duration-500 hover:scale-[1.01]">
                {projects[activeProject].mockup}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">{projects[activeProject].title}</h3>
              <p className="text-[#B0B0B0] mb-6">{projects[activeProject].description}</p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-white flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#00B894] bg-opacity-20 text-[#00B894] inline-flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Key Features
                </h4>
                <ul className="space-y-2 ml-6">
                  {projects[activeProject].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#00B894] mr-2">•</span>
                      <span className="text-[#B0B0B0]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-white flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#00B894] bg-opacity-20 text-[#00B894] inline-flex items-center justify-center mr-2">
                    <FaCode className="h-4 w-4" />
                  </span>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap">
                  {projects[activeProject].techStack.map((tech, idx) => (
                    renderTechBadge(tech)
                  ))}
                </div>
              </div>
              
              {/* Video Demo for PennyTracker */}
              {projects[activeProject].title.includes("PennyTracker") && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-white flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#00B894] bg-opacity-20 text-[#00B894] inline-flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                    </span>
                    Project Demo Video
                  </h4>
                  <div className="relative rounded-lg overflow-hidden border border-[#2F2F2F]">
                    <video 
                      controls 
                      className="w-full h-64 object-cover"
                      poster="/project-finance.jpg"
                    >
                      <source src="/finance_trackervideo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
              
              {/* Links */}
              <div className="flex gap-4 flex-wrap">
                {projects[activeProject].githubLink && (
                  <a 
                    href={projects[activeProject].githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2F2F2F] text-white px-4 py-2 rounded-lg hover:border-[#00B894] transition-colors"
                  >
                    <FaGithub className="text-[#B0B0B0]" /> View on GitHub
                  </a>
                )}
                
                {projects[activeProject].liveLink && (
                  <a 
                    href={projects[activeProject].liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#00B894] text-white px-4 py-2 rounded-lg hover:bg-[#00D9A5] transition-all"
                  >
                    <FaExternalLinkAlt /> Website <FaArrowRight className="ml-1" />
                  </a>
                )}
                
                {projects[activeProject].androidLink && projects[activeProject].title.includes("PennyTracker") && (
                  <a 
                    href={projects[activeProject].androidLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2F2F2F] text-white px-4 py-2 rounded-lg hover:border-[#00B894] transition-colors"
                  >
                    <FaMobile className="text-[#B0B0B0]" /> Android App
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Stats Section */}
        <div 
          className={`mt-20 bg-[#1A1A1A] p-8 rounded-xl border border-[#2F2F2F] relative overflow-hidden transition-all duration-1000 ${
            animateProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-10 h-10 rounded-full bg-[#00B894] bg-opacity-20 text-[#00B894] flex items-center justify-center mr-3">
              <FaCode />
            </span>
            Project Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Projects Completed", value: "15+", icon: <FaCode /> },
              { label: "VNPS 1st Winner", value: "PennyTracker", icon: <FaServer /> },
              { label: "Technologies Used", value: "20", icon: <FaDatabase /> }
            ].map((stat, index) => (
              <div key={index} className="bg-[#0D0D0D] p-6 rounded-lg border border-[#2F2F2F] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00B894] bg-opacity-10 mb-4">
                  <div className="text-[#00B894] text-2xl">{stat.icon}</div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-[#B0B0B0]">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00B894] opacity-5 rounded-full blur-xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00D9A5] opacity-5 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {renderParticles()}
      </div>
    </section>
  );
};

export default Projects; 