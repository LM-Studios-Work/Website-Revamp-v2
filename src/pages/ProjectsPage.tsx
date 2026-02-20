import { useState } from "react";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { projects } from "@/sections/ProjectsSection/constants";

export const ProjectsPage = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterApp, setFilterApp] = useState("All");
  const [filterIndustry, setFilterIndustry] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesType = filterType === "All" || project.tags.some(tag => tag.text === filterType);
    const matchesApp = filterApp === "All" || project.tags.some(tag => tag.text === filterApp);
    const matchesIndustry = filterIndustry === "All" || project.tags.some(tag => tag.text === filterIndustry);
    return matchesType && matchesApp && matchesIndustry;
  });

  return (
    <>
      {/* Hero Section with Filters and Projects Grid */}
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-30 text-center max-w-[900px] mx-auto mb-16 anim-fade-in">
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold leading-tight text-white mb-6">
            Dive into our projects
          </h1>
        </div>

        {/* Filters Section - moved inside hero */}
        <div className="relative z-30 w-full max-w-[1200px] mx-auto mb-12">
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
                  className="w-full bg-black/40 text-white border-2 border-cyan-400/60 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-cyan-400 transition-colors [&>option]:bg-black [&>option]:text-white"
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
                  className="w-full bg-black/40 text-white border-2 border-[#a259ff]/70 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-[#a259ff] focus:border-[#a259ff] transition-colors [&>option]:bg-black [&>option]:text-white"
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
                  className="w-full bg-black/40 text-white border-2 border-[#d4ff00]/70 rounded-full px-6 py-3.5 appearance-none cursor-pointer hover:border-[#d4ff00] transition-colors [&>option]:bg-black [&>option]:text-white"
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

        {/* Projects Grid - moved inside hero */}
        <div className="relative z-30 w-full max-w-[1400px] mx-auto">
          <div className="flex flex-wrap -mx-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} isVisible={true} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">No projects match your filters. Try adjusting your selection.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
