import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = ['Schedule', 'Prizes', 'Tracks', 'Sponsors', 'Team', 'Contact Us'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-midnight/30 backdrop-blur-sm border-b border-mystic/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ scale: 2.5, x: "50vw", y: "40vh", opacity: 0 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            transition={{ 
                duration: 1.8,
                ease: [0.6, 0.01, -0.05, 0.9],
                times: [0, 1],
                opacity: { duration: 2 }
              }}
            className="flex-shrink-0"
          >
            <span className="font-harryp text-3xl text-enchanted animate-pulse drop-shadow-[0_0_10px_rgba(243,156,18,0.8)]">
              Aurorix 2025
            </span>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-almendra text-lg text-smoke hover:text-enchanted transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
