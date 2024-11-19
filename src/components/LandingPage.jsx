import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import mascot from '../assets/ullu.png';
import bg from '../assets/stars.png';

const LandingPage = () => {
  const mascotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mascot = mascotRef.current;
      const rect = mascot.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (clientX - centerX) * 0.02;
      const moveY = (clientY - centerY) * 0.02;
      
      mascot.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-[#1a2a3a] to-[#0f172a] flex flex-col items-center justify-center relative overflow-hidden pt-16">
        <Navbar />
      {/* Floating Lanterns */}
      <motion.img
        src={bg}
        className="absolute w-full h-full object-cover"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Title */}
      <motion.h1
        className="text-7xl font-harryp text-enchanted mb-16 z-10 relative"
        style={{
          textShadow: `
            2px 2px 0 #F39C12,
            4px 4px 0 #E67E22,
            6px 6px 0 #D35400,
            8px 8px 15px rgba(0, 0, 0, 0.4)
          `,
          transform: 'perspective(1000px) rotateX(15deg)'
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Aurorix: Chapter 1
      </motion.h1>

      {/* Mascot */}
      <motion.div
        className="w-64 h-64 mb-16 z-10"
        animate={{
          y: [0, 20, 0],
          opacity: [1, 0.7, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={mascot} alt="Aurorix Mascot" className="w-full h-full object-contain" />
      </motion.div>


      {/* Magical Apply Button */}
      <motion.a
        href="https://devfolio.co"
        className="px-8 py-4 bg-mystic/80 hover:bg-mystic text-smoke font-almendra text-xl rounded-lg
                 shadow-[0_0_15px_rgba(142,68,173,0.5)] hover:shadow-[0_0_25px_rgba(142,68,173,0.8)]
                 transition-all duration-300 z-10"
        whileHover={{ 
          scale: 1.05,
          textShadow: "0 0 8px rgb(255,255,255)",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        ⚡ Cast Your Application ⚡
      </motion.a>
    </div>
  );
};

export default LandingPage;
