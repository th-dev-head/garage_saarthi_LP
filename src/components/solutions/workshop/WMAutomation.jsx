import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaClock, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const automationFeatures = [
  { icon: FaWhatsapp, title: "Auto WhatsApp Alerts", desc: "Send PDF estimates, job card entries, and bills automatically." },
  { icon: FaClock, title: "Real-time Status Updates", desc: "Automatically update customers as their vehicles move from inspection to ready." },
  { icon: FaCalendarAlt, title: "Recurring Service Reminders", desc: "Schedule automatic alerts based on vehicle service intervals." }
];

export default function WMAutomation() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column — Text Info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Automated Operations
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-snug">
              Save Hours Every Day with{" "}
              <GradientUnderline>Smart Workshop Automation.</GradientUnderline>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Eliminate manual follow-ups and data entry. GarageSaarthi automates the repetitive parts of running your workshop, ensuring your team focuses on vehicle repairs while the system handles the paperwork and notifications.
            </p>

            <div className="space-y-4 mb-8">
              {automationFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/features/automation"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors text-sm"
            >
              Explore Automation Features <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Column — Illustrative Visual Card */}
          <div className="bg-slate-100 border border-slate-200/80 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
            <div className="border border-slate-100 bg-white rounded-xl p-5 shadow-sm mb-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <span className="text-xs font-bold text-slate-800">Job Card #GS-9900</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                  Completed
                </span>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <p><strong>Vehicle:</strong> Maruti Baleno (GJ 09 BK 0001)</p>
                <p><strong>Mechanic:</strong> Ramesh Kumar</p>
                <p><strong>Status:</strong> Service Done, Ready for Delivery</p>
              </div>
            </div>
            <div className="border border-slate-100 bg-white rounded-xl p-5 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">WhatsApp Notification Sent</span>
              <div className="text-xs text-slate-700 bg-[#EFE9E7]/50 p-4 rounded-xl border-l-4 border-primary font-sans">
                <p>Hello <strong>Ramesh Malaviya</strong>,</p>
                <p className="mt-3">Work update for your vehicle <strong>GJ 09 BK 0001</strong> at <strong>Sodhi Auto Garage</strong>.</p>
                <p className="mt-3"><strong>Work has been completed ✅. You may visit the garage for pickup.</strong></p>
                <p className="mt-3">Garage Contact: <strong>9999955555</strong></p>
                <p>Address: <strong>101, Royal Square, Surat, Gujarat</strong></p>
                <p className="mt-3 text-[10px] text-slate-500 font-medium">Powered by GarageSaarthi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


