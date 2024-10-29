import React from 'react';

interface SkillsListProps {
  skills: string[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <ul className="list-none flex flex-col justify-around">
    {skills.map((skill, index) => (
      <li key={index} className="text-center my-2">{skill}</li>
    ))}
  </ul>
);