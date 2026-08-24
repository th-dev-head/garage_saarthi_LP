import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAWhySaarthi() {
  const points = [
    { title: "Designed for Workshops", desc: "Tailored specifically for car, bike, EV, and truck garages, avoiding generic corporate templates." },
    { title: "Direct Operational Link", desc: "Connect shifts directly to active job cards, staff commission logs, and basic salaries." },
    { title: "Attendance & Leaves Linked", desc: "Check leaves, holiday records, check-in schedules, and absent ratios in one file." },
    { title: "Browser, Android & iOS Sync", desc: "Enable desk managers or mechanics to update presence easily on mobile screens or desktops." },
    { title: "Multi-Branch Roster", desc: "Maintain separate employee shift files and attendance statistics by location." },
    { title: "7-Day Free Trial", desc: "Log in with full access to attendance, leaves, payroll, and user settings setup with no commitments." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Differentiators
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Why Use GarageSaarthi for <GradientUnderline>Workshop Attendance Management?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover why workshops across India choose our platform to organize employee registers and manage shifts online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm space-y-3">
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
