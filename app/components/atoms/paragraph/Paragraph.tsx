import React from "react";

interface ParagraphProps {
    text: React.ReactNode;
    className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, className = ''}) => {
    return (
        <p className={`text-base ${className}`}>
            {text}
        </p>
    );
};

export default Paragraph;