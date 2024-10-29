import React from "react";
import Image from "../../atoms/image/Image";
import Heading from "../../atoms/heading/Heading";
import Button from "../../atoms/button/Button";
import Link from "next/link";
import Paragraph from "../../atoms/paragraph/Paragraph";

export interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    detail: string;
    imageUrl: string;
    competences: string[];
    technologies: string[];
    projectUrl: string;
    gitHubUrl: string;
}

export const technoBadge = [
    { name: 'HTML', logo: '/img/logos/html-logo.png' },
    { name: 'CSS', logo: '/img/logos/css-logo.png' },
    { name: 'Figma', logo: '/img/logos/figma-logo.png' },
    { name: 'Sass', logo: '/img/logos/sass-logo.png' },
    { name: 'Git', logo: '/img/logos/git-logo.png' },
    { name: 'GitHub', logo: '/img/logos/github-logo.png' },
    { name: 'JavaScript', logo: '/img/logos/javascript-logo.png' },
    { name: 'React', logo: '/img/logos/react-logo.png' },
    { name: 'Redux', logo: '/img/logos/redux-logo.png' },
    { name: 'Next.js', logo: '/img/logos/nextjs-logo.png' },
    { name: 'TypeScript', logo: '/img/logos/typescript-logo.png' },
    { name: 'Tailwind CSS', logo: '/img/logos/tailwind-logo.png' }
  ];
  

const ProjectCard: React.FC<ProjectCardProps> =({ id, title, description, imageUrl, technologies}) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
            <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />

            <div className="p-4">
                <Heading level={3} text={title} className="mb-2" />
                <Paragraph text={description} className="mb-4" />
                <Link href={`/projects/${id}`} passHref>
                    <Button label="Détail" className="w-full" />
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;