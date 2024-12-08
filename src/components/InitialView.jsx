import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./InitialView.css";
import hogwartsVideo from '../assets/hogwarts.mp4';
import gsap from 'gsap';


const SmokeEffect = () => {
    useEffect(() => {
      const container = document.querySelector('.smoke-particles');
      const particles = [];
      const particleCount = 50;
  
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 100 + 50;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        
        container.appendChild(particle);
        particles.push(particle);
  
        animate(particle);
      }
  
      function animate(particle) {
        gsap.to(particle, {
          x: Math.random() * 200 - 100,
          y: -100,
          opacity: 0,
          duration: Math.random() * 3 + 2,
          ease: "power1.out",
          onComplete: () => {
            particle.style.opacity = 1;
            particle.style.transform = 'none';
            animate(particle);
          }
        });
      }
  
      return () => {
        particles.forEach(p => p.remove());
      };
    }, []);
  
    return <div className="smoke-particles" />;
  };
  


const InitialView = ({ onComplete }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 8000);
    const endTimeout = setTimeout(onComplete, 13000);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(endTimeout);
    };
  }, [onComplete]);

  return (
    <div className="initial-view">
      {/* Video Background */}
      <video
        src={hogwartsVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        type="video/mp4"
        className="intro-video"
      />

      {/* Title Overlay */}
      {showTitle && (
        <>
        <motion.div
          className="dark-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
  <motion.div className="title-container">
    <SmokeEffect />
    <motion.h2 className="main-title">
      {"AURORIX: CHAPTER 1".split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: index * 0.15,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
    <motion.p
  className="tagline"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ 
    delay: 3.50, 
    duration: 1.50 
  }}
>
  Invento Patronum - Unleash the wizard within in this mystical coding challenge.
</motion.p>

  </motion.div>
  </>
)}

    </div>
  );
};

export default InitialView;
