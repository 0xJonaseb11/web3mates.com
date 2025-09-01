"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter } from 'react-icons/fa6';

const team = [
  {
    image: "/joab.jpeg",
    name: "Joab Niwagaba",
    role: "Founder & Visionary Leader",
    description:
      "Mr. Joab drives the company's mission and strategic growth, inspiring innovation and fostering a culture of excellence across all teams.",
    socials: {
      twitter: "https://x.com/niwagaba_joab?s=21",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/joab-niwagaba-0905161b3",
      telegram: "https://t.me/JoabP",
    },
  },
  {
    image: "/jabo.jpeg",
    name: "Jabo Prosper",
    role: "Community Manager / Operations Lead",
    description:
      "Mr. Jabo ensures operational efficiency and seamless execution of projects, optimizing workflows to empower teams and maximize impact.",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/jabo-pro",
      telegram: "#",
    },
  },
  {
    image: "/jonas.jpg",
    name: "Jonas Sebera",
    role: "Senior Technical Support Engineer",
    description:
      "Mr. Jonas leads the technical support efforts and drives blockchain development initiatives, ensuring robust, scalable solutions and expert troubleshooting.",
    socials: {
      twitter: "https://x.com/0xJonaseb11",
      instagram: "https://instagram.com/sebe_j_az99",
      linkedin: "https://linkedin.com/in/jonassebera",
      telegram: "https://t.me/OxJonaseb11",
      github: "https://github.com/0xJonaseb11",
    },
  },
  {
    image: "/laurent.jpeg",
    name: "Nyumbayire Laurent",
    role: "Developer Relations Specialist",
    description:
      "Mr. Laurent builds and nurtures the developer community by providing technical guidance, resources, and fostering collaboration across ecosystems.",
    socials: {
      twitter: "https://x.com/Lau_lanez",
      instagram: "https://www.instagram.com/laulan_6/",
      linkedin: "https://www.linkedin.com/in/nyumbayire-laurent-b11251299/",
      telegram: "https://t.me/laulanez",
      github: "https://github.com/Nylaurent",
    },
  },
];

const socialIcons = {
  twitter: <FaXTwitter className="w-5 h-5" />,
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
    </svg>
  ),
  telegram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.72 1.28 3.38.98.1-.76.4-1.28.73-1.57-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.01 11.01 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.26 5.7.41.35.78 1.03.78 2.08v3.09c0 .31.21.67.8.56A10.996 10.996 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
    </svg>
  )
};

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Our strength comes from the passion and expertise of our core team members who drive innovation and deliver value every day.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full sm:w-48 h-64 sm:h-auto relative rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={384}
                  height={512}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 192px, 384px"
                />
              </div>
              <div className="flex-1 p-6 sm:p-4 lg:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1C39] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#0066FF] mb-3 sm:mb-4 font-medium">{member.role}</p>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {member.description}
                </p>
                <div className="flex justify-center sm:justify-start gap-3">
                  {Object.entries(member.socials).map(([platform, url]) => (
                    url && url !== "#" && (
                      <Link
                        key={platform}
                        href={url}
                        className="text-gray-500 hover:text-[#0066FF] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        {socialIcons[platform as keyof typeof socialIcons]}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;