"use client";
import { motion } from "framer-motion";
import React from "react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Complete Your Health Assessment",
      description: "Share your health history, goals, and preferences through our comprehensive intake process."
    },
    {
      number: "02", 
      title: "Get Matched with Your Care Team",
      description: "We pair you with doctors and specialists who understand your unique health profile and goals."
    },
    {
      number: "03",
      title: "Receive Your Personalized Plan",
      description: "Get a tailored health plan with specific recommendations, treatments, and lifestyle guidance."
    },
    {
      number: "04",
      title: "Start Your Health Journey",
      description: "24/7 access to your care team, regular check-ins, and continuous plan adjustments based on your progress."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C2C2C]"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6B6B6B] max-w-2xl mx-auto"
          >
            Your journey to better health starts with a simple, personalized approach
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#C27C54] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C2C2C]">
                {step.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
