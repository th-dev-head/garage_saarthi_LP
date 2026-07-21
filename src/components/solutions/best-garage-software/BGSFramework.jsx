import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const criteriaList = [
  "Supported automotive business types & vehicle workflows",
  "Digital job card creation speed & complaint logging",
  "GST invoice breakdown & custom bill series support",
  "Spare parts inventory deduction & counter sales billing",
  "Customer & vehicle service history records lookup",
  "Garage CRM lead tracking & quotation management",
  "Automated WhatsApp service due reminders & alerts",
  "Mechanic staff attendance, leave & payroll commissions",
  "Multi-branch scaling & role-based user permissions",
  "Business dashboard, sales reports & CA export access",
  "Web browser & Android mobile app availability",
  "7-day free trial availability without credit card required",
];

const trialSteps = [
  "1. Create a customer profile",
  "2. Register a vehicle number",
  "3. Draft a digital job card",
  "4. Add spare parts from stock",
  "5. Generate a GST invoice",
  "6. Check WhatsApp alert setup",
  "7. Clock mechanic attendance",
  "8. Review daily sales report",
];

export default function BGSFramework() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Comparison Framework
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How to Compare Garage Management Software <GradientUnderline>Before You Buy</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Don't rely solely on marketing claims. Shortlist two or three software platforms and test their actual day-to-day workflow against your workshop's routine tasks.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          {/* Left Column - Criteria */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-slate-900 mb-4">Essential Criteria Checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {criteriaList.map((text, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-2xl border border-slate-200/60 text-xs text-slate-700 font-medium">
                  <FaCheckCircle className="text-primary w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Trial Steps */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide border-b border-slate-200/60 pb-3">
              8 Tasks to Test During Your Trial
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              When evaluating software during a free trial, execute these 8 actual workshop operations to verify speed and ease of use:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold pt-1">
              {trialSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/40">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Compare GarageSaarthi Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
