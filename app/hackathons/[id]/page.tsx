"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Mock data - in a real app, this would come from an API or database
const hackathons = [
  {
    id: "eth-rwanda-hackathon-2025",
    title: "ETH Rwanda Hackathon 2025",
    description:
      "Join Africa's brightest minds in a groundbreaking 48-hour blockchain innovation sprint. Build decentralized solutions that tackle real challenges across the continent.",
    date: "December 2024 - January 2025",
    location: "Multiple Locations Across Africa + Virtual",
    prizePool: "$50,000+ in prizes & grants",
    registrationDeadline: "November 30, 2024",
    themes: [
      "DeFi for Africa",
      "Digital Identity",
      "Climate Tech",
      "Cross-border Payments",
      "Supply Chain",
    ],
    partners: [
      "University of Rwanda",
      "Multiple African Universities",
      "Leading Web3 Protocols",
      "VC Partners",
    ],
    image: "/e1.svg",
    longDescription:
      "The ETH Rwanda Hackathon 2025 is our flagship event designed to catalyze blockchain innovation across the continent. Over 48 intensive hours, participants will collaborate, learn, and build decentralized applications that address real-world challenges in finance, identity, supply chain, and more. This hybrid event features physical hubs in major African cities combined with virtual participation, ensuring broad accessibility while maintaining the energy of in-person collaboration. With over $50,000 in prizes, mentorship from industry leaders, and potential incubation opportunities, this is your chance to make a lasting impact on Africa's digital future.",
    schedule: [
      {
        day: "Phase 1: Registration",
        activities: [
          "Early Bird Registration",
          "Team Formation Support",
          "Pre-hackathon Workshops",
          "Technical Onboarding",
        ],
      },
      {
        day: "Phase 2: Hackathon Kickoff",
        activities: [
          "Opening Ceremony",
          "Challenge Announcements",
          "Mentor Matching",
          "Development Sprint Begins",
        ],
      },
      {
        day: "Phase 3: Building",
        activities: [
          "48-Hour Development",
          "Expert Mentor Sessions",
          "Technical Workshops",
          "Progress Check-ins",
        ],
      },
      {
        day: "Phase 4: Finale",
        activities: [
          "Project Submissions",
          "Demo Presentations",
          "Judging Panel",
          "Awards Ceremony",
        ],
      },
    ],
    prizes: [
      { place: "Grand Prize", prize: "$20,000 + Incubation Program" },
      { place: "2nd Place", prize: "$10,000 + Mentorship" },
      { place: "3rd Place", prize: "$5,000 + Workshop Access" },
      { place: "Best DeFi Solution", prize: "$3,000" },
      { place: "Best Social Impact", prize: "$3,000" },
      { place: "Audience Choice", prize: "$2,000" },
    ],
    status: "🚀 Registration Open Soon",
    participants: "500+ Expected",
    mentors: "100+ Industry Experts",
    duration: "48-Hour Sprint",
    format: "Hybrid (Physical Hubs + Virtual)",
    eligibility: "Open to all African developers and students worldwide",
    teamSize: "2-5 members",
    registrationLink: "/hackathons/register",
  },
  {
    id: "kigali-web3-2025",
    title: "Kigali Web3 Hackathon 2025",
    description:
      "Join Rwanda's premier Web3 development competition in partnership with University of Rwanda. Build decentralized solutions for Africa's challenges.",
    date: "December 15-17, 2025",
    location: "University of Rwanda, Kigali Campus",
    prizePool: "$1,000 in prizes",
    registrationDeadline: "November 30, 2025",
    themes: ["DeFi for Africa", "Digital Identity", "Climate Tech"],
    partners: [
      "University of Rwanda",
      "Rwanda ICT Chamber",
      "Africa Blockchain Institute",
    ],
    image: "/img17.jpeg",
    longDescription:
      "The Kigali Web3 Hackathon 2025 is a three-day intensive event that brings together developers, designers, and entrepreneurs from across Africa to build innovative blockchain solutions. This hackathon focuses on addressing real-world challenges facing the African continent through decentralized technology.",
    schedule: [
      {
        day: "Day 1",
        activities: [
          "Opening Ceremony",
          "Team Formation",
          "Workshop Sessions",
          "Coding Begins",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Continued Development",
          "Mentor Sessions",
          "Progress Check-ins",
          "Networking",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Final Development",
          "Presentations",
          "Judging",
          "Awards Ceremony",
        ],
      },
    ],
    prizes: [
      { place: "1st Place", prize: "$500 + Incubation Opportunity" },
      { place: "2nd Place", prize: "$300 + Mentorship Program" },
      { place: "3rd Place", prize: "$200 + Workshop Access" },
    ],
    status: "Registration Opening Soon",
    registrationLink: "#register",
  },
  {
    id: "east-africa-blockchain-2026",
    title: "East Africa Blockchain Challenge 2026",
    description:
      "Regional hackathon bringing together developers from across East Africa to build interoperable blockchain solutions.",
    date: "March 2026 (TBD)",
    location: "University of Rwanda, Nyarugenge Campus",
    prizePool: "TBD",
    registrationDeadline: "TBD",
    themes: ["Cross-border Payments", "Supply Chain", "Healthcare"],
    partners: ["University of Rwanda", "EAC Secretariat"],
    image: "/img18.jpeg",
    longDescription:
      "The East Africa Blockchain Challenge 2026 is a regional initiative that promotes cross-border collaboration and innovation in blockchain technology. This hackathon brings together talent from across East Africa to solve regional challenges through decentralized solutions.",
    schedule: [
      {
        day: "Day 1",
        activities: [
          "Regional Opening",
          "Cross-border Team Formation",
          "Technical Workshops",
          "Development Start",
        ],
      },
      {
        day: "Day 2",
        activities: [
          "Collaborative Development",
          "Regional Mentor Sessions",
          "Progress Reviews",
          "Cultural Exchange",
        ],
      },
      {
        day: "Day 3",
        activities: [
          "Final Development",
          "Regional Presentations",
          "Judging",
          "Awards & Networking",
        ],
      },
    ],
    prizes: [
      { place: "Regional Winner", prize: "TBD + Regional Recognition" },
      { place: "Innovation Award", prize: "TBD + Regional Partnership" },
      { place: "Community Choice", prize: "TBD + Community Support" },
    ],
    status: "Registration Coming Soon",
    registrationLink: "#",
  },
];

export default function HackathonDetail({
  params,
}: {
  params: { id: string };
}) {
  const hackathon = hackathons.find((h) => h.id === params.id);

  if (!hackathon) {
    notFound();
  }

  const isAfricaHackathon = hackathon.id === "eth-rwanda-hackathon-2025";
  const isRegistrationOpen = isAfricaHackathon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`relative py-8 sm:py-12 lg:py-16 ${
          isAfricaHackathon
            ? "bg-gradient-to-br from-blue-600 to-purple-700"
            : "bg-gradient-to-br from-blue-600 to-blue-800"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/hackathons"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
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
              Back to Hackathons
            </Link>

            {/* Featured Badge for Africa Hackathon */}
            {isAfricaHackathon && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                <span className="text-sm font-semibold">
                  🔥 FEATURED HACKATHON
                </span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {hackathon.title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
              {hackathon.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                📅 {hackathon.date}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                📍 {hackathon.location}
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                🏆 {hackathon.prizePool}
              </div>
              {isAfricaHackathon && (
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  ⏱️ {hackathon.duration}
                </div>
              )}
            </div>

            {/* Additional Stats for Africa Hackathon */}
            {isAfricaHackathon && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">500+</div>
                  <div className="text-blue-100 text-sm">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">100+</div>
                  <div className="text-blue-100 text-sm">Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">10+</div>
                  <div className="text-blue-100 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">
                    $50K+
                  </div>
                  <div className="text-blue-100 text-sm">Prizes</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={hackathon.image}
                alt={hackathon.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                About This Hackathon
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {hackathon.longDescription}
              </p>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Event Schedule
              </h2>
              <div className="space-y-4">
                {hackathon.schedule.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {day.day}
                    </h3>
                    <ul className="space-y-1">
                      {day.activities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="text-gray-600 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prizes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Prizes & Rewards
              </h2>
              <div
                className={`grid gap-4 ${
                  hackathon.prizes.length > 3
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-3"
                }`}
              >
                {hackathon.prizes.map((prize, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                  >
                    <div className="text-2xl mb-2">
                      {index === 0
                        ? "🥇"
                        : index === 1
                          ? "🥈"
                          : index === 2
                            ? "🥉"
                            : "⭐"}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {prize.place}
                    </h3>
                    <p className="text-gray-600 text-sm">{prize.prize}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">
                      Registration Deadline
                    </div>
                    <div className="text-sm">
                      {hackathon.registrationDeadline}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm">{hackathon.location}</div>
                  </div>
                </div>
                {isAfricaHackathon && (
                  <>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Duration</div>
                        <div className="text-sm">{hackathon.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <div className="text-sm font-medium">Team Size</div>
                        <div className="text-sm">{hackathon.teamSize}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Themes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Themes & Tracks
              </h3>
              <div className="flex flex-wrap gap-2">
                {hackathon.themes.map((theme, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Partners */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partners & Sponsors
              </h3>
              <div className="space-y-2">
                {hackathon.partners.map((partner, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 text-white text-center ${
                isAfricaHackathon
                  ? "bg-gradient-to-br from-blue-600 to-purple-700"
                  : "bg-gradient-to-br from-blue-600 to-blue-700"
              }`}
            >
              <h3 className="text-xl font-bold mb-3">
                {isAfricaHackathon
                  ? "Ready to Build Africa's Future?"
                  : "Ready to Build?"}
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                {isAfricaHackathon
                  ? "Join hundreds of developers shaping Web3 across Africa!"
                  : "Join us for an incredible learning and building experience!"}
              </p>
              {isRegistrationOpen ? (
                <Link
                  href={hackathon.registrationLink}
                  className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 block text-center"
                >
                  🚀 Register Now
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium transition-all cursor-not-allowed opacity-60"
                  title="Registration coming soon"
                >
                  Registration Coming Soon
                </button>
              )}
              {isAfricaHackathon && (
                <Link
                  href="/hackathons/early-access"
                  className="w-full bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 block text-center mt-3"
                >
                  📧 Get Early Access Updates
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
