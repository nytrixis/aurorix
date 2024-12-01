import { motion, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import harryBroom from '../assets/snitch.png';

const FlyingHarry = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX - 50);
      y.set(e.clientY - 50);
      
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setSparkles(prev => [...prev, newSparkle].slice(-15));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            background: 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,223,186,0) 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <motion.img
        src={harryBroom}
        alt=""
        className="w-[100px] h-auto absolute"
        style={{ x, y }}
      />
    </div>
  );
};

export default FlyingHarry;
