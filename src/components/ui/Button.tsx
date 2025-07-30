import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: IconType;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  type = "button"
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl hover:scale-105",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl hover:scale-105",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    ghost: "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl hover:scale-105"
  };
  
  const iconClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7"
  };
  
  const iconSpacing = {
    sm: "space-x-1",
    md: "space-x-2",
    lg: "space-x-2",
    xl: "space-x-3"
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${iconClasses[size]} mr-2`}></div>
      )}
      
      {!loading && Icon && iconPosition === "left" && (
        <Icon className={`${iconClasses[size]} ${iconSpacing[size].split(' ')[1] === 'mr-2' ? 'mr-2' : 'mr-1'}`} />
      )}
      
      <span className="flex items-center">
        {children}
      </span>
      
      {!loading && Icon && iconPosition === "right" && (
        <Icon className={`${iconClasses[size]} ml-2`} />
      )}
    </button>
  );
};

export default Button; 