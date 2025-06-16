"use client";
import { motion } from "framer-motion";
import React from "react";

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Executive",
      content: "Pryme Health completely transformed my approach to wellness. The personalized care and 24/7 access have been game-changing.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Entrepreneur", 
      content: "Finally, healthcare that actually understands my busy lifestyle. My energy levels and focus have never been better.",
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      role: "Physician",
      content: "As a doctor myself, I'm impressed by Pryme's evidence-based approach and the quality of their care team.",
      avatar: "EW"
    },
    {
      name: "James Thompson",
      role: "Investment Banker",
      content: "Having 24/7 access to my care team gives me peace of mind. This is what healthcare should be.",
      avatar: "JT"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Members" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Care Access" },
    { number: "50+", label: "Health Metrics Tracked" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C2C2C]"
          >
            Trusted by Health-Forward Individuals
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6B6B6B] max-w-2xl mx-auto"
          >
            Join thousands who have transformed their health with Pryme
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#C27C54] mb-2">
                {stat.number}
              </div>
              <div className="text-[#6B6B6B] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#C27C54] text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#2C2C2C]">{testimonial.name}</div>
                  <div className="text-[#6B6B6B] text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-[#6B6B6B] leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
