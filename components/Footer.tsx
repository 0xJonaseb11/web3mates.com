"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaTelegram, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white py-12 sm:py-16 lg:py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Image
                src="/logo.svg"
                alt="Web3 Mates Logo"
                width={35}
                height={35}
                className="sm:w-20 sm:h-20"
              />
              <div>
                <div className="font-semibold text-[#0B1C39] text-sm sm:text-base">
                  Web3 Mates
                </div>
                <div className="text-xs sm:text-sm text-[#0066FF]">
                  Blockchain Catalyst
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              Empowering Africa&apos;s Web3 Builders—One Line of Code at a Time.
            </p>
            <div className="flex gap-4 sm:gap-6 pt-2 sm:pt-4">
              <a href="https://www.linkedin.com/company/web3mates" className="hover:opacity-80 transition-opacity">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A66C2]" />
              </a>
              <a href="https://x.com/Web3Mates" className="hover:opacity-80 transition-opacity">
                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </a>
              <a
                href="https://instagram.com/sebe_j_az99"
                className="hover:opacity-80 transition-opacity"
              >
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#1DA1F2]" />
              </a>
              <a href="https://t.me/+Gc9JJOqazxgxZmQ0" className="hover:opacity-80 transition-opacity">
                <FaTelegram className="w-5 h-5 sm:w-6 sm:h-6 text-[#26A5E4]" />
              </a>
            </div>
          </div>


          <div className="col-span-1">
            <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/mentorship"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Mentorship
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>


          <div className="col-span-1">
            <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
              About us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/core-values"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Core Values
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Testimonies
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/join-community"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>


          <div className="col-span-1">
            <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
              Collaborations
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/channels"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Channels
                </Link>
              </li>
              <li>
                <Link
                  href="/groups"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Groups
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Workshops
                </Link>
              </li>
            </ul>
          </div>


          <div className="col-span-1">
            <h3 className="font-semibold text-[#0B1C39] mb-3 sm:mb-4 text-sm sm:text-base">
              Events and News
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/hackathons"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Hackathons
                </Link>
              </li>
              <li>
                <Link
                  href="/announcements"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Announcements
                </Link>
              </li>
              <li>
                <Link
                  href="/callups"
                  className="text-gray-600 hover:text-[#0066FF]"
                >
                  Callups
                </Link>
              </li>
            </ul>
          </div>
        </div>


        <div className="flex justify-center mt-12 sm:mt-16 border-t pt-4 sm:pt-5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#EEF5FF] p-3 sm:p-4 rounded-full hover:bg-[#0066FF] hover:text-white transition-colors text-blue-300"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>


        <div className="text-center mt-6 sm:mt-8 text-gray-600">
          <p className="text-sm sm:text-base">
            © 2025 Web3 Mates - Blockchain Catalyst. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
