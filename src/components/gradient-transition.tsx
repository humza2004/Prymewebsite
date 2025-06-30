"use client";
import { motion } from "framer-motion";
import React from "react";

const GradientTransition: React.FC = () => {
  return (
    <motion.section 
      className="relative h-32 sm:h-40 lg:h-48 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Main gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F0] via-[#FDFCFA] to-white"></div>
      
      {/* Animated overlay gradients for smooth blending */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#C27C54]/20 via-[#C27C54]/10 to-transparent"
        animate={{
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#8B9A8C]/15 via-[#8B9A8C]/8 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80"></div>
      
      {/* Bottom fade to pure white */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Floating particles for enhanced transition */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#C27C54]/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#8B9A8C]/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#F0EBE3]/60 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </motion.section>
  );
};

export default GradientTransition;
