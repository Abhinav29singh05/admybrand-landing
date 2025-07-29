import React from "react";

interface TestimonialCardProps {
  photo: string;
  name: string;
  title: string;
  review: string;
}

const CARD_HEIGHT = 320; // px
const CARD_WIDTH = 370; // px

const TestimonialCard: React.FC<TestimonialCardProps> = ({ photo, name, title, review }) => (
  <div
    className="w-full flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl shadow-xl mx-auto border border-white/20"
    style={{ minHeight: CARD_HEIGHT, maxWidth: CARD_WIDTH, height: CARD_HEIGHT, width: CARD_WIDTH }}
  >
    {/* <div className="flex flex-col items-center gap-0 mt-2 mb-0"> */}
    <div className="flex flex-col items-center gap-1 mt-2 mb-2">
      <img
        src={photo}
        alt={name}
        className="rounded-full border-4 border-blue-500 shadow-lg w-24 h-24 object-cover bg-white"
        style={{ boxShadow: '0 4px 24px 0 rgba(33,150,243,0.15)' }}
      />
      <div className="text-xl font-bold text-white text-center drop-shadow line-clamp-1">{name}</div>
      <div className="text-sm text-blue-400 text-center font-medium line-clamp-1">{title}</div>
    </div>
    {/* <div className="text-base text-white/90 italic text-center leading-relaxed flex-1 flex items-center justify-center overflow-hidden break-words line-clamp-5"> */}
    <div className="text-base text-white/90 italic text-center leading-snug mt-6 px-4">

      {review}
    </div>
  </div>
);

export default TestimonialCard; 