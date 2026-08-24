import React from "react";
import { FaBell, FaCalendarCheck, FaComments, FaCar, FaShieldAlt, FaChartLine } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const srCoreCapabilities = [
  {
    icon: FaCalendarCheck,
    title: "Periodic Service Due Alerts",
    desc: "Automatically schedule 3-month, 6-month, or 10,000 KM general service alerts connected to customer invoice dates."
  },
  {
    icon: FaComments,
    title: "Direct WhatsApp Delivery",
    desc: "Send personalized reminder texts with vehicle details, offer coupons, and direct booking links straight to WhatsApp."
  },
  {
    icon: FaCar,
    title: "Component Specific Intervals",
    desc: "Track mileage-based replacements for brake pads, transmission fluid, spark plugs, and air filter changes."
  },
  {
    icon: FaShieldAlt,
    title: "Insurance & PUC Expiry Alerts",
    desc: "Alert car and bike owners before their motor insurance or PUC certification expires to add high-margin service value."
  },
  {
    icon: FaBell,
    title: "Customer Call Back Log",
    desc: "Enable service advisors to log customer responses, rescheduled visit dates, and call back comments in real time."
  },
  {
    icon: FaChartLine,
    title: "Retention Analytics",
    desc: "Monitor conversion rates of sent reminders to booked job cards and analyze repeat customer revenue metrics."
  }
];

export default function SRCoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Key Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Toolkit for <GradientUnderline>Automated Customer Retention</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your garage needs to schedule, dispatch, and track customer maintenance follow-ups effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {srCoreCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-100/60 text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
