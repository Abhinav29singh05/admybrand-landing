import React from "react";
import PricingCard from "./PricingCard";

const pricingTiers = [
  {
    title: "Personal edition",
    price: "$19.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    button: "Buy now",
  },
  {
    title: "Business edition",
    price: "$49.99",
    description: "For growing teams and businesses. Includes advanced analytics, integrations, and priority support.",
    button: "Buy now",
  },
  {
    title: "Enterprise edition",
    price: "Contact Us",
    description: "Custom solutions for large organizations. Dedicated support, custom integrations, and more.",
    button: "Contact sales",
  },
];

const PricingSection = () => (
  <section className="py-20 max-w-screen-xl mx-auto ">
    <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
    <div className="flex flex-wrap justify-center gap-12 ">
      {pricingTiers.map((tier, idx) => (
        <PricingCard
          key={idx}
          title={tier.title}
          price={tier.price}
          description={tier.description}
          button={tier.button}
        />
      ))}
    </div>
  </section>
);

export default PricingSection; 