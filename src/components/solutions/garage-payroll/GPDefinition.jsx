import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GPDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Staffing
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Payroll Management Software <GradientUnderline>Built for Garages and Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Automobile workshop owners struggle to organize mechanic salary payouts due to scattered records. Commission logs, helper daily wages, and overtime hours are often written in separate paper registers, leading to calculations discrepancies at the end of the month.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides a workshop payroll management solution designed specifically for automotive businesses. Centralize your employee list, record commissions directly from invoice sheets, and monitor active profiles securely on web and Android devices.
          </p>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Common Workshop Payroll Struggles</h3>
          <ul className="space-y-3 text-xs md:text-sm text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Register tracking:</strong> Staff presence and leaves written down manually.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>Commission disputes:</strong> Miscalculated mechanic margins on labor work.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Central profile:</strong> View basic salary, commission, and leaf records in one file.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
