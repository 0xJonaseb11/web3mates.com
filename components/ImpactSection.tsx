import React from "react";

const ImpactMetric = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 sm:p-8 rounded-lg text-center shadow-lg">
    <div className="text-[#0066FF] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
      {number}
    </div>
    <h3 className="text-[#9747FF] text-base sm:text-lg font-semibold mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const ImpactSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            The Impact We are Building for Africa&apos;s Web3 Future
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As a growing hub, Web3 Mates is setting out to empower Africa’s next
            generation of Web3 builders. These are the goals we’re working
            toward through community, collaboration, and code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <ImpactMetric
            number="10K+"
            title="Developers to Empower"
            description="We aim to train thousands in blockchain, smart contracts, and dApp development."
          />
          <ImpactMetric
            number="150"
            title="Jobs to Facilitate"
            description="Our mission includes creating pathways to meaningful Web3 employment opportunities."
          />
          <ImpactMetric
            number="100+"
            title="Startups to Support"
            description="We’re building programs to incubate and mentor founders building on decentralized tech."
          />
          <ImpactMetric
            number="200K+"
            title="Community to Grow"
            description="Our vision is to unite learners, developers, and builders across Africa and beyond."
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
