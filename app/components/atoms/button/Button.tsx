import React from "react";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <button type={type} onClick={onClick} className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded cursor-pointer ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {label}
        </button>
    );
};

export default Button;