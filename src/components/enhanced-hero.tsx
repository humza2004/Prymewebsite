"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { ThanosSnapEffect } from "@/components/ui/thanos-snap-effect";

const EnhancedHero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F8F5F0]">
      {/* Animated Gradient Background with Pryme Health Colors */}
      <AnimatedGradientBackground 
        startingGap={120}
        Breathing={true}
        gradientColors={[
          "#F8F5F0",    // Cream base
          "#FDFCFA",    // Cream light
          "#C27C54",    // Terracotta
          "#D4926B",    // Terracotta light
          "#8B9A8C",    // Sage
          "#F0EBE3",    // Cream dark
          "#F8F5F0"     // Back to cream
        ]}
        gradientStops={[0, 20, 40, 55, 70, 85, 100]}
        animationSpeed={0.015}
        breathingRange={8}
        topOffset={10}
        containerClassName="opacity-80"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Highlight Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8"
        >
          <span className="w-2 h-2 bg-[#C4825B] rounded-full mr-2"></span>
          <span className="text-sm font-medium text-[#6B6B6B]">
            Immediate telehealth access + 24/7 doctor support
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#2C2C2C] max-w-4xl"
        >
          Modern medicine that{" "}
          <span className="text-[#C27C54]">listens, learns,</span>{" "}
          and works for you
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-[#6B6B6B] mb-12 max-w-3xl mx-auto"
        >
          Join our founding members and get exclusive access to personalized healthcare 
          that adapts to your unique needs and lifestyle.
        </motion.p>

        {/* Single CTA Button with Thanos Snap Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center"
        >
          <ThanosSnapEffect>
            <button className="bg-[#C4825B] text-white px-12 py-5 rounded-full hover:bg-[#B07654] transition-all duration-200 font-semibold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              How we unlock your health
            </button>
          </ThanosSnapEffect>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHero;
