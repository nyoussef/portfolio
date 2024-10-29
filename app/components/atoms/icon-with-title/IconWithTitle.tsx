import React from "react";
import { IconType } from "react-icons";

interface IconWithTitleProps {
  Icon: IconType;
  title: string;
  className?: string;
}

const IconWithTitle: React.FC<IconWithTitleProps> = ({ Icon, title, className }) => (
  <div className={className}>
    <div className="h-24 flex items-center justify-center">
      <Icon className="h-12 w-full" />
    </div>
    <h4 className="flex justify-center items-center mb-4 text-lg">{title}</h4>
  </div>
);

export default IconWithTitle;