'use client';

import { FaDiscord, FaTelegram, FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useState } from 'react';
import { useNewsletter } from '../../hooks/useNewsletter';

const CommunityPage = () => {
  const [email, setEmail] = useState('');
  const { subscribeToNewsletter, isLoading, message, error } = useNewsletter();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    const result = await subscribeToNewsletter(email);
    if (result.success) {
      setEmail(''); // Clear the form on success
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-[#eef2f6]">
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1C39] mb-6">
            Join Our <span className='text-blue-700'>Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded individuals, collaborate on projects, and stay updated with our latest developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-[#5865F2] rounded-full mb-6 mx-auto">
                <FaDiscord className="text-white text-2xl" />
              </div>
              <h3 className="text-xl text-blue-800 font-bold text-center mb-4">Discord</h3>
              <p className="text-gray-600 text-center mb-6">
                Join our active Discord community for real-time discussions, support, and networking.
              </p>
              <a
                href="https://discord.gg/qzECSsvuxu"
                className="block w-full py-3 px-6 text-center bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-[#26A5E4] rounded-full mb-6 mx-auto">
                <FaTelegram className="text-white text-2xl" />
              </div>
              <h3 className="text-xl text-blue-800 font-bold text-center mb-4">Telegram</h3>
              <p className="text-gray-600 text-center mb-6">
                Get instant updates and announcements through our Telegram channel.
              </p>
              <a
                href="https://t.me/+Gc9JJOqazxgxZmQ0"
                className="block w-full py-3 px-6 text-center bg-[#26A5E4] hover:bg-[#1D95D1] text-white font-medium rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Telegram
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-6 mx-auto">
                <FaXTwitter className="text-white text-2xl" />
              </div>
              <h3 className="text-xl text-blue-800 font-bold text-center mb-4">X (Twitter)</h3>
              <p className="text-gray-600 text-center mb-6">
                Follow us on X for news, updates, and engaging content.
              </p>
              <a
                href="https://x.com/Web3Mates"
                className="block w-full py-3 px-6 text-center bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Us
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-[#181717] rounded-full mb-6 mx-auto">
                <FaGithub className="text-white text-2xl" />
              </div>
              <h3 className="text-xl text-blue-800 font-bold text-center mb-4">GitHub</h3>
              <p className="text-gray-600 text-center mb-6">
                Contribute to our open-source projects and collaborate with developers.
              </p>
              <a
                href="https://github.com/Web3Mates"
                className="block w-full py-3 px-6 text-center bg-[#181717] hover:bg-[#000000] text-white font-medium rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-[#0A66C2] rounded-full mb-6 mx-auto">
                <FaLinkedin className="text-white text-2xl" />
              </div>
              <h3 className="text-xl text-blue-800 font-bold text-center mb-4">LinkedIn</h3>
              <p className="text-gray-600 text-center mb-6">
                Connect with us professionally and stay updated on career opportunities.
              </p>
              <a
                href="https://www.linkedin.com/company/web3mates"
                className="block w-full py-3 px-6 text-center bg-[#0A66C2] hover:bg-[#0957AA] text-white font-medium rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-[#0066FF] rounded-full mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl text-blue-800 font-bold text-center mb-4">Newsletter</h3>
              <p className="text-gray-600 text-center mb-6">
                Subscribe to our newsletter for monthly updates and insights.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4 text-black">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                  required
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 bg-[#0066FF] hover:bg-[#0055DD] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
                
                {message && (
                  <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                    {message}
                  </div>
                )}
                
                {error && (
                  <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B1C39] mb-4">
              Community Guidelines
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              To ensure a positive experience for everyone, please follow our community guidelines.
            </p>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 shadow-xl hover:shadow-2xl rounded-lg">
              <h3 className="text-xl text-blue-800  font-semibold mb-3">Be Respectful</h3>
              <p className="text-gray-600">
                Treat all community members with respect and kindness. No harassment or discrimination will be tolerated.
              </p>
            </div>
            <div className="bg-gray-50 p-6 border-2 shadow-xl hover:shadow-2xl rounded-lg">
              <h3 className="text-xl text-blue-800 font-semibold mb-3">Stay On Topic</h3>
              <p className="text-gray-600">
                Keep discussions relevant to the channel&apos;s purpose. Off-topic conversations may be redirected.
              </p>
            </div>
            <div className="bg-gray-50 p-6 shadow-xl hover:shadow-2xl rounded-lg">
              <h3 className="text-blue-800 text-xl font-semibold mb-3">No Spam</h3>
              <p className="text-gray-600">
                Avoid excessive self-promotion or repeated posting of the same content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;