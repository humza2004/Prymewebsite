"use client";
import { motion } from "framer-motion";
import React from "react";

const WhatsIncluded: React.FC = () => {
  const features = [
    {
      icon: "🩺",
      title: "Comprehensive Health Assessment",
      description: "In-depth analysis of your current health status, medical history, and personal goals."
    },
    {
      icon: "👨‍⚕️",
      title: "Dedicated Care Team",
      description: "Personal physician, health coach, and specialists working together for your optimal health."
    },
    {
      icon: "📱",
      title: "24/7 Telehealth Access",
      description: "Instant access to your care team through our secure platform, anytime you need support."
    },
    {
      icon: "🧬",
      title: "Advanced Diagnostics",
      description: "Cutting-edge testing including genetics, biomarkers, and comprehensive lab panels."
    },
    {
      icon: "💊",
      title: "Personalized Treatment Plans",
      description: "Tailored interventions based on your unique biology, lifestyle, and health objectives."
    },
    {
      icon: "📊",
      title: "Continuous Monitoring",
      description: "Regular check-ins, progress tracking, and plan adjustments to ensure optimal outcomes."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C2C2C]"
          >
            What's Included
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6B6B6B] max-w-2xl mx-auto"
          >
            Everything you need for comprehensive, personalized healthcare
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C2C2C]">
                {feature.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
