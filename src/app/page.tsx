import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <TestimonialCarousel/>
    </div>
  );
}
