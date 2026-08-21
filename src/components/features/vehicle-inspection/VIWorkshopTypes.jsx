import React from "react";
import { FaCar, FaMotorcycle, FaTruck } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function VIWorkshopTypes() {
  const workshopTypes = [
    {
      title: "Car Workshops",
      icon: <FaCar className="w-8 h-8 text-primary" />,
      desc: "Perfect for multi-brand car garages conducting pre-service body inspections, deep engine checks, and underbody diagnostics.",
    },
    {
      title: "Bike Garages",
      icon: <FaMotorcycle className="w-8 h-8 text-orange-500" />,
      desc: "Ideal for two-wheeler service centers needing quick 20-point digital health cards for fast vehicle turnaround.",
    },
    {
      title: "Commercial & Fleet",
      icon: <FaTruck className="w-8 h-8 text-emerald-600" />,
      desc: "Built for heavy commercial vehicles requiring extensive compliance checklists and deep component health monitoring.",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            For Every Workshop
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Inspections for Any <GradientUnderline>Vehicle Type</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you service bikes or heavy trucks, our digital inspection software adapts to your workshop's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshopTypes.map((type, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
