import { motion } from 'framer-motion';
import { FaDiscord, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-violet-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="font-harryp text-4xl text-violet-400">AURORIX: CHAPTER 1</h2>
            <p className="font-almendra text-gray-300">
              Invento Patronum: Unleash the wizard within in this mystical coding challenge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-almendra text-2xl text-violet-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Schedule', 'Prizes', 'Tracks', 'Sponsors', 'Team'].map((link) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  className="font-almendra text-gray-300 hover:text-violet-400 cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-almendra text-2xl text-violet-400">Connect</h3>
            <div className="flex gap-4">
              {[FaDiscord, FaInstagram, FaLinkedin, FaXTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="text-2xl text-gray-300 hover:text-violet-400"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <p className="font-almendra text-gray-300">
              Email: contact@aurorix.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-almendra text-sm text-gray-400">
          <p>© 2024 Aurorix. All rights reserved.</p>
          <div className="flex gap-8">
            <motion.span whileHover={{ color: '#A78BFA' }} className="cursor-pointer">
              Privacy Policy
            </motion.span>
            <motion.span whileHover={{ color: '#A78BFA' }} className="cursor-pointer">
              Terms of Service
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
