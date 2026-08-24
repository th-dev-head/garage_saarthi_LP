import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const criteria = [
  "GST compliance with customizable billing series and HSN/SAC breakdown",
  "View-only CA portal access for monthly tax return filing and exports",
  "Automated WhatsApp service due reminders sent directly to customers",
  "Android and iOS mobile apps for bay floor job card creation",
  "Digital job cards recording pre-repair scratch notes and labor rates",
  "Real-time spare parts stock tracking with dynamic checkout deductions",
  "Mechanic staff attendance, leave management, and job commissions",
  "Multi-branch workspace controls with role-based user permissions",
  "Clean daily sales, cash ledgers, and inventory valuation dashboards",
  "Transparent 7-day free trial with flexible subscription packages",
];

export default function GSICriteria() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Evaluation Checklist
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            What to Look For When Selecting <GradientUnderline>Garage Software in India</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Ensure your chosen software handles these 10 critical operational requirements for Indian automotive workshops.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {criteria.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
              <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Compare GarageSaarthi Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
