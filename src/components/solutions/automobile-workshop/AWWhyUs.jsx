import React from "react";
import {
  FaTools, FaRoute, FaClipboardList, FaFileInvoiceDollar,
  FaBoxOpen, FaUserFriends, FaBell, FaWhatsapp,
  FaUsers, FaBuilding, FaLaptop, FaCheckCircle
} from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const differentiators = [
  {
    icon: <FaTools className="w-5 h-5" />,
    title: "Industry-Specific Design",
    desc: "Built specifically for automotive garage and workshop operations, ensuring features speak your garage language.",
  },
  {
    icon: <FaRoute className="w-5 h-5" />,
    title: "End-to-End Workflow",
    desc: "Provides a complete repair workflow from estimates to final payments and post-service reminders.",
  },
  {
    icon: <FaClipboardList className="w-5 h-5" />,
    title: "100% Digital Job Cards",
    desc: "Digital job cards remove paper loss risks entirely and keep repair records permanently saved in the cloud.",
  },
  {
    icon: <FaFileInvoiceDollar className="w-5 h-5" />,
    title: "GST-Ready Billing",
    desc: "Instant GST billing with automatic SGST/CGST calculations for spare parts and mechanic labor services.",
  },
  {
    icon: <FaBoxOpen className="w-5 h-5" />,
    title: "Real-Time Inventory",
    desc: "Live inventory management helps track spare parts stock, purchases, and provides low-stock warning alerts.",
  },
  {
    icon: <FaUserFriends className="w-5 h-5" />,
    title: "Unified Service History",
    desc: "Consolidated customer profiles and vehicle service histories are automatically pulled for returning vehicles.",
  },
  {
    icon: <FaBell className="w-5 h-5" />,
    title: "Smart Service Reminders",
    desc: "Automated periodic service reminders bring customers back precisely on schedule, growing repeat sales.",
  },
  {
    icon: <FaWhatsapp className="w-5 h-5 text-green-500 animate-pulse" />,
    title: "Direct WhatsApp Alerts",
    desc: "Direct WhatsApp alerts send PDF estimates and invoice links, ensuring swift customer approvals.",
  },
  {
    icon: <FaUsers className="w-5 h-5" />,
    title: "Staff & Commission Logs",
    desc: "Staff management log mechanic entries, calculate wages, and compute technician commissions automatically.",
  },
  {
    icon: <FaBuilding className="w-5 h-5" />,
    title: "Multi-Branch Control",
    desc: "Centrally control multiple workshop outlets under a single account with consolidated real-time analytics.",
  },
  {
    icon: <FaLaptop className="w-5 h-5" />,
    title: "Cross-Device Access",
    desc: "Flexible cloud access on desktop web browsers or native Android and iOS mobile applications for workshop floor advisors.",
  },
  {
    icon: <FaCheckCircle className="w-5 h-5" />,
    title: "Risk-Free Onboarding",
    desc: "Start with a 7-day free trial without credit card details. Includes free import assistance for existing data.",
  },
];

export default function AWWhyUs() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why GarageSaarthi?
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Why Automobile Workshops <GradientUnderline>Use GarageSaarthi?</GradientUnderline>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover the key reasons why workshop owners trust GarageSaarthi to automate their daily operations, retain customers, and grow revenues.
          </p>
        </div>

        {/* List of differentiators in premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white hover:border-primary/20 group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

