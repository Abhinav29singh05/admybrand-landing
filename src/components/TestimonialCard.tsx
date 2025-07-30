import React from "react";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  photo: string;
  name: string;
  title: string;
  review: string;
  rating?: number;
  company?: string;
  industry?: string;
}

const CARD_HEIGHT = 380; // px
const CARD_WIDTH = 370; // px

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  photo, 
  name, 
  title, 
  review, 
  rating = 5, 
  company, 
  industry 
}) => (
  <div
    className="w-full flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl mx-auto border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 group relative overflow-hidden"
    style={{ minHeight: CARD_HEIGHT, maxWidth: CARD_WIDTH, height: CARD_HEIGHT, width: CARD_WIDTH }}
  >
    {/* Gradient Background Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Card Content */}
    <div className="relative z-10 flex flex-col items-center gap-4 p-8 h-full justify-between">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300">
            <img
              src={photo}
              alt={name}
              className="w-full h-full rounded-full object-cover bg-white"
            />
          </div>
          {/* Status Indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-blue-300 font-medium mb-2">{title}</p>
          
          {/* Rating Stars */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>
          
          {/* Company & Industry */}
          {(company || industry) && (
            <div className="flex flex-col items-center gap-1">
              {company && (
                <span className="text-xs text-white/70 font-medium">{company}</span>
              )}
              {industry && (
                <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">
                  {industry}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Review Section */}
      <div className="flex-1 flex items-center">
        <div className="text-center">
          <div className="text-white/90 text-sm leading-relaxed italic font-medium">
            "{review}"
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </div>
);

export default TestimonialCard; 