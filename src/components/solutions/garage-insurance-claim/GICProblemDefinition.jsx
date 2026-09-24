import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaFileExcel, FaTimesCircle, FaClock, FaExclamationTriangle } from "react-icons/fa";

export default function GICProblemDefinition() {
  const problems = [
    {
      icon: FaClock,
      title: "Surveyor Delay & Prolonged Bay Occupancy",
      description: "Cars sit in accidental bays for days waiting for spot surveys, re-inspections, and back-and-forth email estimate approvals.",
    },
    {
      icon: FaExclamationTriangle,
      title: "Depreciation & Deductible Calculation Errors",
      description: "Manual calculations for plastic (50%), metal slabs, and salvage deductions result in customer anger and revenue losses.",
    },
    {
      icon: FaFileExcel,
      title: "Misplaced Claim Documents & Photos",
      description: "Physical photocopies of RC, DL, FIR, and pre-repair accident photos get lost, delaying cashless reimbursement filings.",
    },
    {
      icon: FaTimesCircle,
      title: "Aging Cashless Receivables from Insurers",
      description: "Lack of insurer-wise payment tracking leaves lakhs of rupees stuck with insurance companies for months without follow-ups.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            The Collision Repair Challenge
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Why Traditional <GradientUnderline>Insurance Claim Processing</GradientUnderline> Fails
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Paper-based accident processing creates long repair turnaround times, customer disputes over excess liabilities, and stuck working capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
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
