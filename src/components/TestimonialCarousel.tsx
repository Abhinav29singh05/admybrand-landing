"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    title: "CMO, ExampleCorp",
    review:
      "ADmyBRAND AI Suite transformed our marketing. The analytics and automation are next-level! Highly recommended.",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    title: "Founder, StartupX",
    review:
      "The creative generator saved us hours every week. Our campaigns look better and perform better!",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Alex Johnson",
    title: "Marketing Lead, BigBrand",
    review:
      "The best SaaS tool we've used. The pricing is fair and the support is fantastic.",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Priya Patel",
    title: "Digital Strategist, AdVantage",
    review:
      "Seamless integration and beautiful UI. Our team productivity has soared since switching to ADmyBRAND!",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Carlos Mendez",
    title: "Growth Hacker, MarketMinds",
    review:
      "The AI-powered insights are spot on. We’ve seen a 30% increase in campaign ROI!",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Emily Chen",
    title: "Content Lead, Creativa",
    review:
      "I love the automation features. It’s like having an extra team member working 24/7!",
  },
];

const TestimonialCarousel: React.FC = () => (
  <section className="w-full bg-transparent flex flex-col items-center">
    <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
    <div className="w-full max-w-7xl px-2 md:px-4 lg:px-8   items-center">
    <div className="relative w-full max-w-6xl px-4 mx-auto">
        <div className="custom-swiper-button-prev absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>


        <Swiper
            modules={[Navigation, Pagination, A11y,Autoplay]}
            navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
            }}
            spaceBetween={32}
            slidesPerView={3}
            pagination={{ 
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet w-2.5 h-2.5 inline-block rounded-full mx-1"></span>`;
                },  
             }}
            loop
            style={{ paddingBottom: 48 }}
            breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.navigation.init();
                  swiper.navigation.update();
                  swiper.pagination.init();
                  swiper.pagination.render();
                  swiper.pagination.update();
                });
            }}
        >

            {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
                <div className="flex h-full items-center justify-center ">
                <TestimonialCard
                    photo={t.photo}
                    name={t.name}
                    title={t.title}
                    review={t.review}
                />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        <div className="custom-swiper-button-next absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
        {/* Pagination Dots */}
        <div className="custom-swiper-pagination flex justify-center mt-6" />

        {/* Scoped Styles */}
        <style jsx>{`
            :global(.custom-bullet) {
                background-color: white;
                opacity: 0.4;
                transition: all 0.3s ease;
            }

            :global(.swiper-pagination-bullet-active.custom-bullet) {
                background-color: #3b82f6;
                opacity: 1;
            }
        `}</style>

    </div>
    </div>
  </section>
);

export default TestimonialCarousel;
