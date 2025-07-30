import React from "react";
import BrandCard from "./FeatureCard";
import { FaRobot, FaChartLine, FaMagic, FaShieldAlt, FaUsers, FaCloud } from "react-icons/fa";

const features = [
  {
    title: "AI Automation",
    description: "Automate your marketing campaigns with cutting-edge AI algorithms that learn and optimize in real-time.",
    icon: <FaRobot />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Analytics Dashboard",
    description: "Get real-time insights and analytics to optimize your strategy with predictive modeling.",
    icon: <FaChartLine />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Creative Generator",
    description: "Generate ad copy, images, and videos with a single click using advanced AI models.",
    icon: <FaMagic />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Data Security",
    description: "Your data is protected with enterprise-grade security and SOC 2 Type II compliance.",
    icon: <FaShieldAlt />,
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Collaboration",
    description: "Work with your team in real-time, anywhere in the world with seamless integration.",
    icon: <FaUsers />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Cloud Access",
    description: "Access your marketing suite from any device, anytime with 99.9% uptime guarantee.",
    icon: <FaCloud />,
    gradient: "from-yellow-500 to-orange-500",
  },
];

const FeaturesSection = () => (
  <section className="py-20 max-w-screen-xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
        Powerful Features
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Everything you need to revolutionize your marketing strategy and drive real results
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="group">
          <BrandCard 
            title={feature.title} 
            description={feature.description} 
            icon={feature.icon}
            gradient={feature.gradient}
          />
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection; 