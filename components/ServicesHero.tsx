"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

const ServicesHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6 leading-tight">
              Turning Web3 <span className="text-[#0066FF]">Ideas</span> into
              African Impact
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
              Whether you&apos;re just starting or scaling your vision, we offer
              guidance, training, and collaboration to help bring your
              blockchain solutions to life. The journey begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/join-community"
                className="bg-[#0066FF] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base text-center"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="text-[#0B1C39] px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                Contact Us <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="pt-3 rounded-2xl overflow-hidden">
              <Image
                src="/service.svg"
                alt="Team collaborating on Web3 services"
                width={600}
                height={300}
                className="w-full h-auto object-cover max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
