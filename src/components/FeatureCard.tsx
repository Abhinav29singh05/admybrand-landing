import React from "react";

interface BrandCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ title, description, icon, gradient = "from-blue-500 to-purple-500" }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-6 h-full">
    {/* Gradient background */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
    
    {/* Content */}
    <div className="relative z-10 text-center">
      {/* Icon */}
      {icon && (
        <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      )}
      
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
    
    {/* Hover effect border */}
    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
  </div>
);

export default BrandCard;