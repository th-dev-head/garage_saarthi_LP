import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHJobCards() {
  const steps = [
    { title: "Create Job Records", desc: "Open dynamic digital job cards containing issues, fuel levels, and inspection comments." },
    { title: "Build Service History", desc: "Every closed card automatically updates the vehicle's chronological service logs." },
    { title: "Review on Future Visits", desc: "Get proactive alerts about unresolved issues or pending recommendations when checking in." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Job Integration
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Connect Job Cards with <GradientUnderline>Vehicle Service Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Maintaining service logs shouldn't add extra steps to your process. In GarageSaarthi, the history builds itself naturally as your staff manages daily repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8">
              <h3 className="text-base font-bold text-text-dark mb-4">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">{s.desc}</p>
              {idx === 0 && (
                <Link href="/features/job-cards" className="text-xs text-primary font-bold hover:underline">
                  Explore digital job card software →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}