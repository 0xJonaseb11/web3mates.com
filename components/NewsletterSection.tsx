"use client";

import { useState } from "react";
import { useNewsletter } from "@/hooks/useNewsletter";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { subscribeToNewsletter, isLoading, message, error, clearMessages } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    const result = await subscribeToNewsletter(email);
    if (result.success) {
      setEmail(""); // Clear the form on success
    }
  };

  // Clear messages when email changes
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (message || error) {
      clearMessages();
    }
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto">
          <p className="text-[#0066FF] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
            Updates That Empower. Stories That Inspire.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-3 sm:mb-4">
            Stay Connected to Africa&apos;s Web3 Movement
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg px-2">
            Join our mailing list to get early access to training programs,
            hackathons, stories, and resources from the Web3 Mates community.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex text-black flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-lg mx-auto"
            aria-label="Newsletter subscription form"
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
              disabled={isLoading}
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent text-sm sm:text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#0066FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>

          {/* Success Message */}
          {message && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm max-w-md mx-auto">
              {message}
            </div>
          )}
          
          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm max-w-md mx-auto">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
