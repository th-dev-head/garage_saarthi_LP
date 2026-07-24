import React from "react";
import { FaCar, FaHistory, FaImage, FaWrench, FaCalendarAlt, FaCloud } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function VehCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaCar className="w-6 h-6 text-primary" />,
      title: "Digital Vehicle Registry",
      description: "Log vehicle make, model, year, fuel levels, chassis number, registration plates, and engine configurations.",
      badge: "Registry"
    },
    {
      icon: <FaHistory className="w-6 h-6 text-orange-600" />,
      title: "Interactive Service Logs",
      description: "Search complete past repair logs, mechanic notes, bill breakdowns, and replaced spare parts history instantly.",
      badge: "Service History"
    },
    {
      icon: <FaImage className="w-6 h-6 text-emerald-600" />,
      title: "Damage & Photo Records",
      description: "Upload vehicle inventory check pictures and mark pre-existing body dents or scratches during check-in.",
      badge: "Photo Proof"
    },
    {
      icon: <FaWrench className="w-6 h-6 text-amber-600" />,
      title: "Odometer & KM Tracking",
      description: "Record Odometer/Mileage logs during intake. Track distance covered between subsequent services.",
      badge: "KM Logs"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6 text-purple-600" />,
      title: "Automated Maintenance Targets",
      description: "Calculate upcoming service due targets based on past service intervals, Odometer velocity, or dates.",
      badge: "Maintenance"
    },
    {
      icon: <FaCloud className="w-6 h-6 text-teal-600" />,
      title: "Secure Cloud Records",
      description: "Access diagnostic logs, warranty cards, and repair sheets from any mobile, tablet, or PC browser.",
      badge: "Cloud Sync"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Features
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Key Capabilities of Garage <GradientUnderline>Vehicle Management Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Record vehicle profiles, track service records, upload vehicle photos, and plan maintenance schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
