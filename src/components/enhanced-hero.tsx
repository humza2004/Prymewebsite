"use client";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

// Dynamically import ThanosSnapEffect with SSR disabled to prevent hydration mismatch
const ThanosSnapEffect = dynamic(
  () => import("@/components/ui/thanos-snap-effect").then((mod) => ({ default: mod.ThanosSnapEffect })),
  { ssr: false }
);

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-6xl mx-auto">
        {/* Highlight Badge - Von Restorff Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mb-12 border border-white/20"
        >
          <span className="w-3 h-3 bg-[#C4825B] rounded-full mr-3 animate-pulse"></span>
          <span className="text-sm font-semibold text-[#2C2C2C] tracking-wide">
            Immediate telehealth access + 24/7 doctor support
          </span>
        </motion.div>

        {/* Main Headline - Miller's Law: Chunked for readability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#2C2C2C] max-w-5xl">
            Modern medicine that{" "}
            <span className="text-[#C4825B] relative">
              listens, learns,
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C4825B]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>{" "}
            and works for you
          </h1>
        </motion.div>

        {/* Subheadline - Miller's Law: Concise and chunked */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-[#6B6B6B] mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Join our founding members for exclusive access to personalized healthcare 
          that adapts to your unique needs and lifestyle.
        </motion.p>

        {/* Primary CTA - Hick's Law: Single focused action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Primary Button - Fitts's Law: Large, accessible */}
          <ThanosSnapEffect>
            <button className="bg-[#C4825B] text-white px-16 py-6 rounded-full hover:bg-[#B07654] transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 min-w-[280px] sm:min-w-[320px] relative overflow-hidden group">
              <span className="relative z-10">Join the Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B07654] to-[#C4825B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </ThanosSnapEffect>
          
          {/* Secondary Action - Subtle, non-competing */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-[#6B6B6B] hover:text-[#C4825B] transition-colors duration-200 font-medium text-lg flex items-center gap-2 group"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn how it works
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.button>
        </motion.div>

        {/* Trust Indicators - Aesthetic-Usability Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-sm text-[#6B6B6B]/80"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C4825B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C4825B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C4825B]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Licensed Physicians</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHero;