import React from "react";
import BrandCard from "./FeatureCard";
import { FaRobot, FaChartLine, FaMagic, FaShieldAlt, FaUsers, FaCloud } from "react-icons/fa";

const features = [
  {
    title: "AI Automation",
    description: "Automate your marketing campaigns with cutting-edge AI algorithms.",
    icon: <FaRobot />,
  },
  {
    title: "Analytics Dashboard",
    description: "Get real-time insights and analytics to optimize your strategy.",
    icon: <FaChartLine />,
  },
  {
    title: "Creative Generator",
    description: "Generate ad copy, images, and videos with a single click.",
    icon: <FaMagic />,
  },
  {
    title: "Data Security",
    description: "Your data is protected with enterprise-grade security.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Collaboration",
    description: "Work with your team in real-time, anywhere in the world.",
    icon: <FaUsers />,
  },
  {
    title: "Cloud Access",
    description: "Access your marketing suite from any device, anytime.",
    icon: <FaCloud />,
  },
];

const FeaturesSection = () => (
  <section className="py-10 max-w-screen-xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="m-2">
            <BrandCard title={feature.title} description={feature.description} icon={feature.icon} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection; 