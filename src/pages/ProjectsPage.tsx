import { LatestProjectsHeader } from "@/sections/ProjectsSection/components/LatestProjectsHeader";
import { ProjectsGrid } from "@/sections/ProjectsSection/components/ProjectsGrid";

export const ProjectsPage = () => {
  return (
    <div className="pt-32">
      <LatestProjectsHeader />
      <ProjectsGrid />
    </div>
  );
};
