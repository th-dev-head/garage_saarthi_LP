import React from "react";
import { FaLaptop, FaMobileAlt, FaDatabase, FaCreditCard } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const differentiators = [
  {
    icon: <FaMobileAlt />,
    title: "Android & iOS Mobile App",
    desc: "Perform quick diagnostics, check parts stock, and update job progress logs from your phone."
  },
  {
    icon: <FaLaptop />,
    title: "Web Platform Access",
    desc: "Great for billing counters. Print invoices, manage parts listings, and track GST reports."
  },
  {
    icon: <FaDatabase />,
    title: "Unified Cloud Platform",
    desc: "Synchronized database ensures real-time updates across multiple mobile and web screens."
  },
  {
    icon: <FaCreditCard />,
    title: "Affordable Pricing Plans",
    desc: "Transparent subscription models with no hidden fees and a full 7-day free trial."
  }
];

export default function WAWhySaarthi() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Choose GarageSaarthi as Your{" "}
            <GradientUnderline>Workshop Management App?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi is designed specifically for automotive garage workflows. We provide a balance of features, performance, and affordable pricing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {differentiators.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 text-lg">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

