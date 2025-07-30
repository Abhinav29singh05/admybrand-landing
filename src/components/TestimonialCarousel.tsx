"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    title: "CMO, ExampleCorp",
    review: "ADmyBRAND AI Suite transformed our marketing. The analytics and automation are next-level! We've seen a 40% increase in conversion rates since implementation.",
    rating: 5,
    company: "ExampleCorp",
    industry: "E-commerce"
  },
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    title: "Founder, StartupX",
    review: "The creative generator saved us hours every week. Our campaigns look better and perform better! The AI suggestions are incredibly accurate.",
    rating: 5,
    company: "StartupX",
    industry: "SaaS"
  },
  {
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Alex Johnson",
    title: "Marketing Lead, BigBrand",
    review: "The best SaaS tool we've used. The pricing is fair and the support is fantastic. ROI increased by 35% in just 3 months!",
    rating: 5,
    company: "BigBrand",
    industry: "Retail"
  },
  {
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Priya Patel",
    title: "Digital Strategist, AdVantage",
    review: "Seamless integration and beautiful UI. Our team productivity has soared since switching to ADmyBRAND! The automation features are game-changing.",
    rating: 5,
    company: "AdVantage",
    industry: "Marketing Agency"
  },
  {
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Carlos Mendez",
    title: "Growth Hacker, MarketMinds",
    review: "The AI-powered insights are spot on. We've seen a 30% increase in campaign ROI! The predictive analytics are incredibly accurate.",
    rating: 5,
    company: "MarketMinds",
    industry: "Consulting"
  },
  {
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Emily Chen",
    title: "Content Lead, Creativa",
    review: "I love the automation features. It's like having an extra team member working 24/7! The content generation is incredibly creative and engaging.",
    rating: 5,
    company: "Creativa",
    industry: "Creative Agency"
  },
];

const TestimonialCarousel: React.FC = () => (
  <section className="w-full bg-transparent flex flex-col items-center py-20">
    {/* Enhanced Header */}
    <div className="text-center mb-16 max-w-4xl mx-auto px-4">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
        <FaStar className="text-yellow-400 text-sm" />
        <span className="text-sm font-medium text-white/90">Trusted by 10,000+ businesses</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
        What Our Customers Say
      </h2>
      <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
        Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite
      </p>
    </div>

    <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Enhanced Navigation Buttons */}
        <div className="custom-swiper-button-prev absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:border-blue-400/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          spaceBetween={32}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet w-3 h-3 inline-block rounded-full mx-1.5 bg-white/30 hover:bg-white/60 transition-all duration-300"></span>`;
            },  
          }}
          loop
          style={{ paddingBottom: 60 }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 32 },
            1280: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex h-full items-center justify-center p-2">
                <TestimonialCard
                  photo={t.photo}
                  name={t.name}
                  title={t.title}
                  review={t.review}
                  rating={t.rating}
                  company={t.company}
                  industry={t.industry}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-button-next absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:border-blue-400/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Enhanced Pagination Dots */}
        <div className="custom-swiper-pagination flex justify-center mt-8" />

        {/* Enhanced Scoped Styles */}
        <style jsx>{`
          :global(.custom-bullet) {
            background-color: rgba(255, 255, 255, 0.3);
            opacity: 0.6;
            transition: all 0.3s ease;
            transform: scale(1);
          }

          :global(.swiper-pagination-bullet-active.custom-bullet) {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            opacity: 1;
            transform: scale(1.2);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }

          :global(.swiper-pagination-bullet:hover) {
            background-color: rgba(255, 255, 255, 0.6);
            transform: scale(1.1);
          }

          @media (max-width: 768px) {
            :global(.custom-swiper-button-prev),
            :global(.custom-swiper-button-next) {
              display: none;
            }
          }
        `}</style>
      </div>
    </div>
  </section>
);

export default TestimonialCarousel;
