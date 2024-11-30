import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const scrollLinks = ['Schedule', 'Venue', 'Prizes', 'Tracks', 'Sponsors', 'Contact Us'];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <motion.nav
      initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
      animate={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-mystic/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center"
          >
            <div className="flex items-center space-x-12">
              {scrollLinks.map((link) => (
                <motion.div
                  key={link}
                  variants={linkVariants}
                >
                  <ScrollLink
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="font-almendra text-lg text-smoke hover:text-violet-700 transition-all duration-300 relative group cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 8px rgb(93,63,211)",
                      color: "#5D3FD3"
                    }}
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.div variants={linkVariants}>
                <RouterLink
                  to="/team"
                  className="font-almendra text-lg text-smoke hover:text-violet-700 transition-all duration-300 relative group cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 8px rgb(93,63,211)",
                    color: "#5D3FD3"
                  }}
                >
                  Team
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
                </RouterLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
