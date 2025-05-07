/* eslint-disable react/no-unescaped-entities */
     import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' });
  const particlesRef = useRef(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
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
    const particleCount = 40;
    
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ 
        type: 'success', 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };
  
  // Code decoration symbols
  const codeDecorations = [
    { symbol: '( )', top: '10%', left: '5%', size: '16px', rotation: '15deg', color: 'rgba(0, 184, 148, 0.2)' },
    { symbol: '{ }', top: '25%', right: '8%', size: '20px', rotation: '-10deg', color: 'rgba(0, 184, 148, 0.15)' },
    { symbol: '< >', top: '65%', left: '7%', size: '18px', rotation: '5deg', color: 'rgba(0, 184, 148, 0.2)' },
    { symbol: '[ ]', top: '80%', right: '12%', size: '14px', rotation: '-5deg', color: 'rgba(0, 184, 148, 0.15)' },
    { symbol: '//', top: '40%', left: '12%', size: '22px', rotation: '10deg', color: 'rgba(0, 184, 148, 0.1)' },
    { symbol: '&&', top: '50%', right: '10%', size: '16px', rotation: '-8deg', color: 'rgba(0, 184, 148, 0.2)' },
  ];
  
  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <canvas ref={particlesRef} className="absolute inset-0 w-full h-full"></canvas>
      </div>
      
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
      
      <div className="absolute top-0 right-0">
        <svg width="350" height="350" viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
          <circle cx="125" cy="125" r="125" fill="url(#gradient1)" fillOpacity="0.05" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B894" />
              <stop offset="100%" stopColor="#00D9A5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0">
        <svg width="350" height="350" viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
          <circle cx="125" cy="225" r="125" fill="url(#gradient2)" fillOpacity="0.05" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B894" />
              <stop offset="100%" stopColor="#00D9A5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold inline-block relative text-white">
            Get In Touch
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full"></div>
          </h2>
          <p className="text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me through any of the channels below.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div 
            className="md:col-span-5 bg-[#1A1A1A] text-white rounded-2xl overflow-hidden shadow-xl border border-[#2F2F2F]
            relative hover:border-[#00B894] transition-all duration-300 transform hover:-translate-y-1 group"
            variants={itemVariants}
          >
            {/* Corner lines animation */}
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
            
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="p-2 bg-[#00B894] bg-opacity-20 rounded-xl mr-3">
                  <FaPhone className="text-xl text-[#00B894]" />
                </span>
                Contact Information
              </h3>
              
              <p className="mb-8 text-[#B0B0B0]">
                I'm open to freelance opportunities, collaborations, and interesting projects. Let's connect and create something amazing together.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-[#00B894] bg-opacity-20 p-3 rounded-xl mr-4">
                    <FaPhone className="text-[#00B894]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-[#B0B0B0]">8208061528</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-[#00B894] bg-opacity-20 p-3 rounded-xl mr-4">
                    <FaEnvelope className="text-[#00B894]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-[#B0B0B0]">nikhilsarak612w@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-[#00B894] bg-opacity-20 p-3 rounded-xl mr-4">
                    <FaMapMarkerAlt className="text-[#00B894]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-[#B0B0B0]">Vasai, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://www.linkedin.com/in/nikhil-sarak-463a04256/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#00B894] bg-opacity-20 hover:bg-opacity-30 p-3 rounded-xl transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="text-xl text-[#00B894]" />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/Nikhil0123" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#00B894] bg-opacity-20 hover:bg-opacity-30 p-3 rounded-xl transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl text-[#00B894]" />
                  </motion.a>
                </div>
              </div>
              
              {/* 3D Floating Element */}
              <div className="absolute -bottom-10 -right-10 w-60 h-60 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45">
                  <path fill="#00B894" d="M41.3,-69.7C53.9,-60.3,64.5,-48.9,72.5,-35.1C80.4,-21.3,85.7,-5.1,84.5,10.7C83.2,26.5,75.3,41.9,64.3,53.9C53.2,65.9,39,74.6,22.7,81.1C6.4,87.6,-12,91.9,-27.3,87.2C-42.6,82.5,-54.9,68.9,-64.1,54.7C-73.3,40.6,-79.4,25.9,-80.4,10.8C-81.4,-4.2,-77.4,-19.8,-69.7,-32.2C-62,-44.6,-50.6,-53.9,-38.4,-63.4C-26.1,-72.8,-13.1,-82.4,0.9,-83.8C14.8,-85.2,29.6,-78.5,41.3,-69.7Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-7 bg-[#1A1A1A] rounded-2xl shadow-xl p-8 border border-[#2F2F2F]
            relative hover:border-[#00B894] transition-all duration-300 transform hover:-translate-y-1 group"
            variants={itemVariants}
          >
            {/* Corner lines animation */}
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
            
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0D0D0D] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B894] border border-[#2F2F2F] text-white"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#B0B0B0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Your Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0D0D0D] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B894] border border-[#2F2F2F] text-white"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#B0B0B0]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-white font-medium mb-2">Your Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-[#0D0D0D] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B894] border border-[#2F2F2F] text-white"
                    placeholder="How can I help you?"
                  ></textarea>
                  <div className="absolute top-3 right-3 pointer-events-none text-[#B0B0B0]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg text-white font-medium flex items-center justify-center transition-all
                  ${isSubmitting 
                    ? 'bg-[#2F2F2F] cursor-not-allowed' 
                    : 'bg-[#00B894] hover:bg-[#00D9A5]'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </motion.button>
              
              {submitMessage.message && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-lg flex items-center ${
                    submitMessage.type === 'success' 
                      ? 'bg-[#00B894] bg-opacity-20 text-white' 
                      : 'bg-red-900 bg-opacity-20 text-white'
                  }`}
                >
                  {submitMessage.type === 'success' ? (
                    <FaCheckCircle className="mr-2 text-[#66FF99]" />
                  ) : (
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                    </svg>
                  )}
                  {submitMessage.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#1A1A1A]"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact; 