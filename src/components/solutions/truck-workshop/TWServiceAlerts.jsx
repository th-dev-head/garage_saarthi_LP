import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const alertPoints = [
  {
    title: "Upcoming Service Due Lists",
    desc: "GarageSaarthi keeps tabs on periodic heavy vehicle checkups, hub greasing schedules, and oil change frequencies to compile an active client follow-up list.",
  },
  {
    title: "Automated WhatsApp Alerts",
    desc: "Send polite, automated WhatsApp notifications containing vehicle number and inspection due details straight to logistics managers or individual truck operators.",
  },
  {
    title: "Digital Maintenance Timeline",
    desc: "Maintain complete vehicle service logs that are easy to access when customers inquire about past work, building commercial trust.",
  },
];

const truckRemindersPanelList = [
  { vehicle: "MH-12-XX-9876 (Tipper)", dueText: "Due: Wheel Hub Greasing", status: "3 Days Overdue", statusStyle: "bg-orange-100 text-orange-800" },
  { vehicle: "HR-55-XX-1122 (Trailer)", dueText: "Due: Brake Line Inspection", status: "Due Tomorrow", statusStyle: "bg-emerald-100 text-emerald-800" }
];

export default function TWServiceAlerts() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual block - Left Column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Service Reminders Panel
            </h4>
            <div className="space-y-3 text-xs">
              {truckRemindersPanelList.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200/30 p-3 rounded-2xl flex justify-between items-center shadow-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">{item.vehicle}</span>
                    <span className="text-[10px] text-slate-400">{item.dueText}</span>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.statusStyle}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Outbound Retention
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Follow Up on Truck Service with <GradientUnderline>Service Alerts</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Transport vehicles run high monthly mileage. Stay active. Set custom alerts for hub greasing, brake checkups, and periodic maintenance to bring transport fleets back to your bays.
            </p>

            <div className="space-y-4 pt-2">
              {alertPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/service-reminders/"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Service Alerts <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

