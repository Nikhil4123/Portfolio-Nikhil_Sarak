import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaHeart, FaRegCopyright, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0D0D0D] text-white relative border-t border-[#2F2F2F]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B894] to-[#00D9A5]"></div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 relative inline-block">
              Nikhil Sarak
              <div className="h-1 w-20 bg-[#00B894] mt-2"></div>
            </h3>
            <p className="text-[#B0B0B0] mb-6">
              IT Engineering Student & Web Developer passionate about creating beautiful, 
              functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/nikhilsarak/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] hover:bg-[#00B894] p-3 rounded-lg transition-colors border border-[#2F2F2F]"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/Nikhil4123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] hover:bg-[#00B894] p-3 rounded-lg transition-colors border border-[#2F2F2F]"
              >
                <FaGithub />
              </a>
              <a 
                href="https://leetcode.com/u/Nikhilsarak/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] hover:bg-[#00B894] p-3 rounded-lg transition-colors border border-[#2F2F2F]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0 0 2.227 1.653 1.653 0 0 0 2.227 0L11.476 9.53l4.847-5.163a1.374 1.374 0 0 0 0-1.944 1.374 1.374 0 0 0-1.944 0z"/>
                </svg>
              </a>
              <a 
                href="mailto:nikhilsarak612w@gmail.com" 
                className="bg-[#1A1A1A] hover:bg-[#00B894] p-3 rounded-lg transition-colors border border-[#2F2F2F]"
              >
                <FaEnvelope />
              </a>
              <a 
                href="tel:8208061528" 
                className="bg-[#1A1A1A] hover:bg-[#00B894] p-3 rounded-lg transition-colors border border-[#2F2F2F]"
              >
                <FaPhone />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Quick Links
              <div className="h-1 w-16 bg-[#00B894] mt-2"></div>
            </h3>
            <ul className="space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className="text-[#B0B0B0] hover:text-[#00D9A5] transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Contact Info
              <div className="h-1 w-16 bg-[#00B894] mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-[#00B894]" />
                <span className="text-[#B0B0B0]">8208061528</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-[#00B894]" />
                <span className="text-[#B0B0B0]">nikhilsarak612w@gmail.com</span>
              </li>
              <li className="flex items-start mt-4">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#00B894]" />
                <span className="text-[#B0B0B0]">Vasai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-[#2F2F2F] py-6 bg-[#1A1A1A]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-2 text-[#B0B0B0]" />
            <p>{currentYear} Nikhil Sarak. All rights reserved.</p>
          </div>
          
          <div className="flex items-center text-[#B0B0B0]">
            <span>Made with</span>
            <FaHeart className="mx-2 text-[#00B894] animate-pulse" />
            <span>and React.js</span>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 border-4 border-[#00B894] rounded-full"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 border-4 border-[#00B894] rounded-full"></div>
        <div className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-[#00B894] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-[#00B894] rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer; 