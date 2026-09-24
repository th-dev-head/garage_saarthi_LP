import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCarCrash, FaWrench, FaBuilding, FaMotorcycle } from "react-icons/fa";

export default function GICBusinessType() {
  const businessTypes = [
    {
      icon: FaCarCrash,
      title: "Accidental Bodyshops & Collision Centers",
      description: "Manage 20-50+ simultaneous insurance jobs with paint booth queue scheduling and surveyor photo updates.",
    },
    {
      icon: FaWrench,
      title: "Independent Multi-Brand Workshops",
      description: "Add cashless claims as a high-margin service offering to attract premium private car owners in your neighborhood.",
    },
    {
      icon: FaBuilding,
      title: "Authorized & Multi-Location Chains",
      description: "Centralize general insurance company tie-up terms, standardized discount rates, and corporate claims tracking.",
    },
    {
      icon: FaMotorcycle,
      title: "Premium Two-Wheeler Bodyshops",
      description: "Quick turnaround accidental claims for scooters and super bikes with fast parts approvals and instant customer updates.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Tailored For All Workshops
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Designed for Every <GradientUnderline>Automotive Repair Business</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Scalable insurance management tools that adapt to your workshop size, bay capacity, and insurance claim volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
