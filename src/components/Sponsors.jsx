import { motion } from 'framer-motion';
import StarBackground from './Stars';
import devfolioLogo from '../assets/Devfolio.png';
import polygonLogo from '../assets/polygon.png';
import ethLogo from '../assets/ETHIndia.png';

const SponsorTier = ({ title, sponsors }) => {
    return (
      <motion.div className="w-full mb-16">
        <h3 className="text-4xl font-harryp text-violet-400 mb-6 text-center tracking-wider">{title}</h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {sponsors.length > 0 ? sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="flex flex-col items-center group h-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
            <div className="h-24 flex items-center">
            <img
                src={sponsor.logo}
                alt={sponsor.alt}
                className={`max-h-full w-auto object-contain hover:scale-105 transition-transform duration-300 mt-7
                    ${sponsor.name === "Polygon" ? "border-2 border-dashed border-white/80 rounded-[10px] scale-120" : ""}`}
            />            

              </div>
              <span className="font-harryp text-2xl text-violet-400/80 mt-12 text-center group-hover:text-violet-300 transition-colors duration-300">
                {sponsor.name}
              </span>
            </motion.div>
          )) : (
            <motion.div 
              className="text-4xl font-harryp text-violet-400/50 text-center py-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              To be announced
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };
  
  
  
  
  

const Sponsors = () => {
  const goldSponsors = [
    { name: "Devfolio", logo: devfolioLogo, alt: "DEVFOLIO LOGO" },
    { name: "Polygon", logo: polygonLogo, alt: "POLYGON LOGO" },
    { name: "Ethereum", logo: ethLogo, alt: "ETHINDIA LOGO" },
  ];

  return (
    <motion.section
      id="sponsors"
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
      <div className="max-w-7xl mx-auto px-4">
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

          {/* Sponsor Tiers */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SponsorTier
              title="PHILOSOPHER'S STONE"
              sponsors={[]}
              size="large"
            />
            
            <SponsorTier
              title="GOLDEN SNITCH"
              sponsors={goldSponsors}
              size="medium"
            />
            
            <SponsorTier
              title="ELDER WAND"
              sponsors={[]}
              size="small"
            />
            
            <SponsorTier
              title="NUMBUS 2000"
              sponsors={[]}
              size="tiny"
            />
          </motion.div>

          {/* Sponsor CTA */}
          <motion.div
            className="mt-7 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-almendra text-violet-300 mb-4">Interested in Sponsoring?</h4>
            <p className="text-violet-400/80 mb-6">Join us in making this magical hackathon a reality!</p>
            <a
              href="mailto:aurorixch1@gmail.com"
              className="inline-flex px-8 py-3 bg-violet-900/30 backdrop-blur-sm border border-violet-500/20 rounded-lg text-violet-300 font-almendra hover:bg-violet-500/30 transition-all duration-300"
            >
              Become a Sponsor →
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Sponsors;
