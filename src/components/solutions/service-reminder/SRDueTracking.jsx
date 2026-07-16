import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function SRDueTracking() {
  const cards = [
    { title: "Service Alerts Dashboard", desc: "View all due and upcoming services in a structured calendar and list layout." },
    { title: "Customer Information Link", desc: "Access customer names, phone numbers, and previous service history logs in one click." },
    { title: "Vehicle Registration details", desc: "See matching vehicle registration numbers, models, and service specifics." },
    { title: "Follow-Up Planning", desc: "Assign follow-up tasks to staff and set call logs to measure action status." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Service Tracking
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Track Upcoming and <GradientUnderline>Due Vehicle Services</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi divides reminder workflows into internal dashboard tracking for your team, and external reminder communication sent to customers. Maintain absolute visibility of due vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-dark mb-2">{card.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}