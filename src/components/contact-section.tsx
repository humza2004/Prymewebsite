"use client";
import { motion } from "framer-motion";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-8">
            Ready to Begin?
          </h2>
          <p className="font-sans text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Take the first step toward exceptional healthcare. Schedule your consultation today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <button className="bg-white text-[#1A1A1A] px-12 py-4 font-medium hover:bg-gray-100 transition-all duration-200 text-lg tracking-wide">
            Schedule Consultation
          </button>
          <button className="text-white hover:text-gray-300 transition-colors duration-200 font-medium text-lg tracking-wide">
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-sans text-white font-medium mb-2">Phone</h3>
              <p className="font-sans text-gray-300">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-sans text-white font-medium mb-2">Email</h3>
              <p className="font-sans text-gray-300">hello@pryme.health</p>
            </div>
            <div>
              <h3 className="font-sans text-white font-medium mb-2">Location</h3>
              <p className="font-sans text-gray-300">New York, NY</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;