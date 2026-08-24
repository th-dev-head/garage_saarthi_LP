import React from "react";
import { FaHeart, FaTools, FaFolderPlus, FaMobileAlt, FaSyncAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIWhySaarthi() {
  const differentiators = [
    {
      icon: <FaTools className="w-5 h-5 text-primary" />,
      title: "Built for Garages & Workshops",
      desc: "Our database fields are mapped exactly for automotive repair businesses (racks, vehicle compatibility, unit packages) instead of generic warehouse boxes."
    },
    {
      icon: <FaSyncAlt className="w-5 h-5 text-primary" />,
      title: "All-in-One Operations Sync",
      desc: "Your inventory connects seamlessly with customer management, job cards, counter sales, billing transactions, and finance reports."
    },
    {
      icon: <FaMobileAlt className="w-5 h-5 text-primary" />,
      title: "Web, Android & iOS Access",
      desc: "Work on a large desktop monitor at the bill desk, or update inventory items directly from the garage floor with the Android & iOS apps."
    },
    {
      icon: <FaFolderPlus className="w-5 h-5 text-primary" />,
      title: "Consolidated Multi-Branch Support",
      desc: "Keep absolute control over multiple workshop outlets from a single master account with branch-level visibility filters."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why GarageSaarthi
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Manage Garage Inventory with <GradientUnderline>GarageSaarthi?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We provide a complete garage software ecosystem specifically tailored to help Indian workshop owners grow, organize, and automate their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl flex gap-4 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-2xl flex items-center justify-center">
                {diff.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-900">{diff.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

