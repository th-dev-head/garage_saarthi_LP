import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaShieldAlt, FaCheckCircle, FaFileInvoiceDollar, FaHandshake } from "react-icons/fa";

export default function GICProductDefinition() {
  const highlights = [
    {
      icon: FaShieldAlt,
      title: "All-in-One Bodyshop Hub",
      description: "Integrate customer intake, claim creation, surveyor logs, and bodyshop technician assignments in one single software.",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Automated Depreciation Engine",
      description: "IRDAI-compliant formulas automatically separate parts depreciation, compulsory deductible, and salvage deduction.",
    },
    {
      icon: FaHandshake,
      title: "Surveyor Dossier on WhatsApp",
      description: "Send initial inspection estimates, supplementary quotes, and photo packs straight to surveyor smartphones with one click.",
    },
    {
      icon: FaCheckCircle,
      title: "Cashless Payment Ledger",
      description: "Track receivables from ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, Go Digit, and nationalized insurers effortlessly.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
              Modern Bodyshop Solution
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              A Complete <GradientUnderline>Insurance Solution</GradientUnderline> for Indian Workshops
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              GarageSaarthi streamlines every stage of the accidental vehicle repair cycle. From instant claim intimation and spot survey scheduling to parts ordering, supplementary estimates, and cashless disbursement settlement.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Empower your service advisors and bodyshop managers with transparent customer communication, zero calculator mistakes on deductibles, and complete control over aging cashless payouts.
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
