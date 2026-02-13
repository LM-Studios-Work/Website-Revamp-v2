
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { projects } from "@/sections/ProjectsSection/constants";

export const ProjectsGrid = () => {
  return (
    <section className="relative pt-6 pb-8 px-6 md:px-10 lg:px-16 md:pt-10 md:pb-16">
      <div className="w-full">
        <div className="flex flex-wrap -mx-3">
          {projects.map((project, index) => (
            <div key={project.title} style={{ '--card-index': index } as React.CSSProperties}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
