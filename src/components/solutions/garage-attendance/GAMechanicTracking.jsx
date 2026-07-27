import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const trackingStats = [
  { label: "Active Mechanics Checked-In", count: "8 Present", countClass: "font-bold text-emerald-600" },
  { label: "Helpers present", count: "3 Present", countClass: "font-bold text-slate-800" }
];

export default function GAMechanicTracking() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">Daily Roster</span>
              <p className="text-sm font-bold text-slate-800">Mechanic Staff Tracking</p>
            </div>
            <div className="space-y-2">
              {trackingStats.map((item, idx) => (
                <div key={idx} className="flex justify-between text-xs text-slate-600">
                  <span>{item.label}</span>
                  <span className={item.countClass}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Mechanics List
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Track Mechanic Attendance in <GradientUnderline>One Organized System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Automobile workshops rely heavily on mechanics, helpers, and denting techs. Log check-ins directly on our mechanic staff attendance system so you have an accurate roster of who is available to assign incoming vehicles.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            By maintaining check-in files on our mechanic attendance app, you reduce payroll disputes and keep daily team details structured.
          </p>
        </div>
      </div>
    </section>
  );
}

