import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const srWhyPillars = [
  { title: "⏰ Automated Scheduling", titleClass: "text-primary font-bold block mb-1", desc: "Auto calculates next service date" },
  { title: "💬 1-Click WhatsApp Alerts", titleClass: "text-orange-600 font-bold block mb-1", desc: "Send pre-formatted reminder notes" },
  { title: "📅 Booking Calendar Sync", titleClass: "text-emerald-600 font-bold block mb-1", desc: "Direct customer slot booking" },
  { title: "📈 +35% Repeat Retention", titleClass: "text-amber-600 font-bold block mb-1", desc: "Bring existing clients back regularly" }
];

export default function SRDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Automated Vehicle Reminders
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Bring Customers Back On Time with <GradientUnderline>Smart Service Alerts</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Service Reminder Software</strong> automatically tracks periodic maintenance schedules (3-month, 6-month, or KM intervals) based on customer invoice history.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Instead of manually scrolling through Excel sheets or missing follow-ups, your workshop system sends automated WhatsApp messages, keeping your service bays continuously filled.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Automated Service Reminders Matter:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {srWhyPillars.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={item.titleClass}>{item.title}</span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
