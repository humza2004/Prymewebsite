"use client";
import { motion } from "framer-motion";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8F5F0] via-[#FDFCFA] to-[#F0EBE3] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-[#C27C54]/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-[#8B9A8C]/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#2C2C2C]">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-[#6B6B6B] mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of health-forward individuals who have already started their journey with Pryme Health. 
            Your future self will thank you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.button 
            className="bg-[#C27C54] text-white px-10 py-4 rounded-full hover:bg-[#A66A47] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Waitlist
          </motion.button>
          <motion.button 
            className="border-2 border-[#C27C54] text-[#C27C54] px-10 py-4 rounded-full hover:bg-[#C27C54] hover:text-white transition-all duration-200 font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#6B6B6B]"
        >
          <div className="flex items-center">
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center">
            <motion.div 
              className="w-3 h-3 bg-blue-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center">
            <motion.div 
              className="w-3 h-3 bg-purple-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <span>Founding member pricing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
