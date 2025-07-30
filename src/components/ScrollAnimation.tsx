"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    switch (direction) {
      case "up":
        return `${baseClasses} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`;
      case "down":
        return `${baseClasses} ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`;
      case "left":
        return `${baseClasses} ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`;
      case "right":
        return `${baseClasses} ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`;
      case "fade":
        return `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`;
      default:
        return `${baseClasses} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`;
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 