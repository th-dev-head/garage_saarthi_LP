import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const fitPoints = [
  "Built specifically around automobile workshop, repair shop, and garage operations",
  "Combines job cards, GST billing, inventory, and CRM into one connected platform",
  "Maintains organized customer profiles linked directly to vehicle service histories",
  "Automates WhatsApp service alerts and customer retention follow-ups",
  "Integrates mechanic attendance, leave records, and performance commissions",
  "Provides clear finance visibility, daily sales ledgers, and view-only CA export access",
  "Supports multi-branch workshop management with role-based user permissions",
  "Ensures accessible cloud access via web browsers and a mobile Android app",
  "Offers a transparent 7-day free trial with zero registration fee",
];

export default function BWSProductFit() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Fit
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Why Consider GarageSaarthi <GradientUnderline>for Workshop Management?</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi is designed for workshop owners looking to consolidate operational, customer, staff, and financial management into one easy-to-use system.
          </p>
        </div>

        {/* Fit List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {fitPoints.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
