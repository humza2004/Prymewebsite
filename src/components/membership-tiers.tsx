"use client";
import { motion } from "framer-motion";
import React from "react";

const MembershipTiers: React.FC = () => {
  const tiers = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Perfect for those starting their health optimization journey",
      features: [
        "Quarterly health assessments",
        "Basic lab panel (2x/year)",
        "Telehealth consultations",
        "Health coaching sessions",
        "Digital health tracking"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$499", 
      period: "/month",
      description: "Comprehensive care for serious health optimization",
      features: [
        "Monthly health assessments",
        "Advanced lab panels (4x/year)",
        "24/7 telehealth access",
        "Weekly health coaching",
        "Genetic testing included",
        "Specialist consultations",
        "Personalized supplement protocols"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "$799",
      period: "/month", 
      description: "The ultimate in personalized healthcare and longevity",
      features: [
        "Bi-weekly health assessments",
        "Comprehensive lab panels (6x/year)",
        "Unlimited telehealth access",
        "Daily health coaching availability",
        "Advanced genetic & epigenetic testing",
        "Multiple specialist consultations",
        "Custom supplement formulations",
        "Concierge health services"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#2C2C2C]"
          >
            Choose Your Membership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6B6B6B] max-w-2xl mx-auto"
          >
            Join as a founding member and save on premium healthcare
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-[#C27C54] scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#C27C54] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-[#2C2C2C]">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#C27C54]">{tier.price}</span>
                  <span className="text-[#6B6B6B]">{tier.period}</span>
                </div>
                <p className="text-[#6B6B6B]">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-[#C27C54] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#6B6B6B]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 ${
                tier.popular 
                  ? 'bg-[#C27C54] text-white hover:bg-[#A66A47] shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                  : 'bg-[#F8F5F0] text-[#C27C54] hover:bg-[#F0EBE3] border border-[#C27C54]'
              }`}>
                Join Waitlist
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;
