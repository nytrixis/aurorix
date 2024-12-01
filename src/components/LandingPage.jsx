import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/bg1.jpg';
import { FaDiscord } from 'react-icons/fa';
import heading from '../assets/heading.png';
import Timeline from './Timeline';
import Awards from './Awards';
import StarBackground from './Stars';
// import { SiDevPost } from 'react-icons/si';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
    <div 
    id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Hero Background */}
      <div className="absolute inset-0 w-full h-full">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
      </div>

      {/* Content Container */}
      <motion.div 
      
        className="relative z-10 flex flex-col items-center justify-center gap-6 translate-y-[170px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
  className="relative w-[600px]"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 0.5 }}
>
  <img 
    src={heading} 
    alt="Aurorix Heading" 
    className="w-full h-auto"
  />
</motion.div>

        <motion.h2
          className="text-2xl font-almendra text-[#C0C0C0] mb-1"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Invento Patronum - Unleash the wizard within in this mystical coding challenge.
        </motion.h2>

        <motion.div
  className="text-xl font-almendra text-[#9CA3AF] mb-4 flex items-center gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 1.2 }}
>
  <span>Offline Mode</span>
  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
  <span>21-23rd March, 2025</span>
  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
  <span>Durgapur, West Bengal</span>
</motion.div>

        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* Devfolio Button */}
          <motion.button
    className="group relative flex items-center gap-2 px-8 py-4 text-white rounded-lg font-almendra text-xl border-2 border-violet-500 overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="absolute right-full w-full h-full bg-violet-500 group-hover:right-0 transition-all duration-300 ease-in-out" />
    <span className="relative flex items-center gap-2 z-10">
      
      Register with Devfolio
    </span>
  </motion.button>

          {/* Discord Button */}
          <motion.button
    className="group relative flex items-center gap-2 px-8 py-4 text-white rounded-lg font-almendra text-xl bg-[#5865F2] overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="absolute left-full w-full h-full border-2 border-[#5865F2] bg-transparent group-hover:left-0 transition-all duration-300 ease-in-out" />
    <span className="relative flex items-center gap-2 z-10">
      <FaDiscord className="text-2xl" />
      Join Discord
    </span>
  </motion.button>
        </motion.div>
      </motion.div>
      
    </div>
    
    <motion.section 
  className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(28,7,48,1) 50%, rgba(99,38,166,1) 100%)'
  }}
>
  <StarBackground />
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="relative h-32 flex items-center justify-center mb-10">
        <motion.h2
          className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
          // style={{
          //   left: '0',
          //   transform: 'translateY(-50%)'
          // }}
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          LEGACY
        </motion.h2>

        <motion.h3
          className="text-4xl font-almendra text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          MISSION & VISION
        </motion.h3>
      </div>


      {/* Paragraph Content */}
      <motion.p
        className="text-lg font-almendra text-smoke/90 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        Our legacy isn't defined by accolades but by the meaningful change we strive to create. As the first-of-its-kind wizardry hackathon, we aim to foster innovation and creativity among college students, encouraging them to turn ideas into reality through passion and determination. Every project here is a testament to the grit, ingenuity, and hard work of its creators, and we are committed to ensuring that these efforts are recognized, celebrated, and rewarded. Together, we're building a future driven by purpose, where magic meets technology, and where dreams stand the test of time.
      </motion.p>
    </div>
  </div>
</motion.section>


<motion.section
id="schedule"
  className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{
    background: 'linear-gradient(180deg, rgba(99,38,166,1) 0%, rgba(28,7,48,1) 50%, rgba(0,0,0,1) 100%)'
  }}
>
<StarBackground />
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="relative h-32 flex items-center justify-center mb-20">
        <motion.h2
          className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          SCHEDULE
        </motion.h2>

        <motion.h3
          className="text-4xl font-almendra text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          FLOW OF EVENTS
        </motion.h3>
      </div>
      <motion.h3
          className="text-7xl font-harryp text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          TO BE DECLARED
        </motion.h3>
    </div>
    
  </div>
</motion.section>

<motion.section
id="venue"
  className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(28,7,48,1) 50%, rgba(99,38,166,1) 100%)'
  }}
>
<StarBackground />
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="relative h-32 flex items-center justify-center mb-20">
        <motion.h2
          className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          LOCATION
        </motion.h2>

        <motion.h3
          className="text-4xl font-almendra text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          THE GRAND VENUE
        </motion.h3>
      </div>

      {/* Map Container */}
      <motion.div 
        className="w-[800px] aspect-video mb-8 border-2 border-violet-500 rounded-lg overflow-hidden z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4529.365736473014!2d87.34017848627838!3d23.545010105835303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7702b5678153d%3A0x4ff5ac811ba3184b!2sDr.%20B.%20C.%20Roy%20Engineering%20College!5e1!3m2!1sen!2sin!4v1732985182563!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      {/* Address */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-almendra text-xl text-violet-300">
          Dr. B.C. Roy Engineering College, 
          Fuljhore, Durgapur, 
          West Bengal.
        </p>
      </motion.div>

      {/* Map Button */}
      <motion.a
  href="https://www.google.com/maps/place/Dr.+B.+C.+Roy+Engineering+College/@23.5450101,87.3401785,1040m/data=!3m1!1e3!4m6!3m5!1s0x39f7702b5678153d:0x4ff5ac811ba3184b!8m2!3d23.544417!4d87.3416929!16s%2Fm%2F03cszzz?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex px-8 py-3 bg-transparent border-2 border-violet-500 rounded-lg font-almendra text-violet-400 hover:bg-violet-500 hover:text-white transition-all duration-300 z-10"
  initial={false}
  animate={{ scale: 1 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  View in Google Maps
</motion.a>



    </div>
  </div>
</motion.section>


<Awards />

<motion.section
id="tracks"
  className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(28,7,48,1) 50%, rgba(99,38,166,1) 100%)'
  }}
>
<StarBackground />
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="relative h-32 flex items-center justify-center mb-20">
        <motion.h2
          className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          EXPLORE THE
        </motion.h2>

        <motion.h3
          className="text-4xl font-almendra text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          TRACKS
        </motion.h3>
      </div>
      <motion.h3
          className="text-7xl font-harryp text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          TO BE DECLARED
        </motion.h3>
    </div>
    
  </div>
</motion.section>

<motion.section
id='sponsors'
  className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  style={{
    background: 'linear-gradient(180deg, rgba(99,38,166,1) 0%, rgba(28,7,48,1) 50%, rgba(0,0,0,1) 100%)'
  }}
>
<StarBackground />
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="relative h-32 flex items-center justify-center mb-20">
        <motion.h2
          className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          MEET OUR
        </motion.h2>

        <motion.h3
          className="text-4xl font-almendra text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          SPONSORS
        </motion.h3>
      </div>
      <motion.h3
          className="text-7xl font-harryp text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          TO BE DECLARED
        </motion.h3>
    </div>
    
  </div>
</motion.section>

</div>


    
  );
};

export default LandingPage;
