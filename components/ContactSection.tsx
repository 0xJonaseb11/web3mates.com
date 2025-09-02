"use client";

import { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [phoneNumber] = useState("+256 789 649671");

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
  
          <div>
            <p className="text-[#0066FF] mb-3 sm:mb-4 text-sm sm:text-base">
              Empowering Africa, one connection at a time.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
              Let&apos;s Build the Future Together
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
              Whether you&apos;re curious about our programs, want to partner with us, or just have a question—we&apos;re here to connect. Send us a message and we&apos;ll get back to you soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="/mentorship"
                className="bg-[#0066FF] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm sm:text-base"
              >
                Join Now
              </Link>
              <Link 
                href="/contact"
                className="text-[#0B1C39] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                Contact Us <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

  
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1C39] mb-3 sm:mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Have questions or ideas? Reach out and let&apos;s connect.
            </p>
            
            <form className="space-y-4 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full text-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0066FF] text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Enter your surname"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0066FF] text-sm sm:text-base"
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-black rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0066FF] text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full bg-[#0066FF] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Send Email
              </button>
            </form>

            <div className="mt-6 sm:mt-8">
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">You can also reach us by a call</p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 rounded-lg text-gray-600 text-sm sm:text-base">
                  {phoneNumber}
                </div>
                <button
                  onClick={handleCopyNumber}
                  className="w-full sm:w-auto bg-[#0066FF] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap text-sm sm:text-base"
                >
                  Copy Number
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 