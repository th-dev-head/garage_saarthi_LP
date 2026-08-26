import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const lWorkshopTypes = [
  {
    title: "Car Repair Garages",
    badge: "4-Wheeler",
    desc: "Manage heavy machinery equipment loans for lifts, wheel aligners, and diagnostic tools."
  },
  {
    title: "Bike Service Centers",
    badge: "2-Wheeler",
    desc: "Track small business loans, ramp financing, and working capital debt schedules."
  },
  {
    title: "Multi-Brand Auto Outlets",
    badge: "Multi-Brand",
    desc: "Unified loan dashboard for multi-branch equipment expansion and infrastructure loans."
  },
  {
    title: "Car Detailing Studios",
    badge: "Detailing",
    desc: "Track specialized paint booth financing, ceramic coating equipment, and partner loans."
  }
];

export default function LWorkshopTypes() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Tailored Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Built for Every Type of <GradientUnderline>Automotive Workshop</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Loan tracking software tailored for single-bay garages to large multi-branch centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lWorkshopTypes.map((ws, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-3xl space-y-3 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-primary bg-orange-50 px-2.5 py-1 rounded-full inline-block">
                {ws.badge}
              </span>
              <h3 className="text-base font-bold text-slate-900">{ws.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{ws.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
