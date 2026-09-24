import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaStopwatch, FaUserClock, FaChartPie, FaAward } from "react-icons/fa";

export default function MCDefinition() {
  const highlights = [
    {
      icon: FaStopwatch,
      title: "Task-Wise 1-Tap Clocking",
      description: "Mechanics clock into specific services (e.g. clutch overhaul, oil change) from mobile or shared bay tablets with one tap.",
    },
    {
      icon: FaUserClock,
      title: "Accurate Pause Reason Tracking",
      description: "Log pauses specifically for Parts Waiting, Lathe Work, Customer Approval Delay, or Lunch to measure pure active wrench time.",
    },
    {
      icon: FaChartPie,
      title: "Estimated vs Actual Hours",
      description: "Compare billed labor hours against actual minutes taken to pinpoint workshop bottlenecks and improve future quoting.",
    },
    {
      icon: FaAward,
      title: "Fair Mechanic Incentive Calculation",
      description: "Calculate technician incentives, overtime pay, and performance bonuses automatically based on verified clocking logs.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
              Workshop Labor &amp; Productivity Intelligence
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              What is <GradientUnderline>Mechanic Clocking</GradientUnderline> in GarageSaarthi?
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              In most auto garages, labor billing is based on wild guesses. Workshop managers rarely know if a technician took 45 minutes or 3 hours to replace brake pads, or how many hours cars sit unattended waiting for spare parts from the store.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              <strong>GarageSaarthi Mechanic Clocking</strong> gives your workshop real-time visibility. With intuitive mobile timers, technicians log start times, pauses, and completions for every assigned task on the job card, maximizing bay utilization and labor profitability.
            </p>
          </div>

          {/* Right Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-primary/40 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-dark mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
