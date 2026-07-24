import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function VehDefinition() {
  const highlights = [
    { title: "🚗 Vehicle Database", desc: "Detailed vehicle profiles & stats", color: "text-primary" },
    { title: "🔧 Diagnostic Logging", desc: "Log engine codes & fault details", color: "text-orange-600" },
    { title: "📅 Service Reminders", desc: "Automate calendar alerts", color: "text-emerald-600" },
    { title: "📜 Digital History Records", desc: "1-click access to past repairs", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              What is Workshop Vehicle Management?
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              An Organized Cloud Database for <GradientUnderline>Workshop Vehicles</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Vehicle Management Software</strong> links every customer vehicle entering your shop directly to its digital history file. Say goodbye to searching through greasy binders or old paper files.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Whenever a vehicle returns, search its license registration plate to pull up past job cards, replaced parts, engine repairs, diagnostic notes, fuel metrics, and outstanding payments.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Core Benefits of Vehicle Records:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className={`${item.color} font-bold block mb-1`}>{item.title}</span>
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
