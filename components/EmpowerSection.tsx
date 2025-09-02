"use client"; // Required for animations

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
    <div className="bg-[#0066FF] rounded-full p-2 sm:p-3 flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-[#0B1C39] text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">{description}</p>
      <Link
        href="/events/blog"
        className="text-[#0066FF] flex items-center mt-1 sm:mt-2 hover:underline text-xs sm:text-sm"
      >
        Learn more <span className="ml-1">→</span>
      </Link>
    </div>
  </div>
);

const EmpowerSection = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-3 sm:mb-4">
            Empowering the Builders of Africa&apos;s Web3 Future
          </h2>
          <p className="text-gray-600 max-w-2xl sm:max-w-3xl mx-auto text-xs sm:text-base lg:text-lg px-2">
            Discover how Web3 Mates is enabling innovation, education, and
            impact through real-world training, community support, and startup
            acceleration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  
          <motion.div 
            className="relative w-full aspect-square max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src="/empower.svg"
              alt="Web3 Innovation Globe"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <div>
            <Feature
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L14.5 9.5H19.5L15.5 13L17 18.5L12 15.5L7 18.5L8.5 13L4.5 9.5H9.5L12 4Z"
                    fill="white"
                  />
                </svg>
              }
              title="Learn Web3 by Doing"
              description="Engage in hands-on bootcamps, coding challenges, and real-world projects tailored to African innovators."
            />

            <Feature
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
                    fill="white"
                  />
                </svg>
              }
              title="Bring those ideas to life"
              description="Collaborate with mentors, devs, and entrepreneurs across the continent to bring your Web3 ideas to life."
            />

            <Feature
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"
                    fill="white"
                  />
                </svg>
              }
              title="Launch Real-World Solutions"
              description="Turn your ideas into startups and scale them with our support, funding links, and technical guidance."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowerSection;