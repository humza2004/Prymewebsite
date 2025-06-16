"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

const EnhancedHero: React.FC = () => {
  return React.createElement(
    "div",
    {
      className: "relative w-full h-screen overflow-hidden bg-[#F8F5F0]"
    },
    React.createElement(AnimatedGradientBackground, {
      startingGap: 120,
      Breathing: true,
      gradientColors: [
        "#F8F5F0",    // Cream base
        "#FDFCFA",    // Cream light
        "#C27C54",    // Terracotta
        "#D4926B",    // Terracotta light
        "#8B9A8C",    // Sage
        "#F0EBE3",    // Cream dark
        "#F8F5F0"     // Back to cream
      ],
      gradientStops: [0, 20, 40, 55, 70, 85, 100],
      animationSpeed: 0.015,
      breathingRange: 8,
      topOffset: 10,
      containerClassName: "opacity-80"
    }),
    React.createElement(
      "div",
      {
        className: "relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      },
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8"
        },
        React.createElement("span", {
          className: "w-2 h-2 bg-[#C27C54] rounded-full mr-2"
        }),
        React.createElement(
          "span",
          {
            className: "text-sm font-medium text-[#6B6B6B]"
          },
          "Immediate telehealth access + 24/7 doctor support"
        )
      ),
      React.createElement(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
          className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#2C2C2C] max-w-4xl"
        },
        "Modern medicine that ",
        React.createElement(
          "span",
          {
            className: "text-[#C27C54]"
          },
          "listens, learns,"
        ),
        " and works for you"
      ),
      React.createElement(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.6 },
          className: "text-xl sm:text-2xl text-[#6B6B6B] mb-8 max-w-3xl mx-auto"
        },
        "Join our founding members and get exclusive access to personalized healthcare that adapts to your unique needs and lifestyle."
      ),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.8 },
          className: "flex flex-col sm:flex-row gap-4 justify-center items-center"
        },
        React.createElement(
          "button",
          {
            className: "bg-[#C27C54] text-white px-8 py-4 rounded-full hover:bg-[#A66A47] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          },
          "Join the Waitlist"
        ),
        React.createElement(
          "a",
          {
            href: "#how-it-works",
            className: "flex items-center text-[#C27C54] hover:text-[#A66A47] transition-colors duration-200 font-medium text-lg"
          },
          "Learn more",
          React.createElement(
            "svg",
            {
              className: "w-5 h-5 ml-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            },
            React.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          )
        )
      ),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8, delay: 1.2 },
          className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#6B6B6B]"
        },
        React.createElement(
          "span",
          {
            className: "text-sm mb-2"
          },
          "Scroll to explore"
        ),
        React.createElement(
          motion.svg,
          {
            className: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            animate: { y: [0, 5, 0] },
            transition: { duration: 2, repeat: Infinity }
          },
          React.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M19 14l-7 7m0 0l-7-7m7 7V3"
          })
        )
      )
    )
  );
};

export default EnhancedHero;
