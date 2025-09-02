"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

const allProjects = [
  {
    id: 1,
    title: "StoneProof Labs",
    description:
      "A decentralized marketplace for African artisans to sell digital and physical goods with crypto payments",
    longDescription:
      "StoneProof Labs is transforming the mining industry by building a decentralized platform focused on trust, transparency, and traceability. Using blockchain technology, we enable end-to-end mineral tracking, role-based access control, and NFT-based tokenization of mineral assets. Our platform ensures data integrity, reduces fraud, and empowers every actor in the supply chain — bridging the gap between traditional mining operations and the future of secure, verifiable mineral trade.",
    tags: ["E-commerce", "NFT", "DeFi"],
    status: "Live",
    logo: "/stone_logo.svg",
    website: "https://stoneproof-eth.vercel.app/",
    whitepaper: "https://stoneproof-eth.vercel.app/#whitepaper",
    team: [
      { name: "Jonas Sebera", role: "Founder & CEO" },
      { name: "Jonas S.", role: "Blockchain Developer" },
      { name: "Ashraf Tuyubahe", role: "Backend Developer" },
      { name: "Aimable Kwizera", role: "Frontend Developer" },
      { name: "Laurent N.", role: "UI / UX Developer" },
    ],
    tech: ["Solidity", "Next.js", "IPFS", "Base", "WalletConnect"],
    milestones: [
      { date: "Q1 2024", achievement: "Prototype development completed" },
      { date: "Q2 2025", achievement: "Seed funding secured ($5k)" },
      { date: "Q3 2025", achievement: "Beta launch with 20+ merchants" },
    ],
    gallery: [
      "/stone_logo.svg",
      "/stoneproof_land.jpeg",
      "/stoneproof_dash.jpeg",
    ],
  },
  {
    id: 2,
    title: "MedRecordChain",
    description:
      "We are building a trusted and transparent medical record system that empowers the medical industry and secures its future",
    longDescription:
      "MedRecordChain is revolutionizing healthcare data management by creating a secure, decentralized platform for medical records. Our blockchain-based solution ensures patient data privacy, enables secure sharing between healthcare providers, and eliminates data silos. With role-based access control and immutable audit trails, we're building the future of healthcare where patient data is both secure and accessible when needed.",
    tags: ["Medical services", "social good", "DeFi"],
    status: "Live",
    logo: "/medrecordchain.jpeg",
    website: "https://medrecordchain.vercel.app/",
    whitepaper: "#",
    team: [
      { name: "Byiringiro Olivier", role: "Founder & CEO" },
      { name: "Byiringiro O.", role: "Blockchain Developer" },
      { name: "Gilbert M.", role: "UX Designer" },
      { name: "Musabe Kelvin Shebelle", role: "Frontend Developer" },
    ],
    tech: ["Solidity", "Next.js", "IPFS"],
    milestones: [
      { date: "Q1 2024", achievement: "Concept development and team formation" },
      { date: "Q2 2024", achievement: "Prototype development completed" },
      { date: "Q3 2024", achievement: "Beta testing with healthcare partners" },
    ],
    gallery: [
      "/medrecordchain.jpeg",
      "/med1.png",
      "/med2.png",
    ],
  },
  {
    id: 4,
    title: "YallaDeFi",
    description:
      "Arabic-language DeFi education platform with gamified learning",
    longDescription:
      "YallaDeFi is breaking down barriers to DeFi education in the Arabic-speaking world. Our gamified learning platform makes complex DeFi concepts accessible through interactive tutorials, simulations, and real-world projects. By providing education in native languages and cultural contexts, we're empowering the next generation of Arabic-speaking DeFi users and builders.",
    tags: ["Education", "DeFi", "Gamification"],
    status: "Prototype",
    logo: "https://avatars.dicebear.com/api/identicon/yalladefi.svg",
    website: "#",
    whitepaper: "#",
    team: [
      { name: "Karim B.", role: "Founder" },
      { name: "Leila M.", role: "Content Lead" },
    ],
    tech: ["React", "Firebase", "Web3.js"],
    milestones: [
      { date: "Q1 2024", achievement: "Platform concept and curriculum design" },
      { date: "Q2 2024", achievement: "MVP development in progress" },
    ],
    gallery: [
      "https://avatars.dicebear.com/api/identicon/yalladefi.svg",
      "/img12.jpg",
      "/img13.jpg",
    ],
  },
  {
    id: 5,
    title: "SAFUFund",
    description: "Decentralized emergency fund for African creators",
    longDescription:
      "SAFUFund is creating a decentralized safety net for African creators and entrepreneurs. Through community-governed emergency funds, we provide financial support during crises while maintaining transparency and accountability. Our platform leverages DAO governance to ensure fair distribution of funds and community-driven decision making.",
    tags: ["Social Impact", "Crowdfunding", "DAOs"],
    status: "Ideation",
    logo: "https://avatars.dicebear.com/api/identicon/safufund.svg",
    website: "#",
    whitepaper: "#",
    team: [
      { name: "Wanjiru K.", role: "Community Lead" },
      { name: "Olumide B.", role: "Developer" },
    ],
    tech: ["Solidity", "Hardhat", "React"],
    milestones: [
      { date: "Q1 2024", achievement: "Community research and needs assessment" },
      { date: "Q2 2024", achievement: "Smart contract architecture design" },
    ],
    gallery: [
      "https://avatars.dicebear.com/api/identicon/safufund.svg",
      "/img14.jpg",
      "/img1.jpg",
    ],
  },
];

const ProjectProfilePage = () => {
  const params = useParams();
  const projectId = Number(params.id);
  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="mt-4 text-2xl font-bold text-gray-900 mb-4">
          Project Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The project you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 mb-12"
      >
        <div className="w-full md:w-1/3">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md">
            <Image
              src={project.logo}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex items-start justify-between mb-4">
            <div>
              <motion.h1
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Live"
                      ? "bg-green-100 text-green-800"
                      : project.status === "Beta"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          <motion.p
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.longDescription}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Visit Website
              </a>
            )}
            {project.whitepaper && (
              <a
                href={project.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Read Whitepaper
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Team</h2>
          <div className="space-y-6">
            {project.team.map((member, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-medium">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Milestones</h2>
          <div className="space-y-4">
            {project.milestones.map((milestone, i) => (
              <div key={i} className="border-l-2 border-blue-500 pl-4 py-1">
                <p className="text-sm font-medium text-gray-500">
                  {milestone.date}
                </p>
                <p className="text-gray-700">{milestone.achievement}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((image, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-blue-600 rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Interested in this project?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-6">
          Contact the team to collaborate, invest, or learn more about their
          work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all"
          >
            Contact Team
          </Link>
          <Link
            href="/projects"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all"
          >
            Explore More Projects
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectProfilePage;
