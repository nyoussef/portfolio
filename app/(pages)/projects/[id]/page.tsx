import React from 'react';
import projects from '../../../data/projects.json';
import { notFound } from 'next/navigation';
import { ProjectDetailsTemplate } from '@/app/components/templates';

interface ProjectDetailsProps {
  params: {
    id: string;
  };
}

export default async function ProjectsPage({ params }: ProjectDetailsProps) {
  const projectId = parseInt(params.id);
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return notFound();
  }

  return <ProjectDetailsTemplate project={project} />;
}