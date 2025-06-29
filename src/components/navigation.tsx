"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before applying scroll-dependent styles
  useEffect(() => {
    setMounted(true);
  }, []);

  // Jakob's Law: Familiar scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  // Miller's Law: 5-7 navigation items
  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Health Tracks', href: '#health-tracks' },
    { name: 'Membership', href: '#membership' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mounted && isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center flex-shrink-0"
          >
            <div className="text-2xl font-bold text-[#2C2C2C]">
              Pryme
              <span className="text-[#C4825B]">.</span>
            </div>
          </motion.div>

          {/* Modern Button Navigation - Always Visible */}
          <div className="flex items-center justify-center flex-1 mx-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-full border border-transparent hover:border-[#C4825B] hover:bg-[#F8F5F0] font-medium transition-all duration-200 text-sm sm:text-base ${
                    mounted && isScrolled ? 'text-[#2C2C2C]' : 'text-[#2C2C2C]'
                  } hover:text-[#C4825B] hover:shadow-sm`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA Button - Hick's Law: Single primary action */}
          <div className="flex items-center flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C4825B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#B07654] transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Join Waitlist
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;