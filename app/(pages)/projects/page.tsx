import React from 'react'
import { ProjectsTemplate } from '@/app/components/templates'
import projects from '../../data/projects.json';

export default async function ProjectsPage() {
  return <ProjectsTemplate projects={projects} />;
}