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
    linkedin: "https://linkedin.com/in/nytrixis",
    twitter: "https://x.com/nytrixis"
  },
  {
    name: "Meraj Hussain",
    role: "Co-Lead Organizer",
    image: or2,
    linkedin: "https://linkedin.com/in/meraj00",
    twitter: "https://x.com/gh0st__FREAK"
  },
  {
    name: "Priyanshu Debnath",
    role: "Treasurer",
    image: or3,
    linkedin: "https://linkedin.com/in/PriyanshuDebnath0071",
    twitter: "https://x.com/PriyanshuD41557"
  }
];

const digitalSpellcasters = [
  {
    name: "Pragati Priya",
    role: "Techno Wizard",
    image: tt1,
    linkedin: "https://www.linkedin.com/in/pragati-priya-3a5aaa283/",
    twitter: "https://x.com/pragati100pr"
  },
  {
    name: "Shubhranil Kundu",
    role: "Hex Handler",
    image: tt2,
    linkedin: "https://www.linkedin.com/in/shubhranil-kundu-31baaa293/",
    twitter: "https://x.com/Shubhranil894?t=wKfWeACXeMd2o_1pO04RKw&s=09"
  },
  {
    name: "Priyanshu Singh",
    role: "Charm Programmer",
    image: tt3,
    linkedin: "https://www.linkedin.com/in/priyanshu-singh-45572b304?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BylhFT4e5RROBFS9Ho%2BIgbQ%3D%3D",
    twitter: "https://x.com/Priyans14250036?t=JFE69XuAdlvUvix3vQ7EFQ&s=09"
  },
  {
    name: "Anisha Kundu",
    role: "Code Charmer",
    image: tt4,
    linkedin: "https://www.linkedin.com/in/anisha-kundu-91a85a264",
    twitter: "https://x.com/KunduAnish21799"
  },
  {
    name: "Sudipta Banerjee",
    role: "Enchantix Dev",
    image: tt5,
    linkedin: "https://www.linkedin.com/in/sudiptabanerjee03",
    twitter: "https://x.com/Sudipta223?t=OhxgbRf5VX34ZxD-HPvurw&s=09"
  }
];

const pixelAlchemists = [
  {
    name: "Saptarshi Maji",
    role: "GraphiX Enchanter",
    image: dt3,
    linkedin: "https://www.linkedin.com/in/saptarshi-maji-b3536627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/SaptarshiMaji13?t=FH0qmx_cNtFMWsv9jzJrCQ&s=09"
  },
  {
    name: "Nidhi Kumari Hari",
    role: "Visionbinder",
    image: dt2,
    linkedin: "https://www.linkedin.com/in/nidhi-hari-111672298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/NidhiHari05"
  },
  {
    name: "Simran Kumari",
    role: "Illusioneer",
    image: dt1,
    linkedin: "https://www.linkedin.com/in/simran-m93?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/SimranKuma64244"
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
    role: "Trend Enchanter",
    image: pr2,
    linkedin: "https://www.linkedin.com/in/yashashvi-dubey-92a3862a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/YashashviDube14"
  },
  {
    name: "Sourav Sandilya",
    role: "Community Manager",
    image: pr3,
    linkedin: "https://www.linkedin.com/in/sourav-sandilya-76191222a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com/social3"
  },
  {
    name: "Sayon Ghosh",
    role: "Content Creator",
    image: pr4,
    linkedin: "https://www.linkedin.com/in/sayon-ghosh-643029298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/sayonghosh619?t=s4vVf7wP8sUatt0DJmyqUA&s=09"
  },
  {
    name: "Devesh Jha",
    role: "Engagement Wizard",
    image: pr5,
    linkedin: "https://www.linkedin.com/in/devesh-jha-a23527320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com/social5"
  }
];

const talentSummoners = [
  {
    name: "Kumar Hrishav",
    role: "Mystery Sorter",
    image: cs1,
    linkedin: "https://www.linkedin.com/in/kumar-hrishav-407b8a24a/",
    twitter: "https://x.com/ImKhrishavv?t=g1D413Q64wUr7eJf3FgN_Q&s=09 "
  },
  {
    name: "Ritik Maity",
    role: "Talent Scout",
    image: cs2,
    linkedin: "https://www.linkedin.com/in/ritik-maity-a935a2269",
    twitter: "https://twitter.com/hr2"
  },
  {
    name: "Tanmoy Sural",
    role: "Team Builder",
    image: cs3,
    linkedin: "https://www.linkedin.com/in/tanmoy-sural-b9289a30a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
    linkedin: "https://www.linkedin.com/in/koustav-chatterjee-b67ba9250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/buck_moon_13"
  },
  {
    name: "Astha Shankar",
    role: "Event Coordinator",
    image: v3,
    linkedin: "https://www.linkedin.com/in/astha-shankar-7598a52aa",
    twitter: "https://x.com/astha78189"
  },
  {
    name: "Shelly Bhattacharjee",
    role: "Event Coordinator",
    image: v4,
    linkedin: "https://www.linkedin.com/in/shelly-bhattacharjee-ba3360264",
    twitter: "https://x.com/_S_h_e_l_l_y_10?t=WowkimCvVDPF-bW57Qzp7A&s=08"
  },
  {
    name: "Jhil Chatterjee",
    role: "Event Coordinator",
    image: v5,
    linkedin: "https://www.linkedin.com/in/jhil-chatterjee-08122004d/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/jhil_chatterjee"
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
    linkedin: "https://www.linkedin.com/in/isha-jaiswal-ab4449317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/IshaJai2804"
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
      className="relative group w-full max-w-sm"
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
        <div className="relative h-32 flex items-center justify-center mb-4">
          <motion.h2
            className="text-[90px] font-bold text-white/5 absolute pointer-events-none whitespace-nowrap"
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            MEET THE
          </motion.h2>

          <motion.h3
            className="text-3xl font-almendra text-violet-400 text-center relative z-10"
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
          className="text-2xl text-center text-violet-300/80 font-almendra mb-10"
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
