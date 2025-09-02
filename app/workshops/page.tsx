/* eslint-disable @next/next/no-img-element */
import { format, isAfter, isBefore, parseISO } from "date-fns";

interface Workshop {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  instructor: string;
  location: string;
  capacity: number;
  enrolled: number;
  tags: string[];
  imageUrl?: string;
  registrationUrl?: string;
}

export default function WorkshopsPage() {
  const workshops: Workshop[] = [
    {
      id: "base-batch-001",
      title: "Base Batches #001 Workshop",
      description:
        "Comprehensive workshop on Base blockchain development, covering smart contract deployment, Layer 2 scaling solutions, and building decentralized applications on Coinbase's Layer 2 network.",
      startDate: "2025-05-03T09:00:00",
      endDate: "2025-05-03T17:00:00",

      instructor: "Web3 Mates & Base Team",
      location: "Kigali, Rwanda",
      capacity: 200,
      enrolled: 80,
      tags: ["base", "layer2", "blockchain", "advanced"],
      imageUrl: "/basebatches.jpeg",
      registrationUrl: "/workshops/base-batch-001",
    },
    {
      id: "ayahq-lisk-roadshow",
      title: "AyaHQ X Lisk Roadshow",
      description:
        "Exclusive roadshow event featuring AyaHQ and Lisk collaboration, showcasing innovative blockchain solutions and community building initiatives across Africa.",
      startDate: "2025-02-28T10:00:00",

      endDate: "2024-02-28T18:00:00",
      instructor: "AyaHQ Team & Lisk Representatives",
      location: "Multiple Cities, Africa",
      capacity: 200,
      enrolled: 120,
      tags: ["ayahq", "lisk", "roadshow", "community"],
      imageUrl: "/AyaHQxLisk-roadshow.jpeg",
      registrationUrl: "/workshops/ayahq-lisk-roadshow",
    },
    {
      id: "1",
      title: "Web3 Fundamentals",
      description:
        "Learn the core concepts of blockchain and decentralized applications in this hands-on workshop.",
      startDate: "2024-07-10T09:00:00",
      endDate: "2024-07-10T12:00:00",
      instructor: "Jonas Sebera",
      location: "Gathering",
      capacity: 50,
      enrolled: 32,
      tags: ["blockchain", "beginner", "web3"],
      imageUrl: "/ai_ethic.jpeg",
      registrationUrl: "/register/web3-fundamentals",
    },
    {
      id: "2",
      title: "Smart Contract Security",
      description:
        "Advanced workshop on identifying and preventing vulnerabilities in Solidity smart contracts.",
      startDate: "2024-07-15T13:00:00",
      endDate: "2024-07-15T17:00:00",
      instructor: "Jonas Sebera",
      location: "Campus Lab B",
      capacity: 30,
      enrolled: 28,
      tags: ["security", "solidity", "advanced"],
      imageUrl: "/roundtables.jpeg",
    },
    {
      id: "3",
      title: "NFT Marketplace Development",
      description:
        "Build your own NFT marketplace from scratch using Next.js and Solidity.",
      startDate: "2024-06-20T10:00:00",
      endDate: "2024-06-20T16:00:00",
      instructor: "Jonas Sebera",
      location: "Gather",
      capacity: 40,
      enrolled: 40,
      tags: ["nft", "development", "intermediate"],
      imageUrl: "/past.jpeg",
    },
  ];

  const currentDate = new Date();

  const upcomingWorkshops = workshops
    .filter((workshop) => isAfter(parseISO(workshop.startDate), currentDate))
    .sort(
      (a, b) =>
        parseISO(a.startDate).getTime() - parseISO(b.startDate).getTime()
    );

  const ongoingWorkshops = workshops.filter(
    (workshop) =>
      isBefore(parseISO(workshop.startDate), currentDate) &&
      isAfter(parseISO(workshop.endDate), currentDate)
  );

  const pastWorkshops = workshops
    .filter((workshop) => isBefore(parseISO(workshop.endDate), currentDate))
    .sort(
      (a, b) =>
        parseISO(b.startDate).getTime() - parseISO(a.startDate).getTime()
    );

  return (
    <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:py-24">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Workshops
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Hands-on learning experiences to level up your skills
        </p>
      </div>

      {ongoingWorkshops.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mr-3">
              Happening Now
            </h2>
            <span className="bg-red-100 text-red-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
              Live
            </span>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {ongoingWorkshops.map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                status="ongoing"
              />
            ))}
          </div>
        </section>
      )}

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Upcoming Workshops
          </h2>
          <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full self-start">
            {upcomingWorkshops.length} scheduled
          </span>
        </div>

        {upcomingWorkshops.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {upcomingWorkshops.map((workshop) => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                status="upcoming"
              />
            ))}
          </div>
        ) : (
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-900">
              No upcoming workshops
            </h3>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              We don&apos;t have any workshops scheduled yet. Check back soon or
              join our mailing list for updates.
            </p>
            <button className="mt-4 inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Notify Me
            </button>
          </div>
        )}
      </section>

      {pastWorkshops.length > 0 && (
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Past Workshops
          </h2>

          {/* Highlighted Featured Workshops */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
              Featured Workshops
            </h3>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
              {pastWorkshops
                .filter(
                  (workshop) =>
                    workshop.id === "base-batch-001" ||
                    workshop.id === "ayahq-lisk-roadshow"
                )
                .map((workshop) => (
                  <div
                    key={workshop.id}
                    className="border-2 border-blue-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
                  >
                    {workshop.imageUrl && (
                      <div className="h-48 sm:h-56 bg-gray-100 overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={workshop.imageUrl}
                          alt={workshop.title}
                        />
                      </div>
                    )}
                    <div className="p-6 sm:p-8">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                            Featured Event
                          </span>
                          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                            {workshop.title}
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base mb-4">
                            {workshop.description}
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Instructor:</span>
                              <p className="font-medium text-gray-900">
                                {workshop.instructor}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500">Location:</span>
                              <p className="font-medium text-gray-900">
                                {workshop.location}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500">Date:</span>
                              <p className="font-medium text-gray-900">
                                {format(
                                  parseISO(workshop.startDate),
                                  "MMM dd, yyyy"
                                )}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500">Attendance:</span>
                              <p className="font-medium text-gray-900">
                                {workshop.enrolled}/{workshop.capacity}
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {workshop.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Regular Past Workshops */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6">
              Other Past Workshops
            </h3>
            <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {pastWorkshops
                .filter(
                  (workshop) =>
                    workshop.id !== "base-batch-001" &&
                    workshop.id !== "ayahq-lisk-roadshow"
                )
                .slice(0, 6)
                .map((workshop) => (
                  <WorkshopCard
                    key={workshop.id}
                    workshop={workshop}
                    status="past"
                  />
                ))}
            </div>
            {pastWorkshops.filter(
              (workshop) =>
                workshop.id !== "base-batch-001" &&
                workshop.id !== "ayahq-lisk-roadshow"
            ).length > 6 && (
              <div className="mt-6 sm:mt-8 text-center">
                <button className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-xs sm:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  View All Past Workshops (
                  {
                    pastWorkshops.filter(
                      (workshop) =>
                        workshop.id !== "base-batch-001" &&
                        workshop.id !== "ayahq-lisk-roadshow"
                    ).length
                  }
                  )
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

function WorkshopCard({
  workshop,
  status,
}: {
  workshop: Workshop;
  status: "upcoming" | "ongoing" | "past";
}) {
  const startDate = parseISO(workshop.startDate);
  const endDate = parseISO(workshop.endDate);

  const statusStyles = {
    upcoming: "border-blue-200 hover:shadow-md",
    ongoing: "border-green-200 ring-2 ring-green-100 hover:shadow-lg",
    past: "border-gray-200 opacity-90 hover:opacity-100",
  };

  const enrollmentPercentage = Math.round(
    (workshop.enrolled / workshop.capacity) * 100
  );

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all ${statusStyles[status]}`}
    >
      {workshop.imageUrl && (
        <div className="h-40 sm:h-48 bg-gray-100 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={workshop.imageUrl}
            alt={workshop.title}
          />
        </div>
      )}

      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            {status === "ongoing" && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                Happening Now
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              {workshop.title}
            </h3>
          </div>
          {status === "upcoming" && enrollmentPercentage >= 80 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2 flex-shrink-0">
              Filling Fast
            </span>
          )}
        </div>

        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          {workshop.description}
        </p>

        <div className="space-y-3 sm:space-y-4">
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-gray-900">
              Details
            </h4>
            <div className="mt-1 text-xs sm:text-sm text-gray-500 space-y-1">
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs sm:text-sm">
                  {format(startDate, "MMMM d, yyyy")} •{" "}
                  {format(startDate, "h:mm a")} - {format(endDate, "h:mm a")}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                <span className="text-xs sm:text-sm">{workshop.location}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-xs sm:text-sm">
                  Instructor: {workshop.instructor}
                </span>
              </div>
            </div>
          </div>

          {status !== "past" && (
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-900">
                Enrollment
              </h4>
              <div className="mt-2">
                <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
                  <span>
                    {workshop.enrolled} of {workshop.capacity} spots filled
                  </span>
                  <span>{enrollmentPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      enrollmentPercentage >= 90
                        ? "bg-red-500"
                        : enrollmentPercentage >= 50
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                    style={{ width: `${enrollmentPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1 sm:gap-2">
            {workshop.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {status !== "past" && workshop.registrationUrl && (
          <div className="mt-4 sm:mt-6">
            <a
              href={workshop.registrationUrl}
              className={`w-full flex items-center justify-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white ${
                status === "ongoing"
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {status === "ongoing" ? "Join Now" : "Register"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
