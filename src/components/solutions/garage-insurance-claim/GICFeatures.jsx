import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaUserTie,
  FaCalculator,
  FaCloudUploadAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function GICFeatures() {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Insurer Profile & Cashless Tie-up Rules",
      description: "Store discount agreements, labor rate tariffs, and special terms for each insurance company in your local city.",
    },
    {
      icon: FaUserTie,
      title: "Surveyor Appointment & Follow-ups",
      description: "Maintain a live directory of insurance surveyors with contact info, inspection logs, and instant estimate dispatch.",
    },
    {
      icon: FaCalculator,
      title: "Smart IRDAI Depreciation Logic",
      description: "Automated rate matrix for rubber, nylon, fiber, glass, and metal with one-click Zero-Depreciation policy support.",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Encrypted Claim Document Storage",
      description: "Upload high-res RC books, driving licenses, policy PDFs, FIRs, and accident photos securely directly from mobile.",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Supplementary Estimate Creation",
      description: "Add newly discovered damages during body dismantling with photographic proof to get rapid insurer supplement approvals.",
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Outstanding Insurance Aging Report",
      description: "Track cashless claims by age buckets (0-15d, 15-30d, 30-60d) with payment reference numbers and pending dues.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Industry-Leading Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Key Features Built for <GradientUnderline>Accident Repair Garages</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate bottlenecks, improve surveyor relationships, and guarantee faster cashless settlements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-text-dark mb-2">{item.title}</h3>
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
