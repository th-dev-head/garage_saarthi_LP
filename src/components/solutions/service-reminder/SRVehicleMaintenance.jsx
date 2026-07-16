import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function SRVehicleMaintenance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          B2B Workshop Tool
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Manage Vehicle Maintenance Reminders from <GradientUnderline>One Unified System</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Unlike personal vehicle reminder apps for individual car owners, GarageSaarthi is designed specifically for garages, mechanics, and multi-brand service centers. Maintain structured service, repair, and maintenance tracking for hundreds of customer vehicles under one cloud platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {[
            { title: "Periodic Maintenance", desc: "Track regular engine oil, filter, and coolant cycles." },
            { title: "Routine Vehicle Service", desc: "Manage periodic general check-ups." },
            { title: "Scheduled Follow-Ups", desc: "Remind customers about critical re-orders." },
            { title: "Service Records", desc: "Maintain permanent, vehicle-specific service records." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm text-left">
              <h3 className="text-xs font-bold text-text-dark mb-1.5">{item.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}