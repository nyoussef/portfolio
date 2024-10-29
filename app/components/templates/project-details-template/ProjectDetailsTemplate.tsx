import React from 'react';
import { ProjectDetails } from '../../organisms';
import { ProjectCardProps } from '../../molecules/project-card/ProjectCard';

interface ProjectDetailsTemplateProps {
  project: ProjectCardProps;
}

const ProjectDetailsTemplate: React.FC<ProjectDetailsTemplateProps> = ({ project }) => {
  return <ProjectDetails project={project} />;
};

export default ProjectDetailsTemplate;