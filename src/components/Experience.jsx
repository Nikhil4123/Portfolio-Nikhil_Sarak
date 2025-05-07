import React, { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaCode, FaShieldAlt, FaExternalLinkAlt, FaArrowRight, FaGraduationCap, FaBuilding, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Import internship certificate images
import internseliteImg from '../assets/internselight.png';
import acmegradeImg from '../assets/acmagred.png';
import istopImg from '../assets/1stop.png';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const particlesRef = useRef(null);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50 
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Create animated particles
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles = [];
    const particleCount = 35;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
        color: i % 5 === 0 ? '#00B894' : '#FFFFFF'
      });
    }
    
    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#00B894' ? 
          `rgba(0, 184, 148, ${p.opacity})` : 
          `rgba(255, 255, 255, ${p.opacity / 3})`;
        ctx.fill();
      });
      
      // Connect particles that are close to each other
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(47, 47, 47, ${0.8 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      title: 'Web Development Back-End Intern',
      company: 'iStop',
      date: '15th Mar, 2025 - 30th Apr, 2025',
      description: 'Completed an internship program in Web Development Back-End, focusing on server-side development and database management.',
      achievements: [
        'Worked on server-side development and database management',
        'Contributed to API development and integration',
        'Demonstrated dedication, hard work, and diligence throughout the internship'
      ],
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Git'],
      certificateLink: istopImg,
      color: 'from-emerald-600 to-emerald-700',
      icon: <FaCode />,
      mockup: (
        <div className="relative w-full h-56 md:h-64 bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-lg overflow-hidden shadow-lg border border-[#2F2F2F] group">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="mb-4 p-3 bg-[#2F2F2F] rounded-full group-hover:bg-[#00B894] group-hover:bg-opacity-20 transition-all duration-300">
              <FaCode className="text-4xl text-[#00B894]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">iStop</h3>
            <p className="text-sm text-center max-w-xs text-[#B0B0B0]">Web Development Back-End Internship</p>
          </div>
          <div className="absolute bottom-0 right-0 m-4 flex space-x-2">
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-30 backdrop-blur-sm rounded-full text-white">Back-End</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-30 backdrop-blur-sm rounded-full text-white">2025</span>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute top-0 left-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute top-0 right-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute bottom-0 left-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 right-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute bottom-0 right-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
        </div>
      )
    },
    {
      title: 'Cyber Security Intern',
      company: 'Acmegrade',
      date: '11th Jun, 2024 - 11th Aug, 2024',
      description: 'Successfully completed an internship in Cyber Security, focusing on network security and vulnerability assessment.',
      achievements: [
        'Learned about network security and vulnerability assessment',
        'Gained hands-on experience with security tools and techniques',
        'Demonstrated dedication, determination, and hard work throughout the program'
      ],
      skills: ['Kali Linux', 'Network Security', 'Wireshark', 'Vulnerability Assessment', 'Security Tools'],
      certificateLink: acmegradeImg,
      color: 'from-emerald-600 to-emerald-700',
      icon: <FaShieldAlt />,
      mockup: (
        <div className="relative w-full h-56 md:h-64 bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-lg overflow-hidden shadow-lg border border-[#2F2F2F] group">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="mb-4 p-3 bg-[#2F2F2F] rounded-full group-hover:bg-[#00B894] group-hover:bg-opacity-20 transition-all duration-300">
              <FaShieldAlt className="text-4xl text-[#00B894]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">Acmegrade</h3>
            <p className="text-sm text-center max-w-xs text-[#B0B0B0]">Cyber Security Internship</p>
          </div>
          <div className="absolute bottom-0 right-0 m-4 flex space-x-2">
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-30 backdrop-blur-sm rounded-full text-white">Security</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-30 backdrop-blur-sm rounded-full text-white">2024</span>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute top-0 left-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute top-0 right-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute bottom-0 left-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 right-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute bottom-0 right-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
        </div>
      )
    },
    {
      title: 'Java Developer Intern',
      company: 'InternsElite',
      date: '10th July, 2023 - 16th September, 2023',
      description: 'Completed an internship in JAVA development, developing practical Java programming skills and software development experience.',
      achievements: [
        'Demonstrated commendable dedication, hard work, and exceptional intelligence',
        'Made significant contributions to the program',
        'Developed practical Java programming skills and software development experience'
      ],
      skills: ['Java', 'Object-Oriented Programming', 'Software Development', 'Problem Solving', 'Code Review'],
      certificateLink: internseliteImg,
      color: 'from-emerald-600 to-emerald-700',
      icon: <FaCode />,
      mockup: (
        <div className="relative w-full h-56 md:h-64 bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-lg overflow-hidden shadow-lg border border-[#2F2F2F] group">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
            <div className="mb-4 p-3 bg-[#2F2F2F] rounded-full group-hover:bg-[#00B894] group-hover:bg-opacity-20 transition-all duration-300">
              <FaCode className="text-4xl text-[#00B894]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">InternsElite</h3>
            <p className="text-sm text-center max-w-xs text-[#B0B0B0]">Java Development Internship</p>
          </div>
          <div className="absolute bottom-0 right-0 m-4 flex space-x-2">
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-30 backdrop-blur-sm rounded-full text-white">Java</span>
            <span className="px-2 py-1 text-xs bg-[#00B894] bg-opacity-30 backdrop-blur-sm rounded-full text-white">2023</span>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute top-0 left-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute top-0 right-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute bottom-0 left-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 right-0 w-2 h-[30%] bg-[#00B894]"></div>
            <div className="absolute bottom-0 right-0 h-2 w-[30%] bg-[#00B894]"></div>
          </div>
        </div>
      )
    }
  ];

  // Code decoration symbols
  const codeDecorations = [
    { symbol: '{ }', top: '15%', left: '5%', size: '18px', rotation: '15deg', color: 'rgba(0, 184, 148, 0.2)' },
    { symbol: '( )', top: '30%', right: '8%', size: '20px', rotation: '-8deg', color: 'rgba(0, 184, 148, 0.15)' },
    { symbol: '< >', top: '55%', left: '10%', size: '16px', rotation: '8deg', color: 'rgba(0, 184, 148, 0.2)' },
    { symbol: '[ ]', top: '75%', right: '15%', size: '14px', rotation: '-12deg', color: 'rgba(0, 184, 148, 0.15)' },
    { symbol: '//', top: '40%', left: '15%', size: '22px', rotation: '5deg', color: 'rgba(0, 184, 148, 0.1)' },
    { symbol: '=>', top: '60%', right: '12%', size: '16px', rotation: '-5deg', color: 'rgba(0, 184, 148, 0.2)' },
  ];

  const renderSkillBadge = (skill) => {
    return (
      <motion.span 
        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-[#00B894] mr-2 mb-2 transform hover:scale-105 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {skill}
      </motion.span>
    );
  };

  return (
    <section id="experience" className="py-24 bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Particles background */}
      <canvas ref={particlesRef} className="absolute inset-0 w-full h-full"></canvas>
      
      {/* Code decorations */}
      {codeDecorations.map((decoration, index) => (
        <div
          key={index}
          className="absolute z-10 font-mono font-bold opacity-30"
          style={{
            top: decoration.top,
            left: decoration.left,
            right: decoration.right,
            fontSize: decoration.size,
            transform: `rotate(${decoration.rotation})`,
            color: decoration.color
          }}
        >
          {decoration.symbol}
        </div>
      ))}
      
      {/* 3D Floating Elements */}
      <div className="absolute bottom-10 left-10 w-64 h-64 opacity-5 animate-pulse">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00B894" d="M41.3,-69.7C53.9,-60.3,64.5,-48.9,72.5,-35.1C80.4,-21.3,85.7,-5.1,84.5,10.7C83.2,26.5,75.3,41.9,64.3,53.9C53.2,65.9,39,74.6,22.7,81.1C6.4,87.6,-12,91.9,-27.3,87.2C-42.6,82.5,-54.9,68.9,-64.1,54.7C-73.3,40.6,-79.4,25.9,-80.4,10.8C-81.4,-4.2,-77.4,-19.8,-69.7,-32.2C-62,-44.6,-50.6,-53.9,-38.4,-63.4C-26.1,-72.8,-13.1,-82.4,0.9,-83.8C14.8,-85.2,29.6,-78.5,41.3,-69.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute top-20 right-10 w-40 h-40 opacity-5 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00B894" d="M54.2,-46.9C68.8,-29.5,78.1,-5.9,73.9,14.2C69.7,34.2,51.9,50.7,31.1,61.1C10.2,71.5,-13.8,75.9,-33.9,68.2C-53.9,60.5,-70,40.8,-76.4,18C-82.7,-4.9,-79.3,-30.9,-65.8,-48.1C-52.2,-65.3,-28.5,-73.7,-3.3,-71.2C21.9,-68.6,39.5,-64.2,54.2,-46.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 w-full relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold inline-block relative">
            Work Experience
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full"></div>
          </h2>
          <p className="text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            My professional journey through internships and work experience.
          </p>
        </motion.div>
        
        {/* Experience Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Experience Navigation */}
          <motion.div className="md:col-span-2 flex md:flex-col gap-4 md:h-fit" variants={fadeInUp}>
            {experiences.map((experience, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveExperience(index)}
                className={`text-left p-4 rounded-lg transition-all duration-300 hover:shadow-md flex-1 md:flex-initial
                  ${activeExperience === index ? 
                    'bg-[#00B894] text-white shadow-lg' : 
                    'bg-[#1A1A1A] border border-[#2F2F2F] hover:border-[#00B894]'}`}
                whileHover={{ scale: activeExperience === index ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={fadeInUp}
              >
                <h3 className="font-semibold text-white">
                  {experience.title}
                </h3>
                <p className={`text-sm mt-1 ${activeExperience === index ? 'text-white opacity-80' : 'text-[#B0B0B0]'}`}>
                  {experience.company}
                </p>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Active Experience Details */}
          <motion.div 
            className="md:col-span-4 bg-[#1A1A1A] rounded-xl overflow-hidden shadow-lg border border-[#2F2F2F] transition-all relative
            hover:border-[#00B894] group"
            variants={fadeInUp}
          >
            {/* Corner lines animation */}
            <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-2 h-[15%] bg-[#00B894]"></div>
              <div className="absolute top-0 left-0 h-2 w-[15%] bg-[#00B894]"></div>
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-2 h-[15%] bg-[#00B894]"></div>
              <div className="absolute top-0 right-0 h-2 w-[15%] bg-[#00B894]"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 w-2 h-[15%] bg-[#00B894]"></div>
              <div className="absolute bottom-0 left-0 h-2 w-[15%] bg-[#00B894]"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 right-0 w-2 h-[15%] bg-[#00B894]"></div>
              <div className="absolute bottom-0 right-0 h-2 w-[15%] bg-[#00B894]"></div>
            </div>
            
            <div className="p-6">
              {/* Experience mockup display with animation */}
              <motion.div 
                className="mb-6"
                key={activeExperience}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {experiences[activeExperience].mockup}
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-2 text-white"
                key={`title-${activeExperience}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {experiences[activeExperience].title}
              </motion.h3>
              
              <motion.div 
                className="flex items-center text-[#B0B0B0] mb-4"
                key={`meta-${activeExperience}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <FaBuilding className="mr-2 text-[#00B894]" />
                <span className="mr-4">{experiences[activeExperience].company}</span>
                <FaCalendarAlt className="mr-2 text-[#00B894]" />
                <span>{experiences[activeExperience].date}</span>
              </motion.div>
              
              <motion.p 
                className="text-[#B0B0B0] mb-6"
                key={`desc-${activeExperience}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {experiences[activeExperience].description}
              </motion.p>
              
              {/* Achievements */}
              <motion.div 
                className="mb-6"
                key={`achievements-${activeExperience}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h4 className="font-semibold mb-3 text-white flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#00B894] bg-opacity-20 text-[#00B894] inline-flex items-center justify-center mr-2">
                    <FaGraduationCap className="h-4 w-4" />
                  </span>
                  Key Achievements
                </h4>
                <ul className="space-y-2 ml-6">
                  {experiences[activeExperience].achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                    >
                      <span className="text-[#00B894] mr-2">•</span>
                      <span className="text-[#B0B0B0]">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Skills */}
              <motion.div 
                className="mb-6"
                key={`skills-${activeExperience}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <h4 className="font-semibold mb-3 text-white flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#00B894] bg-opacity-20 text-[#00B894] inline-flex items-center justify-center mr-2">
                    <FaTools className="h-4 w-4" />
                  </span>
                  Skills Applied
                </h4>
                <div className="flex flex-wrap">
                  {experiences[activeExperience].skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                    >
                      {renderSkillBadge(skill)}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Certificate Link */}
              <motion.div 
                className="flex gap-4"
                key={`certificate-${activeExperience}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                <motion.a 
                  href="#certificate-modal" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('certificate-modal').style.display = 'flex';
                    document.getElementById('certificate-image').src = experiences[activeExperience].certificateLink;
                  }}
                  className="flex items-center gap-2 bg-[#00B894] text-white px-4 py-2 rounded-lg hover:bg-[#00D9A5] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> View Certificate <FaArrowRight className="ml-1" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Certificate Modal */}
      <div id="certificate-modal" className="fixed inset-0 bg-black bg-opacity-80 z-50 justify-center items-center p-4 hidden backdrop-blur-sm" onClick={(e) => {
        if (e.target.id === 'certificate-modal') {
          document.getElementById('certificate-modal').style.display = 'none';
        }
      }}>
        <div className="relative bg-[#1A1A1A] p-2 rounded-lg max-w-4xl mx-auto">
          <button 
            className="absolute top-2 right-2 text-[#B0B0B0] hover:text-white bg-[#2F2F2F] rounded-full w-8 h-8 flex items-center justify-center"
            onClick={() => document.getElementById('certificate-modal').style.display = 'none'}
          >
            ×
          </button>
          <img id="certificate-image" className="max-h-[80vh] object-contain" alt="Certificate" />
        </div>
      </div>
    </section>
  );
};

export default Experience; 