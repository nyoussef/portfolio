import React from 'react';
import {
  Heading,
  Paragraph,
  Image,
  Container,
  Button
} from '@/app/components/atoms';
import { SkillsList, TechBadgeList } from '../../molecules';
import Link from 'next/link';
import { ProjectCardProps } from '../../molecules/project-card/ProjectCard';

interface ProjectDetailsProps {
  project: ProjectCardProps;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="min-w-screen-lg mx-auto px-4 2xl:px-60 xl:px-28 lg:px-4">
      <div className="relative mt-8">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-96 rounded-lg blur-sm"
        />
        <Heading
          text={project.title}
          level={1}
          className="absolute inset-0 flex justify-center items-center text-white text-4xl font-sans drop-shadow-md"
        />
      </div>
      <Container className="w-full mt-4 text-center">
        <Paragraph text={project.detail} />
      </Container>
      <div className="flex flex-col lg:flex-row mt-4 gap-4 justify-between mb-4 lg:mb-0">
        <Container className="lg:basis-1/2 flex flex-col p-4">
          <Heading text="Compétences développées" level={3} className="text-center py-4" />
          <SkillsList skills={project.competences} />
        </Container>
        <Container className="lg:basis-1/4 flex flex-col p-4">
          <Heading text="Technologies utilisées" level={3} className="text-center py-4" />
          <TechBadgeList technologies={project.technologies} />
        </Container>
        <Container className="lg:basis-1/5 flex flex-col p-4">
          <Heading text="Liens" level={3} className="text-center py-4" />
          <div className="flex flex-col justify-around items-center gap-4">
          <div className="flex flex-col justify-around items-center gap-4 w-full">
            <Link href={project.gitHubUrl} className="w-full">
              <Button label="Code source" className="w-full" />
            </Link>
            {project.projectUrl ? (
              <Link href={project.projectUrl} className="w-full">
                <Button label="Site web" className="w-full" />
              </Link>
            ) : null}
            <Link href="/projects" className="w-full">
              <Button
                label="Retour"
                className="w-full bg-red-500 hover:bg-red-600"
              />
            </Link>
          </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProjectDetails;