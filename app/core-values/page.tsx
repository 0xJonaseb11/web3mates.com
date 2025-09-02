"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CoreValues = () => {
  const values = [
    {
      title: "Empowerment Through Education",
      description:
        "We believe in equipping African developers with practical Web3 skills through hands-on learning and real-world projects.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
        </svg>
      ),
      color: "bg-[#0066FF]/10",
    },
    {
      title: "Community First",
      description:
        "Our strength comes from collaborative learning, shared knowledge, and supporting each member's growth journey.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      color: "bg-[#FFD700]/10",
    },
    {
      title: "Innovation Without Borders",
      description:
        "We break down geographical and technological barriers to foster groundbreaking Web3 solutions for Africa.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#00C781]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: "bg-[#00C781]/10",
    },
    {
      title: "Integrity in Blockchain",
      description:
        "We uphold transparency, accountability, and ethical standards in all our Web3 initiatives and teachings.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FF6B6B]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
        </svg>
      ),
      color: "bg-[#FF6B6B]/10",
    },
    {
      title: "Sustainable Growth",
      description:
        "We're committed to creating lasting impact through mentorship programs that continue beyond initial training.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#A162F7]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
      color: "bg-[#A162F7]/10",
    },
    {
      title: "African-Centric Solutions",
      description:
        "We focus on developing Web3 applications that solve real African challenges in finance, identity, and more.",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FF9F43]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: "bg-[#FF9F43]/10",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#0066FF]">Core Values</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          These principles guide everything we do at Web3 Mates to empower
          Africa&apos;s blockchain revolution
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className={`p-4 sm:p-6 lg:p-8 rounded-xl ${value.color} border border-transparent hover:border-[#0066FF]/30 transition-all`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className={`flex-shrink-0 p-3 rounded-lg ${value.color.replace('/10', '')} bg-opacity-20 flex items-center justify-center`}>
                {value.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#0B1C39] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                  {value.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 sm:mt-16 lg:mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0B1C39] mb-4">
          Ready to join our values-driven community?
        </h3>
        <Link
          href="/mentorship"
          className="inline-block bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base"
        >
          Start Your Web3 Journey
        </Link>
      </motion.div>

      <motion.div
        className="mt-12 sm:mt-16 lg:mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src="/team-values.png"
          alt="Team values illustration"
          width={600}
          height={400}
          className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl h-auto"
        />
      </motion.div>
    </div>
  );
};

export default CoreValues;
