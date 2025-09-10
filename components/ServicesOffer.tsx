"use client";

import Image from "next/image";
import { 
  FaStethoscope, 
  FaHandshake, 
  FaCoins, 
  FaMicrophone 
} from 'react-icons/fa';

const offerings = [
  {
    icon: <FaStethoscope className="w-6 h-6 text-[#0066FF]" />,
    title: "Web3 Startup Clinics",
    description:
      "1-on-1 advisory sessions for early-stage founders on smart contracts, legal setup, and growth strategy.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-[#0066FF]" />,
    title: "Funding Matchmaking",
    description:
      "We connect promising Web3 ideas with regional grant programs, impact investors, and accelerators.",
  },
  {
    icon: <FaCoins className="w-6 h-6 text-[#0066FF]" />,
    title: "Tokenomics Design Support",
    description:
      "Practical help structuring your token economy for real utility, community alignment, and long-term health.",
  },
  {
    icon: <FaMicrophone className="w-6 h-6 text-[#0066FF]" />,
    title: "Pitch Readiness & Demo Prep",
    description:
      "Support with storytelling, deck creation, and demo-day confidence—so you pitch like a pro.",
  },
];

const ServicesOffer = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-first lg:order-last">
            <Image
              src="/offer.svg"
              alt="Web3 Mates Web3 Offerings Illustration"
              width={600}
              height={600}
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0"
              priority
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
              What We Offer
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
              Built for African builders, our offerings are designed to meet you
              where you are—whether you&apos;re refining an idea or preparing to
              scale.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#EEF5FF] p-2 sm:p-3 rounded-lg flex-shrink-0">
                    {offering.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0B1C39] mb-1 sm:mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {offering.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
