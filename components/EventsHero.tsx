const EventsHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hackathon Banner - Dominant Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 lg:mb-20 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          </div>

          {/* Animated Pulse Effect */}
          <div className="absolute top-4 right-4">
            <div className="relative flex h-3 w-3">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold text-white">
                🚀 HOT TOPIC
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Africa Web3 <span className="text-yellow-300">Hackathon</span>{" "}
              2025
            </h1>

            {/* Date and Duration */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <span className="text-sm sm:text-base">
                  📅 Dec 2024 - Jan 2025
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg">
                <span className="text-sm sm:text-base">⏱️ 48-Hour Sprint</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 text-blue-100 leading-relaxed">
              Join Africa's brightest minds in a groundbreaking 48-hour
              blockchain innovation sprint. Build, collaborate, and shape the
              future of Web3 across the continent.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                🚀 Register Now - Early Access
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 transition-colors duration-300">
                📋 View Challenge Tracks
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-blue-100">
              <div className="flex flex-col items-center">
                <span className="font-bold text-white text-lg">$50K+</span>
                <span>In Prizes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-white text-lg">100+</span>
                <span>Mentors</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-white text-lg">10+</span>
                <span>African Nations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Original Content */}
        <div className="text-center">
          <p className="text-[#0066FF] mb-3 sm:mb-4 text-sm sm:text-base">
            Where Africa&apos;s Web3 momentum comes to life.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Events & News Hubs
          </h2>

          <p className="text-gray-600 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
            Stay up to date with the latest happenings, community stories, and
            groundbreaking events shaping the Web3 ecosystem in Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;
