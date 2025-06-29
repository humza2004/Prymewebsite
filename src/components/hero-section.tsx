"use client";
import { motion } from "framer-motion";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#FEFCF8] flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEFCF8] via-[#F9F7F4] to-[#F5F3F0] opacity-60"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] text-[#1A1A1A] mb-6">
            Concierge Care
            <br />
            <span className="italic">Reimagined</span>
          </h1>
          
          <p className="font-sans text-xl sm:text-2xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-light">
            Experience healthcare designed around you—comprehensive, accessible, and deeply personal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-[#1A1A1A] text-white px-12 py-4 font-medium hover:bg-[#2C2C2C] transition-all duration-200 text-lg tracking-wide">
            Schedule Consultation
          </button>
          <button className="text-[#1A1A1A] hover:text-[#6B6B6B] transition-colors duration-200 font-medium text-lg tracking-wide">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#6B6B6B]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-[#6B6B6B] mb-2"
        />
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;