import React from "react";

export default function SRRetentionValue() {
  const listItems = [
    "Stay aware of upcoming service opportunities on a daily dashboard.",
    "Maintain regular, professional customer communication.",
    "Create a repeatable follow-up process for your team.",
    "Keep customer and vehicle information organized in one dashboard.",
    "Reduce dependence on individual staff memory and personal logs.",
    "Reconnect with previous service customers who haven't visited recently."
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Operational Value
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Build a More Consistent Customer Service Follow-Up Process
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Increasing repeat business doesn't require complex marketing. It comes down to structured consistency. Our reminder tools help you establish standard operational flows that track vehicle service cycles and simplify outreach efforts.
          </p>
        </div>
        <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
          <h3 className="text-sm font-bold text-text-dark mb-4">How Reminders Help Your Garage:</h3>
          <ul className="space-y-3">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}