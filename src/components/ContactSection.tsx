import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Office Location",
      content: "Gomti Nagar, Lucknow ,India",
      color: "text-blue-600"
    },
    {
      icon: FaPhone,
      title: "Phone Number",
      content: "+91 9519884288",
      color: "text-green-600"
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      content: "abhinav09singh08@gmail.com",
      color: "text-purple-600"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM PST",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
          Let's Start a Conversation
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Ready to revolutionize your marketing strategy? Get in touch with our team and discover how ADmyBRAND can transform your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our team of marketing experts is here to help you succeed. Whether you have questions about our platform, need a demo, or want to discuss your marketing strategy, we're ready to assist you.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center ${info.color}`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Why Choose ADmyBRAND?
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>40% average ROI increase in first 30 days</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 AI-powered support</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Enterprise-grade security & compliance</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>50+ native integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 