import { useState } from "react";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";
import { FilterDropdown } from "@/components/FilterDropdown";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { projects } from "@/sections/ProjectsSection/constants";
import { COLORS } from "@/constants/colors";

const FILTER_CONFIG = [
  {
    label: "Type of project",
    key: "type" as const,
    options: ["All", "Professional Portfolios", "Business Solutions", "Interactive / Special"],
    borderColor: "#22d3ee",
  },
  {
    label: "Solution",
    key: "solution" as const,
    options: ["All", "Showcase", "Booking & Logistics", "Informational"],
    borderColor: "#a259ff",
  },
  {
    label: "Industry",
    key: "industry" as const,
    options: ["All", "Creative & Design", "Logistics & Services", "Travel & Tourism", "Personal & Events", "Technology"],
    borderColor: COLORS.limeAlt,
  },
];

export const ProjectsPage = () => {
  const [filters, setFilters] = useState<Record<string, string>>({
    type: "All",
    solution: "All",
    industry: "All",
  });

  const updateFilter = (key: string, value: string) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const resetFilters = () =>
    setFilters({ type: "All", solution: "All", industry: "All" });

  const filteredProjects = projects.filter((project) =>
    FILTER_CONFIG.every(
      ({ key }) =>
        filters[key] === "All" ||
        project.tags.some((tag) => tag.text === filters[key])
    )
  );

  return (
    <>
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
      <section className="relative -mt-[35vh] py-8 px-6 z-30">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full">
            {/* All projects button */}
            <div className="w-full md:w-auto md:min-w-[220px] flex flex-col">
              <label className="block text-sm mb-2 invisible select-none">
                Placeholder
              </label>
              <button
                onClick={resetFilters}
                className="w-full bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                style={{ minHeight: "60px" }}
              >
                All projects
              </button>
            </div>

            {FILTER_CONFIG.map(({ label, key, options, borderColor }) => (
              <FilterDropdown
                key={key}
                label={label}
                value={filters[key]}
                onChange={(val) => updateFilter(key, val)}
                options={options}
                borderColor={borderColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-8 px-6 z-30">
        <div className="w-full max-w-[1400px] mx-auto">
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
