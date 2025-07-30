"use client";
import React, { useEffect, useState } from "react";
import { FaRocket, FaChartLine, FaMagic } from "react-icons/fa";

const Hero = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating blobs with animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: "3s" }} />

      {/* SVG pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-gray-700 dark:text-gray-300 mb-8 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <FaRocket className="mr-2 text-blue-600" />
          AI-Powered Marketing Suite
        </div>

        {/* Main headline */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-150 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Transform Your
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Marketing
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Revolutionize your marketing with AI-powered tools that generate results. 
          <span className="font-semibold text-blue-600"> 40% average ROI increase</span> in the first 30 days.
        </p>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center">
              Get Started Free
              <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
            Watch Demo
    </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">AI Support</div>
          </div>
        </div>
        {/* Trust indicators (optional) */}
        {/* <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Trusted by leading companies</p>
        <div className="flex justify-center items-center space-x-8 opacity-60">
          <div className="w-20 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-20 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-20 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-20 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div> */}
      </div>
  </section>
);
};

export default Hero;