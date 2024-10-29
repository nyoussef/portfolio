import React from "react";
import ProjectCard, { ProjectCardProps as ProjectCardType } from "../../molecules/project-card/ProjectCard";
import Heading from "../../atoms/heading/Heading";

interface ProjectsSectionProps {
    projects: ProjectCardType[];
    className?: string;
}

const ProjectSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
      <section className="py-12 mx-12">
        <Heading level={2} text="Mes Projets" className="text-center text-3xl mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              detail={project.detail}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              competences={project.competences}
              projectUrl={project.projectUrl}
              gitHubUrl={project.gitHubUrl}
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default ProjectSection;
