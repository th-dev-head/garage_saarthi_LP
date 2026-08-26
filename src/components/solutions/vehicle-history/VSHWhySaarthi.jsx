import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHWhySaarthi() {
  const points = [
    { title: "Designed for Workshops", desc: "Optimized specifically for auto service, EV, and motorcycle repairs." },
    { title: "Instant Query Search", desc: "Retrieve any vehicle log in seconds by registration number." },
    { title: "Linked Timelines", desc: "Every job card, diagnostic checklist, and invoice automatically added." },
    { title: "Role-Based Access", desc: "Define permissions for mechanics, managers, and billing desk." },
    { title: "Centralized Database", desc: "No local data loss. Safe, secure cloud backups." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why GarageSaarthi
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Garages Use GarageSaarthi for <GradientUnderline>Vehicle Service Records</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-dark mb-2">{p.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}