import { motion } from 'framer-motion';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import or1 from '../team/or1.jpg';
import or2 from '../team/or2.jpg';
import or3 from '../team/or3.jpg';
import tt1 from '../team/tt1.jpg';
import tt2 from '../team/tt2.jpg';
import tt3 from '../team/tt3.jpg';
import tt4 from '../team/tt4.jpg';
import tt5 from '../team/tt5.jpg';
import dt1 from '../team/dt1.jpg';
import dt2 from '../team/dt2.jpg';
import dt3 from '../team/dt3.png';
import pr1 from '../team/pr1.jpg';
import pr2 from '../team/pr2.jpg';
import pr3 from '../team/pr3.jpg';
import pr4 from '../team/pr4.jpg';
import pr5 from '../team/pr5.jpg';
import cs1 from '../team/cs1.jpg';
import cs2 from '../team/cs2.jpg';
import cs3 from '../team/cs3.jpg';
import vm1 from '../team/vm1.jpg';
import vm2 from '../team/vm2.jpg';
import v1 from '../team/v1.jpg';
import v2 from '../team/v2.jpg';
import v3 from '../team/v3.jpg';
import v4 from '../team/v4.jpg';
import v5 from '../team/v5.jpg';
import v6 from '../team/v6.jpg';
import v7 from '../team/v7.jpg';
import v8 from '../team/v8.jpg';
import v9 from '../team/v9.jpg';
import v10 from '../team/v10.jpg';


const architectWizards = [
  {
    name: "Nandini Pandey",
    role: "Lead Organizer",
    image:  or1,
    linkedin: "https://linkedin.com/in/username1",
    x: "https://twitter.com/username1"
  },
  {
    name: "Meraj Hussain",
    role: "Co-Lead Organizer",
    image: or2,
    linkedin: "https://linkedin.com/in/username2",
    x: "https://twitter.com/username1"
  },
  {
    name: "Priyanshu Debnath",
    role: "Treasurer",
    image: or3,
    linkedin: "https://linkedin.com/in/username3",
    x: "https://twitter.com/username1"
  }
];

const digitalSpellcasters = [
  {
    name: "Pragati Priya",
    role: "Techno Wizard",
    image: tt1,
    linkedin: "https://linkedin.com/in/dev1"
  },
  {
    name: "Shubhranil Kundu",
    role: "Hex Handler",
    image: tt2,
    linkedin: "https://linkedin.com/in/dev2"
  },
  {
    name: "Priyanshu Singh",
    role: "Charm Programmer",
    image: tt3,
    linkedin: "https://linkedin.com/in/dev3"
  },
  {
    name: "Anisha Kundu",
    role: "Code Charmer",
    image: tt4,
    linkedin: "https://linkedin.com/in/dev4",
    twitter: "https://twitter.com/dev4"
  },
  {
    name: "Sudipta Banerjee",
    role: "Enchantix Dev",
    image: tt5,
    linkedin: "https://linkedin.com/in/dev4",
    twitter: "https://twitter.com/dev4"
  }
];

const pixelAlchemists = [
  {
    name: "Saptarshi Maji",
    role: "UI/UX Lead",
    image: dt3,
    linkedin: "https://linkedin.com/in/design1",
    twitter: "https://twitter.com/design1"
  },
  {
    name: "Nidhi Kumari Hari",
    role: "Visual Designer",
    image: dt2,
    linkedin: "https://linkedin.com/in/design2",
    twitter: "https://twitter.com/design2"
  },
  {
    name: "Simran Kumari",
    role: "Motion Designer",
    image: dt1,
    linkedin: "https://linkedin.com/in/design3",
    twitter: "https://twitter.com/design3"
  }
];

const socialSpellbinders = [
  {
    name: "Priya Rani",
    role: "Social Media Lead",
    image: pr1,
    linkedin: "https://linkedin.com/in/social1",
    twitter: "https://twitter.com/social1"
  },
  {
    name: "Yashashvi Dubey",
    role: "Content Creator",
    image: pr2,
    linkedin: "https://linkedin.com/in/social2",
    twitter: "https://twitter.com/social2"
  },
  {
    name: "Sourav Sandilya",
    role: "Community Manager",
    image: pr3,
    linkedin: "https://linkedin.com/in/social3",
    twitter: "https://twitter.com/social3"
  },
  {
    name: "Sayon Ghosh",
    role: "Social Strategist",
    image: pr4,
    linkedin: "https://linkedin.com/in/social4",
    twitter: "https://twitter.com/social4"
  },
  {
    name: "Devesh Jha",
    role: "Engagement Wizard",
    image: pr5,
    linkedin: "https://linkedin.com/in/social5",
    twitter: "https://twitter.com/social5"
  }
];

const talentSummoners = [
  {
    name: "Kumar Hrishav",
    role: "HR Lead",
    image: cs1,
    linkedin: "https://linkedin.com/in/hr1",
    twitter: "https://twitter.com/hr1"
  },
  {
    name: "Ritik Maity",
    role: "Talent Scout",
    image: cs2,
    linkedin: "https://linkedin.com/in/hr2",
    twitter: "https://twitter.com/hr2"
  },
  {
    name: "Tanmoy Sural",
    role: "Team Builder",
    image: cs3,
    linkedin: "https://linkedin.com/in/hr3",
    twitter: "https://twitter.com/hr3"
  }
];

const systemNavigators = [
  {
    name: "Aditya Pratap Singh",
    role: "System Lead",
    image: vm1,
    linkedin: "https://linkedin.com/in/sys1",
    twitter: "https://twitter.com/sys1"
  },
  {
    name: "Saikat Karmakar",
    role: "System Engineer",
    image: vm2,
    linkedin: "https://linkedin.com/in/sys2",
    twitter: "https://twitter.com/sys2"
  }
];



const hackathonElves = [
  {
    name: "Akash Ghosh",
    role: "Event Coordinator",
    image: v1,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Koustav Chatterjee",
    role: "Event Coordinator",
    image: v2,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Astha Shankar",
    role: "Event Coordinator",
    image: v3,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Shelly Bhattacharjee",
    role: v4,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Jhil Chatterjee",
    role: "Event Coordinator",
    image: v5,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Ratnadeep Paul",
    role: "Event Coordinator",
    image: v6,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Isha Jaiswal",
    role: "Event Coordinator",
    image: v7,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Aditya Kumar",
    role: "Event Coordinator",
    image: v8,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Ranit Mondal",
    role: "Event Coordinator",
    image: v9,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
  {
    name: "Ritaja Mukherjee",
    role: "Event Coordinator",
    image: v10,
    linkedin: "https://linkedin.com/in/vol1",
    twitter: "https://twitter.com/vol1"
  },
];


const TeamSection = ({ title, members }) => {
  return (
    <div className="mb-20">
      <motion.h3
        className="text-4xl font-almendra text-violet-400 mb-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
  {members.map((member, index) => (
    <motion.div
      key={member.name}
      className="relative group w-full max-w-sm" // Added max-width for better control
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-violet-900/50 to-black/50 p-6">
        <div className="aspect-square w-full mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h4 className="text-xl font-almendra text-violet-300 text-center">{member.name}</h4>
        <p className="text-sm text-violet-400/80 text-center">{member.role}</p>
        
        {/* Social Links */}
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-violet-400 hover:text-violet-300" />
          </a>
          <a href={member.twitter} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-3xl text-violet-400 hover:text-violet-300" />
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
};

const Team = () => {
  return (
    <section className="min-h-screen py-32 px-8 bg-gradient-to-b from-violet-900 via-purple-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="relative h-32 flex items-center justify-center mb-20">
          <motion.h2
            className="text-[120px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            MEET THE
          </motion.h2>

          <motion.h3
            className="text-4xl font-almendra text-violet-400 text-center relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            HACKSORCERY CREW
          </motion.h3>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-2xl text-center text-violet-300/80 font-almendra mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          From crafting tech spells to conjuring up designs, this core team ensures AURORIX is a legendary experience!
        </motion.p>

        {/* Team Sections */}
        <TeamSection title="The Architect Wizards" members={architectWizards} />
        <TeamSection title="Spell Coders" members={digitalSpellcasters} />
        <TeamSection title="Pixel Alchemists" members={pixelAlchemists} />
        <TeamSection title="Social Spellbinders" members={socialSpellbinders} />
        <TeamSection title="Talent Summoners" members={talentSummoners} />
        <TeamSection title="System Navigators" members={systemNavigators} />
        
        
        <TeamSection title="Hackathon Elves" members={hackathonElves} />
      </div>
    </section>
  );
};

export default Team;