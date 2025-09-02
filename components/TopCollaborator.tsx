"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TopCollaborator = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Featured Partner
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            Our <span className="text-[#0066FF]">Top Collaborator</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            Meet Genesys - the premier Web3 education platform that's revolutionizing how developers learn and build in the blockchain space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8 px-4 sm:px-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl font-bold">G</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B1C39]">Genesys</h3>
                <p className="text-gray-600 text-sm sm:text-base">One-Stop Web3 Education Platform</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1C39] mb-1 text-sm sm:text-base">Comprehensive Web3 Training</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">From blockchain fundamentals to advanced DeFi protocols, Genesys provides complete education pathways for Web3 builders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1C39] mb-1 text-sm sm:text-base">Hands-On Learning Experience</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Interactive tutorials, real-world projects, and mentorship programs that accelerate skill development.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1C39] mb-1 text-sm sm:text-base">Community-Driven Growth</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Building a global network of Web3 developers through collaborative learning and shared resources.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="https://www.genesysapp.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066FF] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center text-sm sm:text-base"
              >
                Visit Genesys
              </Link>
              <Link
                href="#contact"
                className="border border-[#0066FF] text-[#0066FF] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#0066FF] hover:text-white transition-colors font-medium text-center text-sm sm:text-base"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative px-4 sm:px-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-blue-600">
                <h4 className="text-white font-semibold text-center text-sm sm:text-base">
                  Experience Genesys Platform
                </h4>
              </div>
              <div className="relative h-80 sm:h-96 md:h-[500px]">
                <div className="w-full h-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-purple-900 flex items-center justify-center">
                    <div className="text-center p-4 sm:p-8 max-w-sm">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <span className="text-white text-2xl sm:text-3xl font-bold">G</span>
                      </div>
                      
                      <h5 className="text-xl sm:text-2xl font-bold text-white mb-2">Genesys</h5>
                      <p className="text-purple-200 text-xs sm:text-sm mb-3 sm:mb-4">The Time is Now</p>
                      
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 text-purple-200 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                          <span>7 Active Mentors</span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-200 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                          <span>20 Active Communities</span>
                        </div>
                      </div>
                      
                      <Link
                        href="https://www.genesysapp.xyz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 font-medium text-sm sm:text-base"
                      >
                        <span>Launch with Experts</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <div className="bg-purple-600/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1">
                      <span className="text-purple-200 text-xs">Platform Preview</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 border-t">
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  Explore the Genesys platform to see how we're revolutionizing Web3 education
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-200">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0066FF] mb-2">1000+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Developers Trained</div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-200">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0066FF] mb-2">20+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Countries Reached</div>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm border border-gray-200">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0066FF] mb-2">95%</div>
            <div className="text-gray-600 text-xs sm:text-sm">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCollaborator;
