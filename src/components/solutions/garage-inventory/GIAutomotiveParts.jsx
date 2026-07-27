import React from "react";
import { FaShieldAlt, FaCar, FaInfoCircle, FaBoxes } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const autoPartsCards = [
  {
    icon: FaCar,
    title: "Auto Parts Inventory",
    desc: "Create specific listings for lubricants, brake consumables, and electrical elements using our **Auto Parts Inventory Software** to track real-time workshop usage logs."
  },
  {
    icon: FaShieldAlt,
    title: "Vehicle Spare Parts Management",
    desc: "Group replacement spares by vehicle make, model variants, and compatibility categories in your **Vehicle Spare Parts Inventory Software** database records."
  },
  {
    icon: FaBoxes,
    title: "Auto Spare Parts Management",
    desc: "Set customized retail markups and tax profiles for all consumable records using **Auto Spare Parts Management Software** capabilities."
  }
];

export default function GIAutomotiveParts() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Automotive Inventory
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Automotive and Vehicle <GradientUnderline>Spare Parts Digitally</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Organize bulk auto spares, oil canisters, filters, and vehicle repair consumables. Maintain structural stock records of everything you supply to customers during services.
          </p>
        </div>

        <div 
          className="mb-12 border rounded-2xl p-4 flex gap-3 text-xs items-start max-w-3xl mx-auto shadow-xs"
          style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a", color: "#78350f" }}
        >
          <FaInfoCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#d97706" }} />
          <div>
            <span className="font-bold block mb-0.5">Software Platform Notice</span>
            GarageSaarthi is a management utility software to track your garage's internal stock. We do not sell, distribute, supply, or market physical spare parts or automotive equipment.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {autoPartsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-3 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-orange-100/50 flex items-center justify-center text-primary">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-slate-900">{card.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


