import React from "react";
import { FaCalendarAlt, FaCarSide, FaExchangeAlt, FaWhatsapp, FaUserCheck, FaClock } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const capabilities = [
  {
    icon: <FaCalendarAlt className="w-6 h-6 text-primary" />,
    title: "Calendar & List Views",
    description: "Switch seamlessly between Day, Week, and Month calendar grids or an actionable table list to manage daily workshop volume.",
    badge: "Flexible View",
  },
  {
    icon: <FaCarSide className="w-6 h-6 text-amber-600" />,
    title: "Doorstep Pickup & Drop",
    description: "Record customer addresses, generate 1-click Google Maps links for drivers, and track vehicle transit from doorstep to workshop.",
    badge: "Doorstep Service",
  },
  {
    icon: <FaExchangeAlt className="w-6 h-6 text-emerald-600" />,
    title: "1-Click Job Card Conversion",
    description: "When the vehicle arrives at the workshop, convert the appointment directly into an active digital job card in one click with zero retyping.",
    badge: "Zero Retyping",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6 text-green-600" />,
    title: "Automated WhatsApp Alerts",
    description: "Send instant WhatsApp booking confirmations, driver assignment details with contact numbers, and completion notifications to car owners.",
    badge: "WhatsApp Integration",
  },
  {
    icon: <FaUserCheck className="w-6 h-6 text-cyan-600" />,
    title: "Driver & Technician Assignment",
    description: "Assign specific drivers for pickup/delivery and assign designated service advisors to greet customers upon arrival.",
    badge: "Team Management",
  },
  {
    icon: <FaClock className="w-6 h-6 text-purple-600" />,
    title: "No-Show & Rescheduling",
    description: "Easily reschedule appointments, track cancellations, and minimize workshop idle time with intelligent slot management.",
    badge: "Bay Efficiency",
  },
];

export default function AppointmentsCoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Comprehensive Booking Suite
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Key Capabilities of <GradientUnderline>Appointment & Pickup Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything you need to streamline customer scheduling, doorstep logistics, and workshop bay allocation in one modern cloud software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-primary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center">
                    {cap.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                    {cap.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
