import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen">
      <div className="w-full flex flex-col items-center p-8 pb-20 gap-16 sm:p-20">
        <Hero />
        <ScrollAnimation direction="fade" delay={200}>
          <FeaturesSection />
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={400}>
          <PricingSection />
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={200}>
          <TestimonialCarousel/>
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={200}>
          <FAQSection />
        </ScrollAnimation>
        <ScrollAnimation direction="fade" delay={200}>
          <ContactSection />
        </ScrollAnimation>
      </div>
      <Footer />
    </div>
  );
}
