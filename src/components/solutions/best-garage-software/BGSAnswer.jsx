import React from "react";
import Link from "next/link";
import { FaSlidersH, FaStore, FaBuilding, FaWrench } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const evaluationFactors = [
  {
    icon: FaWrench,
    title: "Small Independent Garages",
    desc: "Require simple digital job sheet creation, quick customer & vehicle records lookup, easy GST billing, and an affordable mobile app to run operations without complicated setups."
  },
  {
    icon: FaStore,
    title: "Growing Multi-Brand Workshops",
    desc: "Need spare parts inventory tracking, CRM lead management, mechanic attendance and payroll calculation, automated WhatsApp service reminders, and revenue reports."
  },
  {
    icon: FaBuilding,
    title: "Multi-Branch Garage Chains",
    desc: "Demand centralized branch management, inter-branch stock visibility, role-based staff access permissions, and consolidated financial reporting across locations."
  }
];

export default function BGSAnswer() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Direct Intent Answer
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Which Is the Best <GradientUnderline>Garage Management Software?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            There is no single software choice that fits every single workshop automatically. When asking <em>what is the best garage management software</em>, the answer depends entirely on your workshop's business model, daily workload, team size, and operational requirements.
          </p>
        </div>

        {/* Evaluation Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {evaluationFactors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base mb-4">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Positioning Text */}
        <div className="bg-[#EFE9E7]/40 border border-primary/20 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            If your goal is to manage all these operational, customer, staff, and financial workflows inside one unified platform,{" "}
            <Link href="/" className="font-bold text-primary hover:underline">
              GarageSaarthi garage management software
            </Link>{" "}
            is custom-built to support your workshop's growth.
          </p>
        </div>
      </div>
    </section>
  );
}
