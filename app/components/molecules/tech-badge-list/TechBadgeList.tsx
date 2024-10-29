import React from 'react';
import TechBadge from '../tech-badge/TechBadge';
import { technoBadge } from '../project-card/ProjectCard';

interface TechBadgeListProps {
  technologies: string[];
}

export const TechBadgeList: React.FC<TechBadgeListProps> = ({ technologies }) => (
  <div className="flex flex-wrap justify-center items-center">
    {technologies.map((techName) => {
      const tech = technoBadge.find((t) => t.name === techName);
      return tech ? <TechBadge key={tech.name} tech={tech} /> : null;
    })}
  </div>
);