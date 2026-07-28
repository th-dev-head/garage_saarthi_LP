import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const lmWorkshopTypes = [
  {
    title: "Car Service Centers",
    badge: "4-Wheeler",
    desc: "Manage leave schedules for senior mechanics, electricians, and diagnostic specialists without disrupting service bay slots."
  },
  {
    title: "Bike Repair Outlets",
    badge: "2-Wheeler",
    desc: "Track quick leave applications for high-frequency mechanics and helpers to maintain daily job card turnaround."
  },
  {
    title: "Auto Body & Paint Shops",
    badge: "Body Shop",
    desc: "Plan leave coverage for denters and painters to avoid bottlenecks on long-term vehicle restoration projects."
  },
  {
    title: "Multi-Branch Auto Chains",
    badge: "Multi-Branch",
    desc: "Centralized leave approval dashboard across all branch workshops with unified attendance and payroll records."
  }
];

export default function LMWorkshopTypes() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Tailored Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Built for Every Type of <GradientUnderline>Auto Workshop & Garage</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Staff leave & absence management software designed to fit single-bay garages and multi-city workshop networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lmWorkshopTypes.map((ws, idx) => (
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
