import React from "react";
import GradientUnderline from "../../common/GradientUnderline";

const crWorkshopTypes = [
  {
    title: "Car Repair Workshops",
    badge: "4-Wheeler",
    desc: "Collect high-volume Google 5-star reviews after periodic maintenance and major engine overhauls."
  },
  {
    title: "Bike Service Centers",
    badge: "2-Wheeler",
    desc: "Send fast 1-click WhatsApp rating prompts to busy scooter and motorcycle owners."
  },
  {
    title: "Multi-Brand Auto Hubs",
    badge: "Multi-Brand",
    desc: "Build strong online trust across luxury and economy car owners with verified Google feedback."
  },
  {
    title: "Car Detailing Studios",
    badge: "Detailing",
    desc: "Showcase 5-star ceramic coating and PPF customer satisfaction to attract high-ticket clients."
  }
];

export default function CRWorkshopTypes() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Tailored Solutions
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Built for Every Type of <GradientUnderline>Automotive Workshop</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Review collection workflows customized for your specific garage business type.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crWorkshopTypes.map((ws, idx) => (
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
