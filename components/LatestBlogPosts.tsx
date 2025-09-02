"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "rwanda-web3-hackathon-2025",
    image: "/e1.svg",
    date: "20–22 Jan 2025",
    title: "Rwanda Web3 Hackathon 2025",
    description:
      "Soon, we’ll gather builders and mentors for a 48-hour sprint to tackle local challenges through blockchain innovation.",
  },
  {
    id: "web3-in-academia-summit-1",
    image: "/e2.svg",
    date: "2 September 2025",
    title: "Web3 in Academia Summit",
    description:
      "We’re preparing conversations with students and educators on how decentralized tech can reshape research and campus systems.",
  },
  {
    id: "collaborate-world-tour-nairobi",
    image: "/e4.svg",
    date: "18–10 March 2025",
    title: "Collaborate World Tour: Nairobi Edition",
    description:
      "Coming soon: a local activation where we’ll connect with partners, creators, and new community members on-ground.",
  },
  {
    id: "future-women-in-web3-feature",
    image: "/e6.svg",
    date: "Coming Soon",
    title: "Women in Web3: Stories That Inspire",
    description:
      "We’re working on features that spotlight female builders across Africa and their journeys into Web3.",
  },
  {
    id: "blog-ecosystem-launch",
    image: "/e3.svg",
    date: "Coming Soon",
    title: "Building Our Content Ecosystem",
    description:
      "Our blog will soon launch with interviews, deep dives, and technical content curated by our early team and community.",
  },
  {
    id: "events-and-insights-teaser",
    image: "/e5.svg",
    date: "August 2025",
    title: "Insights from Events & Community",
    description:
      "We’ll be publishing event recaps and community takeaways as we activate across East Africa and beyond.",
  },
];

const LatestBlogPosts = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Upcoming Stories & Spotlights
          </h2>
          <p className="text-gray-600 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            We're in the early days of documenting our journey — this space will
            soon host reflections, event updates, and technical insights from
            our team and community collaborators.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-32 sm:h-40 lg:h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-[#0066FF] text-xs sm:text-sm mb-2">
                  {post.date}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {post.description}
                </p>
                <Link
                  href="/events/blog"
                  className="text-[#0066FF] font-medium hover:text-blue-700 inline-flex items-center text-xs sm:text-sm"
                >
                  View All Posts
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
