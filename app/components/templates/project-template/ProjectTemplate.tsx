import React from "react";
import { ProjectSection } from "../../organisms";
import { ProjectCardProps } from "../../molecules/project-card/ProjectCard";

interface ProjectsTemplateProps {
  projects: ProjectCardProps[];
}

const ProjectsTemplate: React.FC<ProjectsTemplateProps> = ({ projects }) => {
  return <ProjectSection projects={projects} />;
};

export default ProjectsTemplate;
