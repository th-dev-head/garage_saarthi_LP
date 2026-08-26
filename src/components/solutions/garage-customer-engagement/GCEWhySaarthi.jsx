import React from "react";
import { FaSuitcase, FaUserCheck, FaRegBell, FaUsers, FaTags, FaLink, FaMobileAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEWhySaarthi() {
  const features = [
    { icon: <FaSuitcase className="text-orange-500" />, title: "Built for Automotive Workshops", desc: "Designed around repair shop terminology, mechanic slots, and standard garage tasks." },
    { icon: <FaUserCheck className="text-blue-500" />, title: "Customer & Vehicle Records Together", desc: "Access customer data side-by-side with odometer numbers, fuel types, and insurance deadlines." },
    { icon: <FaRegBell className="text-green-500" />, title: "Service Reminder Automation", desc: "Deploy WhatsApp messaging workflows based on real service logs and dates." },
    { icon: <FaUsers className="text-purple-500" />, title: "Garage CRM", desc: "Manage leads, walk-ins, phone bookings, and call follow-up logs from a unified dashboard." },
    { icon: <FaTags className="text-red-500" />, title: "Offers & Promotions", desc: "Generate coupons and discounts to bring back clients who haven't visited in over 90 days." },
    { icon: <FaLink className="text-teal-500" />, title: "Connected with Garage Operations", desc: "Customer updates are linked directly to active job cards, billing sheets, and spare stocks." },
    { icon: <FaMobileAlt className="text-slate-600" />, title: "Web & Mobile Access", desc: "Access the backend systems from any standard browser or our dedicated Android & iOS mobile apps." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why GarageSaarthi
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Use GarageSaarthi for Garage <GradientUnderline>Customer Engagement</GradientUnderline>?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Standard customer relationship apps don't understand job cards or spare parts. GarageSaarthi provides a specialized customer solution tailored directly for Indian automobile workshops.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((ft, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="bg-white w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center text-sm shadow-xs">
                {ft.icon}
              </div>
              <h3 className="text-xs font-bold text-slate-900">{ft.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{ft.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
