import React from "react";

interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    text: React.ReactNode;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, text, className = '' }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`text-${level === 1 ? '4xl' : level === 2 ? '3xl' : level === 3 ? '2xl' : 'xl'} font-bold ${className}`}>
            {text}
        </Tag>
    );
};

export default Heading;