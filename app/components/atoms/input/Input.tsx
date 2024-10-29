import React from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, className = '', value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    );
  };
  
  export default Input;