import React from "react";
import { FaCalculator, FaBell, FaLandmark, FaShieldAlt, FaChartPie, FaFileContract } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const lCoreCapabilities = [
  {
    icon: FaCalculator,
    title: "Multi-Loan EMI Schedule Tracker",
    desc: "Track monthly EMI repayment dates for business loans, equipment finance, and personal borrowings."
  },
  {
    icon: FaBell,
    title: "Automated Advance Repayment Alerts",
    desc: "Receive WhatsApp and push notifications 3 days before loan auto-debit dates to maintain account balance."
  },
  {
    icon: FaLandmark,
    title: "Bank & Lender Account Management",
    desc: "Maintain separate ledgers for nationalized banks, NBFCs, private lenders, and machinery financiers."
  },
  {
    icon: FaChartPie,
    title: "Interest vs Principal Breakdown",
    desc: "Automatically split monthly EMI payments into principal reduction and tax-deductible interest expenses."
  },
  {
    icon: FaShieldAlt,
    title: "Bank Mandate (NACH / ECS) Status",
    desc: "Monitor active auto-debit mandates and avoid bank bounce penal charges."
  },
  {
    icon: FaFileContract,
    title: "Debt & Liability Audit Reports",
    desc: "Export clean loan amortization schedules and total debt liability reports for your accountant."
  }
];

export default function LCoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Complete Toolkit for <GradientUnderline>Garage Loan Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your workshop needs to track EMI schedules, manage lender accounts, and prevent bounce penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lCoreCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-100/60 text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
