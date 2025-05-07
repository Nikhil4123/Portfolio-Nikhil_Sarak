import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-[#0D0D0D] relative overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00B894] opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00D9A5] opacity-5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-[#00B894] opacity-5 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Hi, I&apos;m <span className="text-gradient">Nikhil Sarak</span>
            </h1>
            <div className="flex items-center mb-6">
              <div className="h-1 w-20 bg-[#00B894] mr-4 rounded-full"></div>
              <p className="text-white text-lg font-medium">IT Engineering Student</p>
            </div>
            <p className="text-xl mb-8 text-[#B0B0B0] leading-relaxed">
              I am passionate about web development and Android app development, with expertise in
              developing complex projects using the MERN stack and mobile applications. My focus is on creating
              beautiful, functional, and user-friendly digital experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center text-[#B0B0B0]">
                <FaLaptopCode className="mr-2 text-[#00B894]" />
                <span>Web Developer</span>
              </div>
              <div className="flex items-center text-[#B0B0B0]">
                <FaMobileAlt className="mr-2 text-[#00B894]" />
                <span>Mobile App Developer</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8208061528"
                className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2F2F2F] text-white px-5 py-3 rounded-full font-medium hover:border-[#00B894] transition-all hover:scale-105"
              >
                <FaPhone className="text-[#00B894]" /> 8208061528
              </a>
              <a
                href="mailto:nikhilsarak612w@gmail.com"
                className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2F2F2F] text-white px-5 py-3 rounded-full font-medium hover:border-[#00B894] transition-all hover:scale-105"
              >
                <FaEnvelope className="text-[#00B894]" /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-sarak-463a04256/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#00B894] text-white px-5 py-3 rounded-full font-medium hover:bg-[#00D9A5] transition-all hover:scale-105"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Nikhil0123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2F2F2F] text-white px-5 py-3 rounded-full font-medium hover:border-[#00B894] transition-all hover:scale-105"
              >
                <FaGithub className="text-[#00B894]" /> GitHub
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full blur opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-0 -m-4 bg-gradient-to-r from-[#00B894] to-[#00D9A5] rounded-full blur-sm opacity-30"></div>
              
              {/* Profile image */}
              <div className="w-72 h-72 bg-[#1A1A1A] rounded-full overflow-hidden border-4 border-[#2F2F2F] shadow-xl relative z-10 hover:scale-105 transition-all duration-300">
                <img
                  src="/profile-placeholder.jpg"
                  alt="Nikhil Sarak"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#1A1A1A] border border-[#2F2F2F] text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center rotate-6 hover:rotate-0 transition-all">
                <FaLaptopCode className="mr-2 text-[#00B894]" /> Web Dev
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] border border-[#2F2F2F] text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold flex items-center -rotate-6 hover:rotate-0 transition-all">
                <FaMobileAlt className="mr-2 text-[#00B894]" /> Mobile Dev
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-1">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".1" className="fill-[#1A1A1A]"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".15" className="fill-[#1A1A1A]"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[#1A1A1A]"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 