import { FaScroll, FaFlask, FaDoorOpen, FaCookie, FaUtensils, FaMoon, FaCoffee, FaGamepad, FaCrow, FaGhost, FaBell, FaTrophy, FaHatWizard, FaBroom } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  { day: 1, time: "1:30 PM", title: "Registration", description: "Registration and Kit Distribution", icon: <FaScroll /> },
  { day: 1, time: "3:00 PM", title: "Workshops", description: "Sponsor and Partner Workshops", icon: <FaFlask /> },
  { day: 1, time: "5:00 PM", title: "Opening", description: "Opening Ceremony", icon: <FaDoorOpen /> },
  { day: 1, time: "6:15 PM", title: "Snacks", description: "Evening Snacks", icon: <FaCookie /> },
  { day: 1, time: "6:30 PM", title: "Kickoff", description: "Hackathon Kickoff", icon: <FaFlask /> },
  { day: 1, time: "9:00 PM", title: "Dinner", description: "Dinner Break", icon: <FaUtensils /> },
  { day: 1, time: "11:59 PM", title: "Midnight", description: "Midnight Snacks and Games", icon: <FaMoon /> },
  { day: 2, time: "8:00 AM", title: "Breakfast", description: "Morning Breakfast", icon: <FaCoffee /> },
  { day: 2, time: "1:00 PM", title: "Lunch", description: "Lunch Break", icon: <FaUtensils /> },
  { day: 2, time: "5:00 PM", title: "Gaming", description: "Gaming Session", icon: <FaGamepad /> },
  { day: 2, time: "9:00 PM", title: "Dinner", description: "Dinner Break", icon: <FaGhost /> },
  { day: 3, time: "6:30 AM", title: "End", description: "Hackathon Ends", icon: <FaBell /> },
  { day: 3, time: "9:00 AM", title: "Judging", description: "Project Judging", icon: <FaTrophy /> },
  { day: 3, time: "11:30 AM", title: "Closing", description: "Closing Ceremony", icon: <FaHatWizard /> }
];

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });
  
    const broomX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const broomY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "30%", "0%"]);
  
    return (
      <motion.section
        ref={containerRef}
        className="min-h-screen relative py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(99,38,166,1) 0%, rgba(28,7,48,1) 50%, rgba(0,0,0,1) 100%)'
        }}
      >
        {/* Winding Track */}
        <svg className="absolute w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <motion.path
            d="M0,250 C250,100 350,400 500,250 C650,100 750,400 1000,250"
            fill="none"
            stroke="rgba(139,92,246,0.3)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
  
        {/* Flying Broom */}
        <motion.div
          className="absolute z-50"
          style={{
            x: broomX,
            y: broomY
          }}
        >
          <FaBroom className="text-4xl text-violet-400 transform -rotate-45" />
        </motion.div>
  
        {/* Timeline Events */}
        <div className="relative max-w-7xl mx-auto">
          {timelineData.map((event, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${(index / (timelineData.length - 1)) * 100}%`,
                top: `${Math.sin((index / timelineData.length) * Math.PI * 2) * 100 + 250}px`
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <motion.div
                  className="w-12 h-12 bg-violet-500/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer border border-violet-500/50"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(139,92,246,0.4)" }}
                >
                  <div className="text-violet-400 text-xl">{event.icon}</div>
                </motion.div>
  
                <motion.div
                  className="absolute hidden group-hover:block w-72 p-6 bg-black/80 backdrop-blur-md
                           border border-violet-500/30 rounded-lg shadow-xl"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: index % 2 === 0 ? '120%' : 'auto',
                    bottom: index % 2 === 0 ? 'auto' : '120%'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-violet-400 text-sm font-almendra">Day {event.day}</span>
                    <span className="text-violet-300 font-almendra">{event.time}</span>
                  </div>
                  <h4 className="text-xl text-violet-400 font-almendra mb-2">{event.title}</h4>
                  <p className="text-smoke/90 font-almendra">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };
  
  export default Timeline;