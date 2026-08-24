import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const leaveWhyPillars = [
  { title: "📑 100% Digital Leave Requests", titleClass: "text-primary font-bold block mb-1", desc: "Mechanics submit leave applications from app without oral disputes or paper slips" },
  { title: "⚖️ Automatic Leave Quota Tracker", titleClass: "text-orange-600 font-bold block mb-1", desc: "Real-time balances for Paid Leave (PL), Sick Leave (SL), and Casual Leave (CL)" },
  { title: "⚡ 1-Click Owner Approvals", titleClass: "text-emerald-600 font-bold block mb-1", desc: "Review technician workloads and approve or reject leave applications remotely" },
  { title: "💸 Auto Loss-of-Pay Payroll Sync", titleClass: "text-amber-600 font-bold block mb-1", desc: "Unpaid leave days automatically deduct from monthly mechanic salary slips" }
];

export default function LMDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Staff Leave & Absence Management
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Smarter <GradientUnderline>Mechanic Leave Tracking</GradientUnderline> & Payroll Integration
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>GarageSaarthi Leave Management Software</strong> provides a centralized digital attendance and leave portal for auto repair workshops, body shops, and car service centers.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Maintain full transparency between workshop managers and mechanics while ensuring accurate salary payouts and loss-of-pay deductions.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Why Garage Owners Need Digital Leave Software:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {leaveWhyPillars.map((item, idx) => (
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
