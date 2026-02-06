import { ProjectsGrid } from "@/sections/ProjectsSection/components/ProjectsGrid";
import { useState } from "react";

export const ProjectsPage = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterApp, setFilterApp] = useState("All");
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen px-6 pb-16 md:pb-24 pt-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" onError={() => setVideoError(true)}>
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          ) : (
            <img src="/newhero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight text-white text-center mb-16">
            Dive into our{" "}
            <span className="relative inline-block">
              projects
              <svg
                className="absolute -bottom-2 left-0 w-full h-[18px]"
                viewBox="0 0 400 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9"
                  stroke="#d4ff00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            {/* All Projects Button */}
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-white/90 transition-colors">
              All projects
            </button>

            {/* Type of project dropdown */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm text-white/60 mb-2">
                Type of project
              </label>
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-transparent text-white border border-white/20 rounded-full px-6 py-3 appearance-none cursor-pointer hover:border-white/40 transition-colors focus:outline-none focus:border-[#d4ff00]"
                >
                  <option value="All">All</option>
                  <option value="Standard">Standard</option>
                  <option value="Custom">Custom</option>
                </select>
                <svg
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* App used dropdown */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm text-white/60 mb-2">
                App used
              </label>
              <div className="relative">
                <select
                  value={filterApp}
                  onChange={(e) => setFilterApp(e.target.value)}
                  className="w-full bg-transparent text-white border border-teal-400/40 rounded-full px-6 py-3 appearance-none cursor-pointer hover:border-teal-400/60 transition-colors focus:outline-none focus:border-[#d4ff00]"
                >
                  <option value="All">All</option>
                  <option value="Website">Website</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Events">Events</option>
                  <option value="Blog">Blog</option>
                </select>
                <svg
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Industries dropdown */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm text-white/60 mb-2">
                Industries
              </label>
              <div className="relative">
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="w-full bg-transparent text-white border border-white/20 rounded-full px-6 py-3 appearance-none cursor-pointer hover:border-white/40 transition-colors focus:outline-none focus:border-[#d4ff00]"
                >
                  <option value="All">All</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Energy">Energy</option>
                  <option value="Health & Medical">Health & Medical</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Education">Education</option>
                  <option value="Food & Restaurant">Food & Restaurant</option>
                </select>
                <svg
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid />
    </div>
  );
};
