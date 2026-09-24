import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaCarCrash, FaWrench, FaBuilding, FaMotorcycle } from "react-icons/fa";

export default function IMWorkshopTypes() {
  const workshopTypes = [
    {
      icon: FaCarCrash,
      title: "Independent Collision Repair Bodyshops",
      description: "Manage 30+ simultaneous accidental claims, paint booth scheduling, and seamless surveyor estimate revisions.",
    },
    {
      icon: FaWrench,
      title: "Multi-Brand Auto Service Centers",
      description: "Expand revenue by offering cashless claim processing for all private cars alongside regular periodic maintenance.",
    },
    {
      icon: FaBuilding,
      title: "Multi-Branch Auto Workshop Chains",
      description: "Centralized insurer contract rates, standardized depreciation templates, and consolidated cashless accounts receivable.",
    },
    {
      icon: FaMotorcycle,
      title: "Two-Wheeler & Superbike Bodyshops",
      description: "Rapid claim processing for premium motorcycles, accidental chassis inspection records, and fast parts approval.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Built For Modern Auto Garages
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Ideal For All <GradientUnderline>Bodyshop Businesses</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you run a specialized accident repair workshop or a busy multi-brand center, GarageSaarthi scales to your claim volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((item, idx) => {
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
