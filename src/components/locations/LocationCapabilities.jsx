import React from "react";
import GradientUnderline from "@/src/components/common/GradientUnderline";
import { FaWrench, FaCheckDouble, FaWhatsapp, FaBoxes, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function LocationCapabilities({ location }) {
  // Map an icon to each capability index for polished visual presentation
  const icons = [FaWrench, FaWhatsapp, FaBoxes, FaShieldAlt, FaChartLine, FaCheckDouble];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Localized Workshop Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Tailored Garage Operations for{" "}
            <GradientUnderline>{location.countryName}</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your auto workshop needs to manage job cards, parts inventory, mechanic workflows, and local billing compliance in {location.currency}.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {location.capabilities?.map((cap, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary bg-[#EFE9E7] px-3 py-1 rounded-full">
                      {cap.badge}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-primary flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-text-dark mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

