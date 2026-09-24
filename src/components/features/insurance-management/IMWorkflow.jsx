import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaCarCrash,
  FaUserTie,
  FaFileAlt,
  FaTools,
  FaCheckDouble,
} from "react-icons/fa";

export default function IMWorkflow() {
  const steps = [
    {
      step: "01",
      icon: FaCarCrash,
      title: "Claim Intimation & Vehicle Inward",
      description: "Record policy details, claim registration number, vehicle intake photos, and customer declaration.",
    },
    {
      step: "02",
      icon: FaUserTie,
      title: "Surveyor Spot Inspection",
      description: "Assign appointed surveyor, upload initial accident assessment sheet, and calculate pre-approval estimate.",
    },
    {
      step: "03",
      icon: FaFileAlt,
      title: "Liability Split & Approval",
      description: "System computes exact depreciation & customer deductibles; submit formal approval request to insurance portal.",
    },
    {
      step: "04",
      icon: FaTools,
      title: "Dismantling & Bodyshop Repair",
      description: "Denting, painting, part replacement & supplementary approval if internal hidden damages emerge.",
    },
    {
      step: "05",
      icon: FaCheckDouble,
      title: "Final Re-Inspection & Gate Pass",
      description: "Upload satisfaction voucher & invoice copy, release vehicle via gate pass, and track cashless insurer payout.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            How Accidental <GradientUnderline>Claims Move Digitally</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From vehicle arrival at the bay to final insurance payment disbursement, every milestone is tracked transparently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center font-bold text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-slate-200">{item.step}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
