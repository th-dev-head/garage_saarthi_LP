import React from "react";
import { FaCalculator, FaBell, FaLandmark, FaShieldAlt, FaChartPie, FaFileContract, FaMobileAlt, FaBook, FaCalendarCheck } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const lCoreCapabilities = [
  {
    icon: FaCalculator,
    title: "Loan EMI Tracker & Management",
    desc: "Complete loan management software and loan EMI tracker for garage equipment financing and business borrowings."
  },
  {
    icon: FaBell,
    title: "EMI Reminder & Payment Alerts",
    desc: "Automated EMI reminder software and payment reminder software sending advance WhatsApp alerts to prevent bank bounce fees."
  },
  {
    icon: FaLandmark,
    title: "Garage & Workshop Loan Tracker",
    desc: "Dedicated garage loan management software and workshop loan management software for bank & NBFC borrowings."
  },
  {
    icon: FaChartPie,
    title: "Debt Tracking & Repayment System",
    desc: "Comprehensive debt tracking software and loan repayment tracker splitting principal and interest expenses."
  },
  {
    icon: FaShieldAlt,
    title: "Installment Tracker & Management",
    desc: "All-in-one installment management software and installment tracker for monthly business EMI management."
  },
  {
    icon: FaFileContract,
    title: "Loan Record & Register Software",
    desc: "Detailed loan record management software and loan register software keeping your loan ledger software up-to-date."
  },
  {
    icon: FaMobileAlt,
    title: "Loan Management App & Mobile Access",
    desc: "Monitor business loan tracker metrics on our loan management app and EMI management app anytime."
  },
  {
    icon: FaBook,
    title: "Workshop & Garage Finance Tracker",
    desc: "Integrate garage finance management software and workshop finance management for complete business finance tracking."
  },
  {
    icon: FaCalendarCheck,
    title: "Manage Business Loans & Liabilities",
    desc: "Track loan payment management, loan tracking system status, and manage business loans seamlessly."
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
            Everything your workshop needs for EMI tracking, debt management, and automated loan payment reminders.
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
