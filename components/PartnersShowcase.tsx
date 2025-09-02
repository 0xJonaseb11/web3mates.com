"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PartnersShowcase = () => {
  const partners = [
    { src: "/genesys.png", alt: "Genesys Logo", width: 120 },
    { src: "/AyaHQ-blue.png", alt: "AyaHQ Logo", width: 120 },
    { src: "/web3bridge.png", alt: "Web3Bridge Logo", width: 120 },
    { src: "/logo-color.svg", alt: "BuidlGuidl Logo", width: 100 },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0066FF]/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Strategic Partnerships
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            Our <span className="text-[#0066FF]">Trusted Partners</span> Network
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Building the future of Web3 together with industry leaders and innovative platforms across the globe
          </p>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
          
          <motion.div 
            className="flex gap-12 sm:gap-16"
            animate={{
              x: [-1000, 0],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop" as const,
                  duration: 25,
                  ease: "linear"
                }
              }
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0"
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width + 20}
                  height={30}
                  className="object-contain opacity-90 hover:opacity-100 transition-all duration-300 drop-shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>


        <motion.div
          className="mt-12 text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            Our <span className="text-[#0066FF]">Sponsors</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            We appreciate the support of organizations that believe in our mission
          </p>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white rounded-xl p-8 sm:p-12 text-center shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              No Sponsors Yet
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We&apos;re currently focused on building our community and partnerships. 
              Sponsorship opportunities will be available as we grow.
            </p>
          </div>
        </motion.div>


        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-4">
            Ready to Join Our Network?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Partner with Web3 Mates and be part of Africa&apos;s Web3 revolution. 
            Together, we&apos;re building the future of decentralized innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <motion.a
              href="/partnership"
              className="inline-block bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium text-base sm:text-lg text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.a>
            <motion.a
              href="/sponsorship"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-300 font-medium text-base sm:text-lg text-center"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Become a Sponsor
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersShowcase; 