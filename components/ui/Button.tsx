import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-accent text-brand-black hover:bg-brand-accentHover focus:ring-brand-accent",
    secondary: "bg-white text-black hover:bg-gray-100 focus:ring-white",
    outline: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};