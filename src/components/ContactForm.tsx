"use client";
import React, { useState } from "react";
import { FaEnvelope, FaUser, FaPhone, FaBuilding } from "react-icons/fa";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Card from "./ui/Card";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card variant="glass" className="p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
      </Card>
    );
  }

  return (
    <Card variant="glass" className="p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Ready to transform your marketing? Let's discuss how ADmyBRAND can help your business grow.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            icon={FaUser}
            error={errors.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            icon={FaEnvelope}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            icon={FaBuilding}
            error={errors.company}
          />
          
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            icon={FaPhone}
            error={errors.phone}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Tell us about your marketing needs and goals..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-3 text-base ${
              errors.message 
                ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500"
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            loading={isSubmitting}
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm; 