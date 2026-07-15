import React from "react";

export default function GBProblemDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Billing Problems
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          Still Creating Garage Bills Manually?
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          Managing billing on paper or general accounting spreadsheets leads to leaks. Spares are missed, CGST/SGST calculations are miscalculated, and unpaid bills are forgotten on scattered notebook registers.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Furthermore, recreating bills from manual notes at the end of the day consumes hours of advisor time. A dedicated automotive billing software program solves these challenges by connecting daily repair logs directly to invoice print-outs.
        </p>
      </div>
    </section>
  );
}
