import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaShieldAlt, FaFileContract, FaCheckCircle, FaHandshake } from "react-icons/fa";

export default function IMDefinition() {
  const highlights = [
    {
      icon: FaFileContract,
      title: "Automated Claim Job Cards",
      description: "Link insurance policy numbers, claim numbers, surveyors, and pre-repair accident estimates directly inside the Job Card.",
    },
    {
      icon: FaShieldAlt,
      title: "Intelligent Liability Splitting",
      description: "Automatically calculate Depreciation %, Compulsory Deductibles, Salvage Value, and Customer Liability vs Insurance Payable.",
    },
    {
      icon: FaHandshake,
      title: "Seamless Surveyor Coordination",
      description: "Manage spot surveys, supplementary approval requests, and instant photo document sharing via WhatsApp & web link.",
    },
    {
      icon: FaCheckCircle,
      title: "Faster Cashless Payouts",
      description: "Track payment status from HDFC ERGO, ICICI Lombard, Bajaj Allianz, Tata AIG, Go Digit, and nationalized insurers.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
              Bodyshop &amp; Cashless Claim Management
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              What is Modern <GradientUnderline>Insurance Claim</GradientUnderline> Software?
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Managing accidental car repairs involves heavy paperwork: gathering driving licenses, RC books, policy copies, FIRs, coordinating with surveyors for initial &amp; re-inspection, calculating metal/plastic/glass depreciation, and chasing delayed payments from insurance providers.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              <strong>GarageSaarthi Insurance Management</strong> turns chaotic insurance claims into a transparent, step-by-step digital process. Automate liability division, attach claim photos, generate professional supplementary invoices, and collect cashless dues on time.
            </p>
          </div>

          {/* Right Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-primary/40 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-dark mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
