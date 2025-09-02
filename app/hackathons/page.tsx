"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HackathonsPage = () => {
  const upcomingHackathons = [
    {
      id: 1,
      title: "Kigali Web3 Hackathon 2025",
      description:
        "Join Rwanda's premier Web3 development competition in partnership with University of Rwanda. Build decentralized solutions for Africa's challenges.",
      date: "December 15-17, 2025",
      location: "University of Rwanda, Kigali Campus",
      themes: ["DeFi for Africa", "Digital Identity", "Climate Tech"],
      prize: "$1,000 in prizes",
      partners: [
        "University of Rwanda",
        "Rwanda ICT Chamber",
        "Africa Blockchain Institute",
      ],
      status: "Registration Opening soon",
      image: "/past.jpeg",
      registrationLink: "#register",
      deadline: "November 30, 2025",
    },
    {
      id: 2,
      title: "East Africa Blockchain Challenge 2026",
      description:
        "Regional hackathon bringing together developers from across East Africa to build interoperable blockchain solutions.",
      date: "March 2026 (TBD)",
      location: "University of Rwanda, Nyarugenge Campus",
      themes: ["Cross-border Payments", "Supply Chain", "Healthcare"],
      prize: "TBD",
      partners: ["University of Rwanda", "EAC Secretariat"],
      status: "Registration Coming Soon",
      image: "/ai_ethic.jpeg",
      registrationLink: "#",
      deadline: "TBD",
    },
  ];

  const pastHackathons = [
    {
      id: 3,
      title: "Rwanda Digital Innovation Hackathon 2024",
      description:
        "Pilot event that laid the foundation for our Web3 hackathon series in Rwanda.",
      date: "August 2024",
      location: "Kigali Innovation City",
      themes: ["Financial Inclusion", "E-Government"],
      winners: [
        "Team Umuganda (Digital ID solution)",
        "Team Irembo (Land registry prototype)",
      ],
      image: "/roundtables.jpeg",
      recapLink: "#",
    },
  ];

  const hackathonBenefits = [
    {
      title: "Build Real Solutions",
      description: "Work on meaningful projects that address Africa's unique challenges",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    },
    {
      title: "Learn from Experts",
      description: "Access workshops and mentorship from industry leaders",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
        </svg>
      )
    },
    {
      title: "Win Prizes",
      description: "Compete for cash prizes, grants, and incubation opportunities",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Grow Your Network",
      description: "Connect with developers, entrepreneurs, and potential employers",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      title: "Career Opportunities",
      description: "Get noticed by top tech companies and investors in the region",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      )
    },
    {
      title: "University Credits",
      description: "Participating students may earn academic credits (varies by institution)",
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Web3 <span className="text-blue-700">Hackathons</span> in Rwanda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg"
        >
          Join our upcoming hackathon series in partnership with University of
          Rwanda to build the future of Web3 in Africa
        </motion.p>
      </div>

      {/* Upcoming Hackathons */}
      <section className="mb-16 sm:mb-20">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Upcoming Hackathons
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {upcomingHackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 sm:h-48 w-full bg-gray-100">
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  fill
                  className="object-cover"
                />
                <div className="text-slate-500 absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                  {hackathon.status}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {hackathon.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {hackathon.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Date
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">{hackathon.date}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Location
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">{hackathon.location}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Prize Pool
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">{hackathon.prize}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Registration Deadline
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base">{hackathon.deadline}</p>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                    Themes/Tracks
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {hackathon.themes.map((theme) => (
                      <span
                        key={theme}
                        className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                    Partners
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2 items-center">
                    {hackathon.partners.map((partner) => (
                      <span
                        key={partner}
                        className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    disabled
                    className="bg-blue-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-center text-sm sm:text-base cursor-not-allowed opacity-60 hover:opacity-80 relative group"
                    title="Registration coming soon"
                  >
                    <span className="relative z-10">Register Now</span>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Registration coming soon
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </button>
                  <Link
                    href={`/hackathons/${hackathon.id}`}
                    className="bg-white border border-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-50 font-medium transition-colors text-center text-sm sm:text-base"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Participate?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hackathonBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-colors"
            >
              <div className="mb-3 sm:mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {pastHackathons.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Past Hackathons
          </motion.h2>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 text-center">
            <svg
              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-900">
              No past hackathons
            </h3>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              We haven&apos;t hosted any hackathons yet. Stay tuned for our upcoming events!
            </p>
          </div>
        </section>
      )}

      <motion.section
        className="bg-blue-600 rounded-xl p-6 sm:p-8 lg:p-12 text-center mb-12 sm:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
          Ready to Hack the Future?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
          Whether you&apos;re a developer, designer, or entrepreneur,
          there&apos;s a place for you at our hackathons.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            disabled
            className="bg-white/80 text-blue-400 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all text-sm sm:text-base cursor-not-allowed opacity-60 hover:opacity-80 relative group"
            title="Registration coming soon"
          >
            <span className="relative z-10">Register Now</span>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Registration coming soon
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </button>
          <Link
            href="/contact"
            className="bg-transparent border border-white text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all text-sm sm:text-base"
          >
            Partner With Us
          </Link>
        </div>
      </motion.section>

      <section>
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3 sm:space-y-4">
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Who can participate in the hackathons?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our hackathons are open to university students, professional
              developers, and anyone interested in Web3 technology. Teams can be
              2-5 people. If you don&apos;t have a team, we&apos;ll help you
              find one during the event!
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Do I need blockchain experience to join?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Not at all! We welcome beginners and will provide workshops and
              mentorship throughout the event. About 30% of participants in our
              previous hackathon were new to blockchain.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              What should I bring to the hackathon?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Bring your laptop, charger, and any other devices you need to
              code. We&apos;ll provide food, drinks, and workspace. For
              overnight hackathons, you may want to bring a change of clothes
              and toiletries.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              How does the University of Rwanda partnership work?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We&apos;re collaborating with UR&apos;s Computer Science and
              Engineering departments to co-organize these events. Students may
              earn academic credits, and faculty will serve as mentors and
              judges.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HackathonsPage;
