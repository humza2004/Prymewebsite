"use client";
import { motion } from "framer-motion";
import React from "react";

const TrustSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F3F0] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Soft Horizontal Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-[#6B6B6B] mx-auto mb-16"
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-[#1A1A1A] mb-8">
            Led By Physicians.
            <br />
            <span className="italic">Enter Your Prime.</span>
          </h2>
          
          <p className="font-sans text-xl sm:text-2xl text-[#6B6B6B] font-light leading-relaxed max-w-2xl mx-auto">
            Powered by insight. Inspired by innovation.
          </p>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-[#6B6B6B] mx-auto mt-16"
        />

        {/* Future Logo Placement Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 h-16 flex items-center justify-center"
        >
          {/* Placeholder for future logos */}
          <div className="text-[#A1A1A1] text-sm font-medium tracking-widest uppercase opacity-40">
            Trusted Partners
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;