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
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-30 text-center max-w-[900px] mx-auto mb-16 anim-fade-in">
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold leading-tight text-white mb-6">
            Dive into our projects
          </h1>
        </div>

      </section>

      {/* Filters Section */}
      <section className="relative py-8 px-6">
        <div className="max-w-[1200px] mx-auto">
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
                  <option value="Standard">Standard</option>
                  <option value="Custom">Custom</option>
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

            {/* App used dropdown */}
            <div className="w-full md:w-auto md:min-w-[220px]">
              <label className="block text-sm text-white/60 mb-2">
                App used
              </label>
              <div className="relative">
                <select
                  value={filterApp}
                  onChange={(e) => setFilterApp(e.target.value)}
                  className="w-full bg-transparent text-white border-2 border-[#a259ff]/70 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-[#a259ff] focus:border-[#a259ff] transition-colors"
                >
                  <option value="All">All</option>
                  <option value="Website">Website</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Events">Events</option>
                  <option value="Blog">Blog</option>
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
                Industries
              </label>
              <div className="relative">
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="w-full bg-transparent text-white border-2 border-[#d4ff00]/70 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-[#d4ff00] transition-colors"
                >
                  <option value="All">All</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Energy">Energy</option>
                  <option value="Health & Medical">{"Health & Medical"}</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Education">Education</option>
                  <option value="Food & Restaurant">
                    {"Food & Restaurant"}
                  </option>
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
