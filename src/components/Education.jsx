import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaPercentage, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const [animateTimeline, setAnimateTimeline] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const educationSection = document.getElementById('education');
      if (educationSection) {
        const rect = educationSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7) {
          setAnimateTimeline(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check in case user is already at education section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const educationItems = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Vidyavardhini's College of Engineering and Technology",
      location: "Vasai, Maharashtra",
      duration: "Aug 2022 - Present",
      percentage: "CGPA: 7.53/10 (Average of five semesters)",
      icon: <FaGraduationCap className="text-3xl" />,
      color: "from-[#00B894] to-[#00D9A5]",
      description: "Studying core IT subjects including Data Structures, Algorithms, Database Management, Web Development, and Software Engineering."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "N.G.V College",
      location: "Virar East",
      duration: "2020 - 2022",
      percentage: "Percentage: 67.47%",
      icon: <FaUniversity className="text-2xl" />,
      color: "from-[#00B894] to-[#00D9A5]",
      description: "Completed HSC with Computer Science as specialization. Participated in various technical events and coding competitions."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Annasaheb Vartak Smarak Vidyamandir",
      location: "Virar, Maharashtra",
      duration: "2019 - 2020",
      percentage: "Percentage: 82.20%",
      icon: <FaUniversity className="text-2xl" />,
      color: "from-[#00B894] to-[#00D9A5]",
      description: "Completed SSC with distinction. Participated in various extracurricular activities including sports and cultural events."
    }
  ];

  // Generate random floating particles
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 8 + 3;
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

  return (
    <section id="education" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00B894] opacity-5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#00D9A5] opacity-5 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        {/* Decorative Icons */}
        <div className="absolute top-1/4 left-1/4 opacity-5 hidden lg:block">
          <FaGraduationCap className="text-[150px] text-[#00B894] transform -rotate-12" />
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 opacity-5 hidden lg:block">
          <FaUniversity className="text-[150px] text-[#00B894] transform rotate-12" />
        </div>
        
        {/* Floating 3D Grid */}
        <div className="absolute top-1/3 right-10 w-40 h-40 opacity-20 hidden lg:block">
          <div className="w-full h-full border border-[#00B894] rounded-lg transform rotate-45 animate-pulse-slow"></div>
          <div className="w-full h-full border border-[#00B894] rounded-lg transform -rotate-12 absolute top-0 animate-pulse-slow animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block relative text-white">
            Education Journey
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full"></div>
          </h2>
          <p className="text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            My academic background and qualifications that have shaped my knowledge and skills.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with animation */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00B894] via-[#00B894] to-[#00D9A5] transform -translate-x-1/2">
              <div className={`absolute top-0 bottom-0 w-full bg-[#1A1A1A] transition-transform duration-1000 ease-out ${animateTimeline ? 'transform-none' : 'transform translate-y-full'}`} style={{ transformOrigin: 'bottom' }}></div>
            </div>
            
            {educationItems.map((item, index) => (
              <div 
                key={index} 
                className={`mb-12 relative transition-all duration-700 delay-${index * 300} ${animateTimeline ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 translate-x-24' : 'opacity-0 -translate-x-24'}`}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot with pulse animation */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 transform -translate-x-1/2 rounded-full p-1 bg-[#1A1A1A] shadow-xl z-20 border border-[#2F2F2F]">
                    <div className={`w-full h-full flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} text-white relative overflow-hidden`}>
                      {item.icon}
                      <span className="absolute inset-0 bg-white opacity-30 rounded-full animate-ping"></span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'} pt-8 md:pt-0`}>
                    <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border border-[#2F2F2F] hover:shadow-xl transition-shadow hover:border-[#00B894] group relative overflow-hidden">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894] to-[#00D9A5] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                      
                      <div className={`w-16 h-1 rounded-full bg-gradient-to-r ${item.color} mb-4 ${index % 2 === 0 ? 'ml-auto' : ''}`}></div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{item.degree}</h3>
                      
                      <div className="flex items-center mb-2 text-white font-medium">
                        <FaUniversity className="mr-2 text-[#00B894]" />
                        <span>{item.institution}</span>
                      </div>
                      
                      {item.location && (
                        <div className="flex items-center mb-2 text-[#B0B0B0]">
                          <FaMapMarkerAlt className="mr-2 text-[#00B894]" />
                          <span>{item.location}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center mb-2 text-[#B0B0B0]">
                        <FaCalendarAlt className="mr-2 text-[#00B894]" />
                        <span>{item.duration}</span>
                      </div>
                      
                      <div className="flex items-center mb-4 text-[#B0B0B0]">
                        <FaPercentage className="mr-2 text-[#00B894]" />
                        <span>{item.percentage}</span>
                      </div>
                      
                      <p className="text-[#B0B0B0]">{item.description}</p>
                      
                      <div className="mt-4 flex">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${item.color}`}>
                          {index === 0 ? 'Current' : `${2022 - index} - ${2023 - index}`}
                        </div>
                      </div>
                      
                      {/* Corner decoration */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="bg-[#00B894] w-24 transform origin-top-left rotate-45 translate-y-[-50%] translate-x-[30%] h-5 opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {renderParticles()}
      </div>
    </section>
  );
};

export default Education; 