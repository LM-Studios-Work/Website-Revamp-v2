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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left column: Heading + primary button */}
            <div>
              <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight text-white mb-6">
                Dive into our
                <span className="relative inline-block block md:inline-block">
                  projects
                </span>
              </h1>

              <div className="md:mt-6">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-white/90 transition-colors">
                  All projects
                </button>
              </div>
            </div>

            {/* Right column: stacked filter controls (mobile: full width stacked) */}
            <div className="flex flex-col gap-6">
              {/* Type of project dropdown */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Type of project</label>
                <div className="relative">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full bg-transparent text-white border border-white/20 rounded-full px-6 py-3 appearance-none cursor-pointer"
                  >
                    <option value="All">All</option>
                    <option value="Standard">Standard</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>

              {/* App used dropdown */}
              <div>
                <label className="block text-sm text-white/60 mb-2">App used</label>
                <div className="relative">
                  <select
                    value={filterApp}
                    onChange={(e) => setFilterApp(e.target.value)}
                    className="w-full bg-transparent text-white border border-teal-400/40 rounded-full px-6 py-3 appearance-none cursor-pointer"
                  >
                    <option value="All">All</option>
                    <option value="Website">Website</option>
                    <option value="Ecommerce">Ecommerce</option>
                    <option value="Events">Events</option>
                    <option value="Blog">Blog</option>
                  </select>
                </div>
              </div>

              {/* Industries dropdown */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Industries</label>
                <div className="relative">
                  <select
                    value={filterIndustry}
                    onChange={(e) => setFilterIndustry(e.target.value)}
                    className="w-full bg-transparent text-white border border-white/20 rounded-full px-6 py-3 appearance-none cursor-pointer"
                  >
                    <option value="All">All</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Energy">Energy</option>
                    <option value="Health & Medical">Health & Medical</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Education">Education</option>
                    <option value="Food & Restaurant">Food & Restaurant</option>
                  </select>
                </div>
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
