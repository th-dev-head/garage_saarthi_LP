import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const crWhyPillars = [
  { title: "⭐ 10X More 5-Star Reviews", titleClass: "text-primary font-bold block mb-1", desc: "Collect genuine Google feedback automatically after every vehicle delivery" },
  { title: "🎯 Local SEO Google Ranking", titleClass: "text-orange-600 font-bold block mb-1", desc: "Rank #1 when nearby customers search 'best car garage near me'" },
  { title: "🛡️ Negative Review Shield", titleClass: "text-emerald-600 font-bold block mb-1", desc: "Route complaints privately to garage owners before public posting" },
  { title: "💬 1-Click WhatsApp Delivery", titleClass: "text-amber-600 font-bold block mb-1", desc: "Send pre-formatted review links directly to customer WhatsApp" }
];

export default function CRDefinition() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Automated Reputation Management
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Build a 5-Star Reputation on Google with <GradientUnderline>Automated Feedback Links</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Customer Review Collection Software</strong> helps garage owners automatically request ratings and reviews right after a vehicle service is completed.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Instead of relying on customers remembering to post a review, GarageSaarthi sends a friendly WhatsApp feedback link with your direct Google Business Profile URL attached.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Customer Review Collection Matters:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {crWhyPillars.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={item.titleClass}>{item.title}</span>
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
