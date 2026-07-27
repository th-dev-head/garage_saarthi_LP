import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const alertsComparison = [
  { isPositive: false, title: "Paper registers & diaries:", desc: "Easily misplaced and hard to search." },
  { isPositive: false, title: "Excel spreadsheets:", desc: "Requires manual updates and has no proactive alert triggers." },
  { isPositive: true, title: "GarageSaarthi System:", desc: "Automated alerts connected directly to customer files and vehicle records." }
];

export default function SRDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Modernize Follow-Ups
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Never Miss an Upcoming <GradientUnderline>Vehicle Service Follow-Up</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Managing customer follow-ups manually using paper registers, service diaries, Excel sheets, or scattered WhatsApp chats becomes unmanageable as your workshop grows. Without a connected system, upcoming vehicle services get missed, leading to lost business opportunities.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides a structured <strong>service reminder system</strong> that links customer contacts and vehicle logs with automated service alerts. Access upcoming service lists in seconds and create a reliable follow-up routine that brings customers back to your bays.
          </p>
        </div>
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-text-dark mb-4">Manual vs. Digital Alerts</h3>
          <ul className="space-y-4 text-xs md:text-sm text-slate-600">
            {alertsComparison.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className={item.isPositive ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                  {item.isPositive ? "✓" : "✕"}
                </span>
                <span><strong>{item.title}</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}