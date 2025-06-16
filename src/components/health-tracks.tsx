"use client";
import { motion } from "framer-motion";
import React from "react";

const HealthTracks: React.FC = () => {
  const tracks = [
    {
      title: "Longevity & Anti-Aging",
      description: "Comprehensive approach to extending healthspan through cutting-edge interventions and lifestyle optimization.",
      features: ["Biological age testing", "Hormone optimization", "Cellular health protocols", "Advanced supplementation"]
    },
    {
      title: "Metabolic Health",
      description: "Optimize your metabolism for sustained energy, weight management, and disease prevention.",
      features: ["Continuous glucose monitoring", "Metabolic flexibility training", "Personalized nutrition", "Body composition analysis"]
    },
    {
      title: "Mental Performance",
      description: "Enhance cognitive function, focus, and mental resilience through targeted interventions.",
      features: ["Cognitive assessments", "Nootropic protocols", "Stress management", "Sleep optimization"]
    },
    {
      title: "Athletic Performance",
      description: "Maximize physical performance and recovery for athletes and fitness enthusiasts.",
      features: ["Performance testing", "Recovery protocols", "Injury prevention", "Training optimization"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C2C2C]"
          >
            Specialized Health Tracks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6B6B6B] max-w-2xl mx-auto"
          >
            Targeted programs designed for your specific health goals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#2C2C2C]">
                {track.title}
              </h3>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                {track.description}
              </p>
              <ul className="space-y-3">
                {track.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-[#C27C54] rounded-full mr-3"></div>
                    <span className="text-[#6B6B6B]">{feature}</span>
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

export default HealthTracks;
