import { motion } from 'framer-motion';
import trophy1 from '../assets/trophy1.png';
import trophy2 from '../assets/trophy2.png';
import trophy3 from '../assets/trophy3.png';
import StarBackground from './Stars';

const Awards = () => {
  return (
    <motion.section 
    id='prizes'
      className="min-h-screen relative py-32 px-8"
      style={{
        background: 'linear-gradient(180deg, rgb(99,38,166) 0%, rgb(88, 28, 135) 50%, rgb(0,0,0) 100%)'
      }}
    >
        <StarBackground />
      {/* Title */}
      <div className="max-w-5xl mx-auto">
  <div className="flex flex-col items-center">
    <div className="relative h-32 flex items-center justify-center mb-10">
      <motion.h2
        className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
        initial={{ opacity: 0, scale: 1.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        AWARDS
      </motion.h2>

      <motion.h3
        className="text-4xl font-almendra text-violet-400 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        Mystical Treasures Await
      </motion.h3>
    </div>
  </div>
</div>


      {/* Awards Container */}
      <div className="max-w-7xl mx-auto flex justify-center items-end gap-4"> {/* Reduced gap from 20 */}
  {/* 1st Runner Up */}
  <motion.div
    className="text-center z-10"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.img
      src={trophy2}
      alt="1st Runner Up"
      className="w-[300px] h-[320px] object-contain mb-7 drop-shadow-[0_35px_35px_rgba(192,192,192,0.2)]" // Adjusted size
      whileHover={{ scale: 1.1 }}
    />
    <motion.h4 
      className="text-2xl font-almendra mb-2"
      style={{
        background: 'linear-gradient(45deg, #C0C0C0, #E8E8E8, #B8B8B8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      1st Runner Up
    </motion.h4>
    <motion.p 
  className="text-4xl font-harryp"
  style={{
    background: 'linear-gradient(45deg, #B8860B, #FFD700, #DAA520)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 10px rgba(218,165,32,0.3)'
  }}
>
  30,000 INR
</motion.p>
  </motion.div>

  {/* Champions */}
  <motion.div
    className="text-center z-20" // Added z-index to bring forward
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <motion.img
      src={trophy1}
      alt="Champions"
      className="w-[380px] h-[400px] object-contain mb-8 drop-shadow-[0_35px_35px_rgba(59,130,246,0.3)]" // Exact size specified
      whileHover={{ scale: 1.1 }}
    />
    <motion.h4 
      className="text-3xl font-almendra mb-2"
      style={{
        background: 'linear-gradient(45deg, #FFD700, #FFFFFF, #DAA520)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 10px rgba(255,215,0,0.3)'
      }}
    >
      Champions
    </motion.h4>
    <motion.p 
  className="text-5xl font-harryp"
  style={{
    background: 'linear-gradient(45deg, #B8860B, #FFD700, #DAA520)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 10px rgba(218,165,32,0.3)'
  }}
>
  50,000 INR
</motion.p>
  </motion.div>

  {/* 2nd Runner Up */}
  <motion.div
    className="text-center z-10"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <motion.img
      src={trophy3}
      alt="2nd Runner Up"
      className="w-[300px] h-[320px] object-contain mb-5 drop-shadow-[0_35px_35px_rgba(205,127,50,0.2)]" // Adjusted size
      whileHover={{ scale: 1.1 }}
    />
    <motion.h4 
      className="text-2xl font-almendra mb-2"
      style={{
        background: 'linear-gradient(45deg, #CD7F32, #FFA07A, #8B4513)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      2nd Runner Up
    </motion.h4>
    <motion.p 
  className="text-4xl font-harryp"
  style={{
    background: 'linear-gradient(45deg, #B8860B, #FFD700, #DAA520)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 10px rgba(218,165,32,0.3)'
  }}
>
  20,000 INR
</motion.p>
  </motion.div>
</div>

      {/* Mystery Award */}
      {/* Mystery Award */}

    </motion.section>
  );
};

export default Awards;
