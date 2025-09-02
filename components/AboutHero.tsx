"use client";

import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/upper.svg')] bg-no-repeat bg-top-right opacity-10"></div>
      <div className="absolute inset-0 bg-[url('/lower.svg')] bg-no-repeat bg-bottom-left opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 pt-24 sm:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left px-2 sm:px-0 relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-[#0066FF] rounded-full mr-2"></span>
              About Web3 Mates
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1C39] mb-4 sm:mb-6 leading-tight">
              Empowering Africa Through{" "}
              <span className="text-[#0066FF]">Web3 Innovation</span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
              We&apos;ve been told it is not possible to overachieve our
              customers&apos; expectations. We have not reinvented the wheel, we
              decided to build upon it and create something extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
              <Link
                href="/join-community"
                className="bg-[#0066FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base text-center font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Join Our Community
              </Link>
              <Link
                href="/contact"
                className="text-[#0B1C39] px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-300 flex items-center justify-center text-sm sm:text-base font-medium bg-white hover:bg-gray-50"
              >
                Contact Us <span className="ml-2">→</span>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0066FF]">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0066FF]">100+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0066FF]">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative order-first lg:order-last px-4 sm:px-0">
            <div className="w-full h-80 sm:h-96 lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Spinning Globe Container */}
              <div className="absolute inset-0 flex items-center justify-center group">
                <div className="w-full h-full flex items-center justify-center animate-spin-slow group-hover:animate-spin transition-all duration-1000">
                  <Image
                    src="/africa-globe.webp"
                    alt="About Web3 Mates Blockchain"
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority
                  />
                </div>
              </div>
              
              {/* Enhanced Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end pointer-events-none">
                <div className="p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Empowering Africa</h3>
                  <p className="text-sm sm:text-base opacity-90 mb-4">Building the future of Web3 technology</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                    <span className="text-xs sm:text-sm opacity-75">Blockchain Catalyst</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-[#0066FF] rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-yellow-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
