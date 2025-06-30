"use client";
import React from "react";

const SimpleHero: React.FC = () => {
  return React.createElement(
    "div",
    {
      className: "relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#F8F5F0] via-[#FDFCFA] to-[#F0EBE3] flex items-center justify-center"
    },
    React.createElement(
      "div",
      {
        className: "text-center px-4"
      },
      React.createElement(
        "h1",
        {
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
        "p",
        {
          className: "text-xl sm:text-2xl text-[#6B6B6B] mb-8 max-w-3xl mx-auto"
        },
        "Join our founding members and get exclusive access to personalized healthcare that adapts to your unique needs and lifestyle."
      ),
      React.createElement(
        "button",
        {
          className: "bg-[#C27C54] text-white px-8 py-4 rounded-full hover:bg-[#A66A47] transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        },
        "Join the Waitlist"
      )
    )
  );
};

export default SimpleHero;
