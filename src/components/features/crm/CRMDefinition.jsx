import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function CRMDefinition() {
  const highlights = [
    { title: "🎯 Lead Tracking", desc: "Capture phone & walk-in leads", color: "text-primary" },
    { title: "🔔 Follow-up Alerts", desc: "Automated WhatsApp reminders", color: "text-orange-600" },
    { title: "📜 History Linked", desc: "Past repair records in 1 click", color: "text-emerald-600" },
    { title: "📈 Retention Boost", desc: "35% higher repeat visits", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Garage CRM & Lead Management
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Customer Retention & <GradientUnderline>Lead Tracking Software</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage CRM Software</strong> is a customer relationship and lead management system designed specifically for auto repair workshops, car service centers, and bike garages.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Stop losing potential repair customers due to forgotten follow-up calls or lost phone numbers. Track customer inquiry pipelines, log service preferences, and send automated WhatsApp reminders to bring vehicle owners back to your shop.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Key Features of Garage CRM:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={`${item.color} font-bold block mb-1`}>{item.title}</span>
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
