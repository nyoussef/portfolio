import React from "react";
import { Image } from "../../atoms";

interface TechBadgeProps {
    tech: {
        name: string;
        logo: string;
    };
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
    return (
        <div className={`flex items-center px-3 py-1 rounded-lg mr-2 border-double border-4 border-gray-300 bg-white mb-3`}>
            <Image src={tech.logo} alt={tech.name} className="h-8 mr-3" />
            <span>{tech.name}</span>
        </div>
    );
};

export default TechBadge;