import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

const events = [
  {
    id: "featured",
    image: "/big.svg",
    title:
      "Empowering Young Developers Through University Collaboration in Rwanda",
    description:
      "We plan to launch a 10-week Web3 bootcamp in partnership with a leading Rwandan university, aiming to reach over 300 students with hands-on smart contract training and startup incubation.",
    date: "Coming Soon: Feb 2026",
  },
  {
    id: "event1",
    image: "/c1.svg",
    title: "Rwanda’s First Cross-Border Hackathon, Paving the Way for Africa",
    description:
      "We are preparing to host a Pan-African Hackathon starting in Rwanda, where developers from Rwanda, Nigeria, Kenya, and beyond will collaborate to build impactful Web3 applications.",
    date: "Planned: Dec 2025",
  },
  {
    id: "event2",
    image: "/c2.svg",
    title: "Blockchain for Agriculture Pilot Program in Rwanda",
    description:
      "Partnering with local Rwandan cooperatives, we aim to pilot a blockchain-based produce tracking system to improve transparency and efficiency for farmers and buyers.",
    date: "Upcoming: Jan 2026",
  },
  {
    id: "event3",
    image: "/c3.svg",
    title: "Women in Web3: Rwanda Mentorship Initiative Driving Inclusion",
    description:
      "Launching a mentorship program with SheBuilds Africa, focused on empowering over 200 young women in Rwanda with skills in smart contract development and digital entrepreneurship.",
    date: "Scheduled: April 2026",
  },
];

const UpcomingEvents = () => {
  const [featuredEvent, ...otherEvents] = events;

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
  
          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 sm:h-64 lg:h-[400px] w-full">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-4 sm:p-6">
              <time className="text-[#0066FF] text-xs sm:text-sm font-semibold mb-2 block">
                {featuredEvent.date}
              </time>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-3 sm:mb-4">
                {featuredEvent.title}
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {featuredEvent.description}
              </p>
                             <Link
                 href="/events/blog"
                 className="inline-flex items-center text-[#0066FF] font-semibold hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-[#0066FF] rounded text-sm sm:text-base"
                 aria-label="View blog posts"
               >
                 View Blog
                 <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
               </Link>
            </div>
          </article>

  
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {otherEvents.map((event) => (
              <article
                key={event.id}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <div className="relative w-full sm:w-48 h-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 12rem"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <time className="text-[#0066FF] text-xs sm:text-sm font-semibold mb-2">
                    {event.date}
                  </time>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm mb-2 leading-relaxed">
                    {event.description}
                  </p>
                  <Link
                    href="/events/blog"
                    className="inline-flex items-center text-[#0066FF] font-semibold hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-[#0066FF] rounded text-xs sm:text-sm"
                    aria-label="View blog posts"
                  >
                    View Blog
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
