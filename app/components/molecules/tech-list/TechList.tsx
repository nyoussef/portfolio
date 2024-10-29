import React from "react";
import { Image } from "../../atoms";
import { technoBadge } from "../../molecules/project-card/ProjectCard";

interface TechListProps {
  techs: string[];
}

const TechList: React.FC<TechListProps> = ({ techs }) => (
  <div className="flex flex-wrap justify-center h-12 items-center">
    {techs.map((techName) => {
      const tech = technoBadge.find((t) => t.name === techName);
      return tech ? (
        <Image key={tech.name} src={tech.logo} alt={tech.name} className="h-8 mr-3" />
      ) : null;
    })}
  </div>
);

export default TechList;