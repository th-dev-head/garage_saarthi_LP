import React from "react";
import { FaWrench, FaSlidersH, FaFileAlt, FaReceipt, FaBoxes, FaUsers, FaRegBell, FaWhatsapp, FaClock, FaStore, FaChartLine, FaAndroid } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAWhySaarthi() {
  const points = [
    { icon: <FaWrench />, title: "Built for Automotive Workshops", desc: "Designed around mechanic work lanes, vehicle checklists, and parts logs." },
    { icon: <FaSlidersH />, title: "All-in-One Operations Platform", desc: "Centralize customer records, billing, payroll, and reports in one system." },
    { icon: <FaFileAlt />, title: "Digital Job Cards", desc: "Create and update repair tasks digitally, eliminating lost paper sheets." },
    { icon: <FaReceipt />, title: "GST Billing Workflows", desc: "Generate invoices with CGST/SGST layouts matching Indian workshop standards." },
    { icon: <FaBoxes />, title: "Inventory Management", desc: "Track spare stock balances, purchase invoices, and log counter sales." },
    { icon: <FaUsers />, title: "CRM & Customer Management", desc: "Organize customer registers and schedule follow-ups for inquiries." },
    { icon: <FaRegBell />, title: "Automated Service Reminders", desc: "Track periodic service dates and upcoming maintenance alerts." },
    { icon: <FaWhatsapp />, title: "WhatsApp Integration", desc: "Trigger pre-designed message templates directly from dashboard queues." },
    { icon: <FaClock />, title: "Attendance & Payroll", desc: "Track daily staff shifts and compile mechanic commission parameters." },
    { icon: <FaStore />, title: "Multi-Branch Management", desc: "Monitor total sales and active job sheets across branches centrally." },
    { icon: <FaChartLine />, title: "Garage Reports", desc: "Review daily collections, parts consumed, and branch comparisons." },
    { icon: <FaAndroid />, title: "Web & Android Access", desc: "Coordinate daily operations from browser dashboards or mobile app." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Choose GarageSaarthi for <GradientUnderline>Garage Automation</GradientUnderline>?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Many tools only handle billing or messaging. GarageSaarthi integrates every operational activity into a single workspace designed for Indian workshops.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="bg-white text-primary w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center text-sm shadow-xs">
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
