import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`px-4 rounded-lg shadow-lg bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Container;