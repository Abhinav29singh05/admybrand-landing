import React, { forwardRef } from "react";
import { IconType } from "react-icons";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  success?: boolean;
  icon?: IconType;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  error,
  success = false,
  icon: Icon,
  iconPosition = "left",
  size = "md",
  className = "",
  name,
  id,
  autoComplete
}, ref) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg"
  };
  
  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  
  const iconSpacing = {
    sm: "pl-10",
    md: "pl-12",
    lg: "pl-14"
  };
  
  const iconSpacingRight = {
    sm: "pr-10",
    md: "pr-12",
    lg: "pr-14"
  };

  const getInputClasses = () => {
    const baseClasses = "w-full rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    let borderClasses = "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500";
    let bgClasses = "bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400";
    
    if (error) {
      borderClasses = "border-red-500 focus:border-red-500 focus:ring-red-500";
    } else if (success) {
      borderClasses = "border-green-500 focus:border-green-500 focus:ring-green-500";
    }
    
    return `${baseClasses} ${borderClasses} ${bgClasses} ${sizeClasses[size]} ${className}`;
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === "left" && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon className={iconSizeClasses[size]} />
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          className={`${getInputClasses()} ${Icon && iconPosition === "left" ? iconSpacing[size] : ""} ${Icon && iconPosition === "right" ? iconSpacingRight[size] : ""}`}
        />
        
        {Icon && iconPosition === "right" && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon className={iconSizeClasses[size]} />
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input; 