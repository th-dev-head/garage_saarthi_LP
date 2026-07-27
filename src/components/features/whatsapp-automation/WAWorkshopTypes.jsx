import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const waWorkshopTypes = [
  {
    title: "Car Repair Garages",
    badge: "4-Wheeler",
    desc: "Send instant job card estimates, engine oil service reminders, and digital invoices for all car makes."
  },
  {
    title: "Bike Service Centers",
    badge: "2-Wheeler",
    desc: "Send fast WhatsApp job intake notes and quick payment UPI links to busy scooter and motorcycle owners."
  },
  {
    title: "Multi-Brand Auto Centers",
    badge: "Multi-Brand",
    desc: "Share detailed inspection photos, insurance claims documentation, and warranty records directly on WhatsApp."
  },
  {
    title: "Car Detailing & Wash Hubs",
    badge: "Detailing",
    desc: "Share high-res before & after transformation videos, PPF warranty certificates, and wash reminders."
  }
];

export default function WAWorkshopTypes() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Tailored Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Built for Every Type of <GradientUnderline>Automotive Workshop</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            WhatsApp messaging templates customized for your exact workshop business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {waWorkshopTypes.map((ws, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-3xl space-y-3 shadow-xs">
              <span className="text-[10px] uppercase font-bold text-primary bg-orange-50 px-2.5 py-1 rounded-full inline-block">
                {ws.badge}
              </span>
              <h3 className="text-base font-bold text-slate-900">{ws.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{ws.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
