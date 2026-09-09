import React from "react";
import { FaCalendarAlt, FaExchangeAlt, FaWhatsapp, FaClock, FaCheckCircle, FaCarSide } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const corePillars = [
  {
    icon: <FaCalendarAlt className="w-6 h-6 text-primary" />,
    title: "Calendar & Table Switcher",
    desc: "View scheduled bookings in Day, Week, or Month calendar views to balance technician workload and bay utilization.",
  },
  {
    icon: <FaExchangeAlt className="w-6 h-6 text-emerald-600" />,
    title: "1-Click Job Card Inward",
    desc: "Convert arriving appointments into digital job cards with pre-filled customer details, car model, and reported complaints.",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6 text-green-600" />,
    title: "WhatsApp Booking Notifications",
    desc: "Auto-send instant booking confirmations, driver details with contact numbers, and service completion alerts.",
  },
  {
    icon: <FaClock className="w-6 h-6 text-purple-600" />,
    title: "No-Show & Rescheduling Control",
    desc: "Track cancelled slots, reschedule bookings with customer consent, and eliminate idle workshop floor time.",
  },
];

export default function GApCalendarSlots() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Intelligent Capacity Planning
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Optimize Workshop Bays with <GradientUnderline>Smart Slot Scheduling</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate morning workshop traffic jams. Distribute service intake evenly throughout the day, assign dedicated bays, and keep technicians productive with zero downtime.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3 shadow-2xs hover:border-primary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
