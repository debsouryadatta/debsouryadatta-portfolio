import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-canvas";

  const variants = {
    primary:
      "bg-brand-ink text-brand-canvas shadow-[0_14px_35px_rgba(23,23,23,0.12)] hover:bg-brand-ink/90",
    secondary:
      "border border-brand-ink/12 bg-white text-brand-ink hover:border-brand-ink/20 hover:bg-brand-surface",
    outline:
      "border border-brand-ink/20 bg-transparent text-brand-ink hover:bg-brand-ink hover:text-brand-canvas",
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
