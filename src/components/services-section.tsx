"use client";
import { motion } from "framer-motion";
import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Comprehensive Care",
      description: "Holistic health management with personalized treatment plans tailored to your unique needs and lifestyle.",
      features: ["Annual physical exams", "Preventive screenings", "Chronic disease management", "Wellness planning"]
    },
    {
      title: "24/7 Access",
      description: "Direct communication with your physician team through secure messaging, telehealth, and urgent care.",
      features: ["Same-day appointments", "Telehealth consultations", "Direct physician messaging", "After-hours support"]
    },
    {
      title: "Executive Health",
      description: "Comprehensive health optimization for busy professionals who demand excellence in their healthcare.",
      features: ["Executive physicals", "Concierge coordination", "Travel medicine", "Performance optimization"]
    }
  ];

  return (
    <section id="services" className="w-full bg-[#FEFCF8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#1A1A1A] mb-6">
              Comprehensive Care
            </h2>
            <p className="font-sans text-xl text-[#6B6B6B] font-light max-w-2xl mx-auto">
              Healthcare that adapts to your life, not the other way around.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-serif text-2xl font-medium text-[#1A1A1A] mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-[#6B6B6B] leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="font-sans text-[#6B6B6B] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;