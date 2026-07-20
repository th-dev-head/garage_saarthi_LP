import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GPWhySaarthi() {
  const points = [
    { title: "Automotive-Specific Module", desc: "Designed around repair jobs, mechanic commissions, helper daily rates, and labor allocations." },
    { title: "Ecosystem Integration", desc: "Commissions and job card records link directly to staff payroll profiles, eliminating manual entry." },
    { title: "Attendance & Leaves Linked", desc: "Check present days, paid leaves, and overtime metrics on a single payroll sheet." },
    { title: "Browser & Android Sync", desc: "Log shifts or check salary statuses on your desktop office browser or Android app." },
    { title: "Multi-Branch Roster", desc: "Maintain separate staff lists, role permissions, and payouts logs by location." },
    { title: "7-Day Free Trial", desc: "Start with full access to payroll, attendance, leaves, and user roles setup with no commitment." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Why Manage Garage Payroll <GradientUnderline>with GarageSaarthi?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover why workshops across India choose our platform to organize salary records, trace commissions, and manage attendance sheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-text-dark flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>{p.title}</span>
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
