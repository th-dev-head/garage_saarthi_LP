import React from "react";
import { FaWrench, FaLink, FaDatabase, FaWhatsapp, FaCalendarCheck, FaUsers, FaLaptopCode, FaCheck } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNWhySaarthi() {
  const points = [
    { icon: <FaWrench className="text-orange-500" />, title: "Built Specifically for Garages", desc: "Designed around automobile terms, repair jobs, mechanics, and spare parts logs." },
    { icon: <FaDatabase className="text-blue-500" />, title: "Connected Records", desc: "Sync customer profiles side-by-side with specific vehicle registry histories." },
    { icon: <FaLink className="text-green-500" />, title: "Integrated Alerts", desc: "Service reminders are generated directly from active job cards." },
    { icon: <FaWhatsapp className="text-teal-500" />, title: "WhatsApp Customer Notifications", desc: "Dispatch template-based WhatsApp texts in one click directly from browser/app." },
    { icon: <FaCalendarCheck className="text-red-500" />, title: "Service Due Reminder Management", desc: "Compile all upcoming oil, battery, and alignment due dates in one panel." },
    { icon: <FaUsers className="text-purple-500" />, title: "Garage CRM", desc: "Track walk-ins, schedule callback reminders, and manage inquiries centrally." },
    { icon: <FaLaptopCode className="text-slate-600" />, title: "Web, Android & iOS Access", desc: "Access the console from browser dashboards or our Android and iOS mobile apps." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Use GarageSaarthi for Garage <GradientUnderline>WhatsApp Notifications</GradientUnderline>?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Standalone reminder tools require manual copy-pasting. GarageSaarthi integrates WhatsApp messaging into your existing garage operational databases.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="bg-white w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center text-sm shadow-xs">
                {pt.icon}
              </div>
              <h3 className="text-xs font-bold text-slate-900">{pt.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
