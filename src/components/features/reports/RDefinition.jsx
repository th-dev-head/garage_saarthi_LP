import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const rWhyPillars = [
  { title: "📈 Real-Time Revenue Dashboards", titleClass: "text-primary font-bold block mb-1", desc: "Monitor daily, weekly, and monthly counter sales & job card earnings live" },
  { title: "📦 Inventory Fast/Slow Motion", titleClass: "text-orange-600 font-bold block mb-1", desc: "Identify top-selling spare parts vs dead stock capital tie-ups instantly" },
  { title: "🛠️ Mechanic Labor Efficiency", titleClass: "text-emerald-600 font-bold block mb-1", desc: "Track job completion speed, re-work rates, and labor revenue per technician" },
  { title: "📄 1-Click Excel & PDF Exports", titleClass: "text-amber-600 font-bold block mb-1", desc: "Download GSTR-1, GSTR-3B, and financial summaries for CA audit in seconds" }
];

export default function RDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Data-Driven Workshop Intelligence
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Make Smarter Business Decisions with <GradientUnderline>Garage Analytics</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Reports & Analytics Software</strong> compiles your billing, inventory, mechanic activity, and customer data into visual graphs and automated performance summaries.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Eliminate guesswork. Stop relying on paper diaries or manual spreadsheets at month-end to understand where your garage is making or losing money.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Analytics are Crucial for Garages:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {rWhyPillars.map((item, idx) => (
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
