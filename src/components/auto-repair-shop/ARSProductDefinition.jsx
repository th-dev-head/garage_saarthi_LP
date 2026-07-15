import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";

const benefits = [
  "Centralized Repair Job Cards",
  "Live Spare Parts Inventory Control",
  "Professional GST Invoicing & Payments",
  "Connected Customer & Vehicle Profiles",
  "Automated WhatsApp Service Reminders",
  "Staff Payroll & Role-based Permissions",
  "Real-time Revenue & Profit Analytics",
];

export default function ARSProductDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              What is GarageSaarthi?
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              All-in-One Auto Repair Software for{" "}
              <GradientUnderline>Modern Repair Shops</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Managing an auto repair business involves handling customer complaints, vehicle records, diagnostic sheets, parts inventory allocations, mechanics, and cash flow. Sticking to old paper registers, multiple spreadsheets, and disconnected tools leads to billing delays, parts leakage, and lost follow-up business.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              GarageSaarthi is a centralized auto repair shop management system built to run these daily workflows on one secure platform. It helps vehicle repair shops, independent garages, and automotive service centers organize operations, control leakage, and stay connected with customers.
            </p>
            <Link
              href="/feature"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Explore GarageSaarthi Features
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Benefits Card */}
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