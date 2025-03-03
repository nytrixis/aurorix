import { motion } from 'framer-motion';
import StarBackground from './Stars';
import { FaDiscord } from 'react-icons/fa';

const Contactus = () => {
    return (

<motion.section
  id='contact'
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
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col items-center">
      <div className="relative h-32 flex items-center justify-center mb-20">
        <motion.h2
          className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          REACH OUT
        </motion.h2>

        <motion.h3
          className="text-4xl font-almendra text-violet-400 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          CONTACT US
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Email Card */}
        <motion.div
          className="bg-violet-900/20 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 className="text-xl font-almendra text-violet-300">Email Us</h4>
          <p className="text-violet-400/80 text-center">aurorixch1@gmail.com</p>
          <a href="mailto:aurorix@bcrec.ac.in" className="mt-4 px-6 py-2 bg-violet-500/20 hover:bg-violet-500/30 rounded-lg text-violet-300 transition-all duration-300">
            Send Email
          </a>
        </motion.div>

        {/* Discord Card */}
        <motion.div
          className="bg-violet-900/20 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center">
            <FaDiscord className="w-8 h-8 text-violet-400" />
          </div>
          <h4 className="text-xl font-almendra text-violet-300">Join Discord</h4>
          <p className="text-violet-400/80 text-center">Connect with our community</p>
          <a href="https://discord.gg/csqUaSg8" className="mt-4 px-6 py-2 bg-violet-500/20 hover:bg-violet-500/30 rounded-lg text-violet-300 transition-all duration-300">
            Join Server
          </a>
        </motion.div>

        {/* Social Media Card */}
        <motion.div
          className="bg-violet-900/20 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h4 className="text-xl font-almendra text-violet-300">Social Media</h4>
          <p className="text-violet-400/80 text-center">Follow us for updates</p>
          <div className="flex gap-4 mt-4">
          <a href="https://x.com/AurorixChapter1" className="p-3 bg-violet-500/20 hover:bg-violet-500/30 rounded-lg text-violet-300 transition-all duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
            <a href="https://www.instagram.com/aurorix_ch1/" className="p-3 bg-violet-500/20 hover:bg-violet-500/30 rounded-lg text-violet-300 transition-all duration-300">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
</a>

            <a href="https://www.linkedin.com/in/aurorix-ch1-b2897a33b" className="p-3 bg-violet-500/20 hover:bg-violet-500/30 rounded-lg text-violet-300 transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</motion.section>
    );
};

export default Contactus;
