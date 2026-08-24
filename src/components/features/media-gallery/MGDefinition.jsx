import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function MGDefinition() {
  const highlights = [
    { title: "📸 Real-Time Uploads", desc: "Snap & save in 10s", color: "text-primary" },
    { title: "🤝 Customer Trust", desc: "Provide photographic proof", color: "text-orange-600" },
    { title: "📋 Dent & Scratch Log", desc: "Avoid false claim disputes", color: "text-emerald-600" },
    { title: "☁️ Unlimited Cloud", desc: "No local storage worries", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Photo & Media Documentation
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              Transparent Vehicle Inspections with <GradientUnderline>Photo Galleries</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Media Gallery Software</strong> automates the process of capturing and linking vehicle repair images directly to digital job cards.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Ditch manual vehicle condition checklists. Photograph dents, scratches, damaged engine mounts, and finished paint jobs. Share high-resolution PDF inspection summaries with customers over WhatsApp to avoid disputes and get approvals instantly.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Key Visual Features:
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
