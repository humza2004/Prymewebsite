"use client";
import { motion } from "framer-motion";
import React from "react";

const HowItWorks: React.FC = () => {
  // Miller's Law: 4 steps (within 7±2 limit)
  const steps = [
    {
      number: "01",
      title: "Complete Health Assessment",
      description: "Share your health history, goals, and preferences through our comprehensive intake process.",
      icon: "📋",
      color: "from-[#C4825B] to-[#D4926B]"
    },
    {
      number: "02", 
      title: "Get Matched with Care Team",
      description: "We pair you with doctors and specialists who understand your unique health profile and goals.",
      icon: "👥",
      color: "from-[#8B9A8C] to-[#A5B5A8]"
    },
    {
      number: "03",
      title: "Receive Personalized Plan",
      description: "Get a tailored health plan with specific recommendations, treatments, and lifestyle guidance.",
      icon: "📋",
      color: "from-[#C4825B] to-[#D4926B]"
    },
    {
      number: "04",
      title: "Start Your Journey",
      description: "24/7 access to your care team, regular check-ins, and continuous plan adjustments.",
      icon: "🚀",
      color: "from-[#8B9A8C] to-[#A5B5A8]"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 sm:px-8 bg-gradient-to-br from-[#F8F5F0] via-[#FDFCFA] to-[#F0EBE3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Aesthetic-Usability Effect */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-[#C4825B] rounded-full mr-2"></span>
            <span className="text-sm font-semibold text-[#6B6B6B] tracking-wide">
              SIMPLE PROCESS
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#2C2C2C] leading-tight"
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed"
          >
            Your journey to better health starts with a simple, personalized approach
          </motion.p>
        </div>

        {/* Steps Grid - Miller's Law: Chunked information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection Line - Visual hierarchy */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#C4825B]/30 to-transparent transform translate-x-6 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-white/20">
                {/* Step Number */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-[#2C2C2C] group-hover:text-[#C4825B] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4825B]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Hick's Law: Single focused action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
              Ready to get started?
            </h3>
            <p className="text-[#6B6B6B] mb-6 leading-relaxed">
              Join thousands of members who've transformed their health with personalized care.
            </p>
            
            {/* Primary CTA - Fitts's Law: Large, accessible */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C4825B] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#B07654] transition-all duration-300 shadow-lg hover:shadow-xl min-w-[240px]"
            >
              Start Your Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
