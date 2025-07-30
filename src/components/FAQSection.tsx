"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does ADmyBRAND AI Suite improve my marketing ROI?",
    answer: "Our AI algorithms analyze your target audience, optimize ad performance in real-time, and automatically adjust campaigns for maximum conversion rates. Most customers see a 40-60% increase in ROI within the first 30 days."
  },
  {
    question: "What makes ADmyBRAND different from other marketing tools?",
    answer: "Unlike traditional tools, ADmyBRAND combines AI-powered creative generation, real-time analytics, and automated optimization in one seamless platform. Our proprietary algorithms learn from your brand's unique voice and audience behavior."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We use enterprise-grade encryption, SOC 2 Type II compliance, and GDPR-compliant data handling. Your data never leaves our secure infrastructure, and we provide detailed audit logs for complete transparency."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer: "Yes! We offer 50+ native integrations including Google Ads, Facebook Ads, Shopify, HubSpot, and more. Our API allows custom integrations, and our team provides white-glove setup assistance."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most customers see measurable improvements within 7-14 days. Our AI starts learning from day one, and you'll receive daily optimization reports showing performance improvements and recommendations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 live chat support, dedicated account managers for Business and Enterprise plans, comprehensive documentation, video tutorials, and weekly optimization calls to ensure you're getting maximum value."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Everything you need to know about ADmyBRAND AI Suite
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <FaChevronUp className="w-5 h-5 text-blue-600 transition-transform duration-300" />
                    ) : (
                      <FaChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-transform duration-300" />
                    )}
                  </div>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Still have questions? We're here to help!
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default FAQSection; 