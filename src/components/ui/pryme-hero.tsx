"use client"
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import AnimatedGradientBackground with SSR disabled to prevent hydration mismatch
const AnimatedGradientBackground = dynamic(
  () => import("@/components/ui/animated-gradient-background"),
  { ssr: false }
);

const PrymeHero = () => {
  return (
    <div className="relative w-full min-h-[300vh] bg-[#F8F5F0]">
      {/* Fixed Background */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden">
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
      </div>

      {/* Fixed Hero Content */}
      <div className="fixed inset-0 z-10 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        {/* Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8 pointer-events-auto"
        >
          <span className="w-2 h-2 bg-[#C27C54] rounded-full mr-2"></span>
          <span className="text-sm font-medium text-[#6B6B6B]">
            Immediate telehealth access + 24/7 doctor support
          </span>
        </motion.div>
      </div>

      {/* Text Reveal Section */}
      <div className="relative z-20">
        <TextRevealByWord
          text="Modern medicine that listens, learns, and works for you"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#2C2C2C]"
        />
      </div>

      {/* Fixed Bottom Content - appears after text reveal */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex flex-col items-center justify-end pb-20 pointer-events-none">
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-xl sm:text-2xl text-[#6B6B6B] mb-8 max-w-3xl mx-auto text-center px-4 pointer-events-auto"
        >
          Join our founding members and get exclusive access to personalized healthcare
          that adapts to your unique needs and lifestyle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 pointer-events-auto"
        >
          <button className="bg-[#C4825B] text-white px-8 py-4 rounded-full hover:bg-[#B07654] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Join the Waitlist
          </button>
          <a
            href="#how-it-works"
            className="flex items-center text-[#C27C54] hover:text-[#A66A47] transition-colors duration-200 font-medium text-lg"
          >
            Learn more
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col items-center text-[#6B6B6B] pointer-events-auto"
        >
          <span className="text-sm mb-2">Continue to explore</span>
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default PrymeHero;