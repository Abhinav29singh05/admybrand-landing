import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  button: string;
  popular?: boolean;
  gradient?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  button, 
  popular = false,
  gradient = "from-blue-500 to-purple-500"
}) => (
  <div className={`relative group ${popular ? 'scale-105' : ''}`}>
    {/* Popular badge */}
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
          <FaStar className="mr-1" />
          Most Popular
        </div>
      </div>
    )}
    
    <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-8 h-full">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          
          <div className="mb-4">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {price}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-lg">
              {period}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Features */}
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <FaCheck className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
          popular 
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105' 
            : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-white hover:bg-white/20'
        }`}>
          {button}
        </button>
      </div>
    </div>
  </div>
);

export default PricingCard; 