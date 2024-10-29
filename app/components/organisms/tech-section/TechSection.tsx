import React from "react";
import { IconType } from "react-icons";
import { IconWithTitle, Paragraph } from "../../atoms";
import { TechList } from "../../molecules";

interface TechSectionProps {
  Icon: IconType;
  title: string;
  description: string;
  techs: string[];
}

const TechSection: React.FC<TechSectionProps> = ({ Icon, title, description, techs }) => (
  <div className="flex flex-col justify-between">
    <IconWithTitle Icon={Icon} title={title} className="mb-4" />
    <TechList techs={techs} />
    <Paragraph text={description} className="h-24 flex justify-center items-center text-sm" />
  </div>
);

export default TechSection;