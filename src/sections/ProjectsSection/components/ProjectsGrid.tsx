import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { projects } from "@/sections/ProjectsSection/constants";

export const ProjectsGrid = () => {
  return (
    <section className="relative pt-6 pb-8 px-6 md:pt-10 md:pb-16">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex flex-wrap -mx-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
