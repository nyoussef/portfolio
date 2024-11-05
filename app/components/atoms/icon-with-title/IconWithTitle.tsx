import React from "react";
import { IconType } from "react-icons";

interface IconWithTitleProps {
  Icon: IconType;
  title: string;
  className?: string;
}

const IconWithTitle: React.FC<IconWithTitleProps> = ({ Icon, title, className }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <div className="h-24 mb-4 flex items-center justify-center bg-gray-800 text-white w-24 rounded-full">
      <Icon className="h-12 w-full" />
    </div>
    <h4 className="text-lg">{title}</h4>
  </div>
);

export default IconWithTitle;