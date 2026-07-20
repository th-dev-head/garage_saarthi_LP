import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

export default function SRWhySaarthi() {
  const points = [
    { title: "Built for Garages", desc: "Specifically designed to handle auto repair and motorcycle workshops." },
    { title: "Connected Records", desc: "Customer contacts and vehicle models linked inside one database." },
    { title: "Due Calendars", desc: "Service alerts dashboard to plan future outreach actions." },
    { title: "WhatsApp Support", desc: "Authorized WhatsApp messaging template flow for reminders." },
    { title: "Multi-Platform Access", desc: "Switch seamlessly between browser dashboard and Android application." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Saarthi Advantage
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Use GarageSaarthi for <GradientUnderline>Vehicle Service Reminders</GradientUnderline>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-dark mb-2">{p.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}