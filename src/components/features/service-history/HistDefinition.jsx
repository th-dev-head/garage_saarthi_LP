import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function HistDefinition() {
  const highlights = [
    { title: "📜 Lifetime History Card", desc: "No date limitations on cloud files", color: "text-primary" },
    { title: "🔍 2s Record Lookup", desc: "Search instantly by plate or phone", color: "text-orange-600" },
    { title: "📦 Used Parts Tracking", desc: "Know what spares were changed", color: "text-emerald-600" },
    { title: "🔔 Maintenance Alerts", desc: "Calc due targets and remind clients", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              What is Vehicle Service History Management?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Keep Complete Vehicle Repair History <GradientUnderline>Organized Digitally</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Vehicle service record software</strong> creates a permanent digital repository for every repair job, engine check, parts replacement, and billing transaction performed in your workshop.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When a returning vehicle rolls onto your service floor, your advisors can instantly review past repair files to troubleshoot issues correctly. This saves time, eliminates guesswork, and raises workshop trust.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Core Benefits of Service Histories:
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
