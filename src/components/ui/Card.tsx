import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "gradient" | "elevated";
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  onClick,
  hover = true
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg",
    glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl",
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 shadow-lg",
    elevated: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl"
  };
  
  const hoverClasses = hover ? "hover:shadow-2xl hover:scale-105" : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card; 