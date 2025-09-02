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

          {/* Contact Information Card */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1C39] mb-3">
                Ready to Connect?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Have questions, ideas, or want to collaborate? We&apos;d love to hear from you!
              </p>
            </div>
            
            {/* Primary CTA Button */}
            <Link 
              href="/contact"
              className="inline-block w-full bg-[#0066FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4"
            >
              Send Us a Message
            </Link>
            
            {/* Alternative Contact Methods */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-gray-500 text-xs sm:text-sm">Or reach us directly:</p>
              
              {/* Phone Number */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 rounded-lg text-gray-600 text-sm sm:text-base">
                  {phoneNumber}
                </div>
                <button
                  onClick={handleCopyNumber}
                  className="w-full sm:w-auto bg-gray-100 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap text-sm sm:text-base"
                >
                  Copy Number
                </button>
              </div>
              
              {/* Quick Links */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                <Link 
                  href="/join-community"
                  className="text-[#0066FF] hover:text-blue-700 text-sm transition-colors"
                >
                  Join Community →
                </Link>
                <Link 
                  href="/partnership"
                  className="text-[#0066FF] hover:text-blue-700 text-sm transition-colors"
                >
                  Partnership →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 