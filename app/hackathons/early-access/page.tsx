"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree submission for early access
    console.log("Early access submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >
          <Link
            href="/hackathons/eth-rwanda-hackathon-2025"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Hackathon
          </Link>

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-sm font-semibold">🚀 GET EARLY ACCESS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Be the First to Know
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get exclusive early access to registration, special workshops, and
            priority mentorship matching for the ETH Rwanda Hackathon 2025.
          </p>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
            >
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/your-early-access-form-id"
                method="POST"
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2 text-left"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300 text-lg"
                >
                  📧 Get Early Access Updates
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for signing up for early access. We'll send you
                  exclusive updates about the  ETH Rwanda Hackathon 2025.
                </p>
                <Link
                  href="/hackathons"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Other Hackathons
                </Link>
              </div>
            </motion.div>
          )}

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🎯</span>
              </div>
              <h4 className="font-semibold text-white mb-2">
                Priority Registration
              </h4>
              <p className="text-blue-100 text-sm">
                Be the first to register when spots open
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">💼</span>
              </div>
              <h4 className="font-semibold text-white mb-2">
                Exclusive Workshops
              </h4>
              <p className="text-blue-100 text-sm">
                Access pre-hackathon training sessions
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🤝</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Mentor Matching</h4>
              <p className="text-blue-100 text-sm">
                Get matched with expert mentors early
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
