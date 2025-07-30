import React from "react";
import PricingCard from "./PricingCard";

const pricingTiers = [
  {
    title: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for individuals and small teams getting started with AI marketing.",
    features: [
      "AI-powered ad copy generation",
      "Basic analytics dashboard",
      "5 campaign templates",
      "Email support",
      "1 user"
    ],
    button: "Start Free Trial",
    popular: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Professional",
    price: "$49",
    period: "/month",
    description: "For growing businesses that need advanced features and team collaboration.",
    features: [
      "Everything in Starter",
      "Advanced AI automation",
      "Unlimited campaigns",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
      "Up to 10 users"
    ],
    button: "Start Free Trial",
    popular: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom solutions for large organizations with dedicated support and advanced features.",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "Dedicated account manager",
      "SLA guarantees",
      "Custom integrations",
      "Advanced security",
      "Unlimited users"
    ],
    button: "Contact Sales",
    popular: false,
    gradient: "from-green-500 to-emerald-500"
  },
];

const PricingSection = () => (
  <section className="py-20 max-w-screen-xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
        Simple, Transparent Pricing
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Choose the plan that fits your needs. All plans include a 14-day free trial.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingTiers.map((tier, idx) => (
        <PricingCard
          key={idx}
          title={tier.title}
          price={tier.price}
          period={tier.period}
          description={tier.description}
          features={tier.features}
          button={tier.button}
          popular={tier.popular}
          gradient={tier.gradient}
        />
      ))}
    </div>
  </section>
);

export default PricingSection; 