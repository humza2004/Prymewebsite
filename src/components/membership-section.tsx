"use client";
import { motion } from "framer-motion";
import React from "react";

const MembershipSection: React.FC = () => {
  return (
    <section id="membership" className="w-full bg-[#F5F3F0] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#1A1A1A] mb-8">
            Membership
          </h2>
          <p className="font-sans text-xl text-[#6B6B6B] font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Join a select community of individuals who prioritize their health and demand excellence in their care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-12 shadow-sm max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <div className="font-serif text-5xl font-medium text-[#1A1A1A] mb-2">
              $500
            </div>
            <div className="font-sans text-[#6B6B6B] text-lg">
              per month
            </div>
          </div>
          
          <div className="space-y-4 mb-10 text-left">
            {[
              "Unlimited office visits",
              "24/7 physician access",
              "Comprehensive annual physical",
              "Preventive care coordination",
              "Specialist referrals",
              "Prescription management"
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full mr-4"></div>
                <span className="font-sans text-[#6B6B6B]">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#1A1A1A] text-white py-4 px-8 font-medium hover:bg-[#2C2C2C] transition-all duration-200 tracking-wide">
            Apply for Membership
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-sans text-sm text-[#A1A1A1] mt-8"
        >
          Limited memberships available. Application required.
        </motion.p>
      </div>
    </section>
  );
};

export default MembershipSection;