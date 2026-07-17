import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GADefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Attendance Records
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Garage Staff Attendance <GradientUnderline>Without Manual Registers</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Automobile workshop owners struggle to monitor mechanic shift check-ins due to scattered registers. Keeping paper notebooks at the main desk leads to incomplete records, delayed salary approvals, and difficulty reviewing historical presence ratios.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides a centralized, cloud-based attendance solution designed around workshop workflows. Manage daily check-ins, leaves, and staff rosters in the same system used to configure job cards and billing profiles.
          </p>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Manual Register Pitfalls</h3>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Register damage:</strong> High risk of losing paper logs or notebooks.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Isolated data:</strong> Attendance files aren't linked to salary or leaves registers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Digital presence:</strong> Log shifts via browser dashboard or Android application.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
