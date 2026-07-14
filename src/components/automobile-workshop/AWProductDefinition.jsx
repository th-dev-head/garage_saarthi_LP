import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const benefits = [
  "Centralized Repair Job Cards",
  "Live Spare Parts Inventory Control",
  "Professional GST Invoicing & Payments",
  "Connected Customer & Vehicle Profiles",
  "Automated WhatsApp Service Reminders",
  "Staff Payroll & Role-based Permissions",
  "Real-time Revenue & Profit Analytics",
];

export default function AWProductDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              What is GarageSaarthi?
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              One Automobile Workshop Management Software for <span className="relative inline-block">Daily Operations<span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" /></span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              GarageSaarthi is a complete and cloud-based automobile workshop management system designed to centralize and automate your entire workshop. Instead of using paper records, calculators, and spread sheets, you can run your daily repairs, inventory, billing, staff, and customer accounts from one secure platform.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              It helps independent garages, car workshops, and multi-branch automobile service centres eliminate manual mistakes, save administrative time, and build long-term customer relationships.
            </p>
            <Link
              href="/features"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Explore All Features
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">All-In-One Platform Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-slate-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
