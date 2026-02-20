import { ProjectsGrid } from "@/sections/ProjectsSection/components/ProjectsGrid";
import { useState } from "react";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const ProjectsPage = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterApp, setFilterApp] = useState("All");
  const [filterIndustry, setFilterIndustry] = useState("All");

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative px-6 md:px-10 lg:px-16 pb-16 md:pb-24 pt-32 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-30 w-full max-w-[1200px] mx-auto">
          {/* Heading */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.1] text-white mb-0">
              Dive into our projects
            </h1>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full">
            {/* All projects button with invisible label for alignment */}
            <div className="w-full md:w-auto md:min-w-[220px] flex flex-col">
              <label className="block text-sm mb-2 invisible select-none">
                Placeholder
              </label>
              <button
                onClick={() => {
                  setFilterType("All");
                  setFilterApp("All");
                  setFilterIndustry("All");
                }}
                className="w-full bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                style={{ minHeight: "60px" }}
              >
                All projects
              </button>
            </div>

            {/* Type of project dropdown */}
            <div className="w-full md:w-auto md:min-w-[220px]">
              <label className="block text-sm text-white/60 mb-2">
                Type of project
              </label>
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-transparent text-white border-2 border-cyan-400/60 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-cyan-400 transition-colors"
                >
                  <option value="All">All</option>
                  <option value="Professional Portfolios">Professional Portfolios</option>
                  <option value="Business Solutions">Business Solutions</option>
                  <option value="Interactive / Special">Interactive / Special</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
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

            {/* Solution/Feature dropdown */}
            <div className="w-full md:w-auto md:min-w-[220px]">
              <label className="block text-sm text-white/60 mb-2">
                Solution
              </label>
              <div className="relative">
                <select
                  value={filterApp}
                  onChange={(e) => setFilterApp(e.target.value)}
                  className="w-full bg-transparent text-white border-2 border-[#a259ff]/70 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-[#a259ff] focus:border-[#a259ff] transition-colors"
                >
                  <option value="All">All</option>
                  <option value="Showcase">Showcase</option>
                  <option value="Booking & Logistics">Booking & Logistics</option>
                  <option value="Informational">Informational</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
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
            <div className="w-full md:w-auto md:min-w-[220px]">
              <label className="block text-sm text-white/60 mb-2">
                Industry
              </label>
              <div className="relative">
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="w-full bg-transparent text-white border-2 border-[#d4ff00]/70 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-[#d4ff00] transition-colors"
                >
                  <option value="All">All</option>
                  <option value="Creative & Design">Creative & Design</option>
                  <option value="Logistics & Services">Logistics & Services</option>
                  <option value="Travel & Tourism">Travel & Tourism</option>
                  <option value="Personal & Events">Personal & Events</option>
                  <option value="Technology">Technology</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
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
