import React from "react";
import { FaLaptop, FaMobileAlt, FaDatabase } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GESelectionGuidance() {
  const models = [
    {
      title: "Mobile App Only",
      icon: <FaMobileAlt className="text-primary w-6 h-6" />,
      desc: "For small 1-2 mechanic shops who only want to make quick digital job cards and simple invoices on a smartphone. Ideal for micro-outlets.",
      recommended: false
    },
    {
      title: "Multi-Module Web & Mobile",
      icon: <FaLaptop className="text-primary w-6 h-6" />,
      desc: "For growing workshops with a service manager and billing desk. Manage bookings, inventory, and customer databases across both phone and computer views.",
      recommended: true
    },
    {
      title: "Multi-Branch ERP Control",
      icon: <FaDatabase className="text-primary w-6 h-6" />,
      desc: "For multi-location garages, service center chains, and franchise networks. Manage central inventory, staff permissions, and consolidated financial logs.",
      recommended: false
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Selection Guide
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Which Garage Software Plan is{" "}
            <GradientUnderline>Right for Your Business?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Choose the operational model that matches your daily volumes and staff structure:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-3xl p-6 relative flex flex-col justify-between hover:shadow-md transition-all duration-200 ${
                m.recommended ? "border-primary ring-2 ring-primary/10" : "border-slate-200/80"
              }`}
            >
              {m.recommended && (
                <span
                  className="absolute left-6 bg-primary text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full z-20"
                  style={{ top: "-14px" }}
                >
                  Most Popular choice
                </span>
              )}
              <div>
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  {m.icon}
                </div>
                <h3 className="text-base font-bold text-text-dark mb-3">{m.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

