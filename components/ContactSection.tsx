"use client";

import { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [phoneNumber] = useState("+256 789 649671");

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
          <div>
            <p className="text-[#0066FF] mb-4">
              Empowering Africa, one connection at a time.
            </p>
            <h2 className="text-4xl font-bold text-[#0B1C39] mb-6">
              Let&apos;s Build the Future Together
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you&apos;re curious about our programs, want to partner with us, or just have a question—we&apos;re here to connect. Send us a message and we&apos;ll get back to you soon.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/mentorship"
                className="bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join Now
              </Link>
              <Link 
                href="/contact"
                className="text-[#0B1C39] px-6 py-3 rounded-lg border border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors flex items-center"
              >
                Contact Us <span className="ml-2 ">→</span>
              </Link>
            </div>
          </div>

  
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-[#0B1C39] mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-8">
              Have questions or ideas? Reach out and let&apos;s connect.
            </p>
            
            <form className="space-y-4 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full text-black px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0066FF]"
                />
                <input
                  type="text"
                  placeholder="Enter your surname"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0066FF]"
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-black rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#0066FF]"
              />
              <button
                type="submit"
                className="w-full bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Email
              </button>
            </form>

            <div className="mt-8">
              <p className="text-gray-600 mb-4">You can also reach us by a call</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg text-gray-600">
                  {phoneNumber}
                </div>
                <button
                  onClick={handleCopyNumber}
                  className="bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
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