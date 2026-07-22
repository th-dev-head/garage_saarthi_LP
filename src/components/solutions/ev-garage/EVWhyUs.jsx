import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const differentiators = [
  "Built specifically for automotive and electric vehicle workshop operations",
  "Supports custom electric scooter and e-bike service checklists",
  "Creates digital job cards with complaints, estimate, and parts allocation",
  "Maintains complete customer and vehicle record history",
  "Tracks spare parts inventory and enables retail counter sales",
  "Generates GST-compliant bills and handles multiple invoice series",
  "Manages new enquiries and sales quotes inside a dedicated CRM Leads module",
  "Sends automated WhatsApp service due alerts and invoice links",
  "Integrates mechanic attendance, leave records, and payroll commission calculations",
  "Ensures cloud access from any web browser and a native Android application",
  "Supports multi-branch controls and role-based staff access permissions",
  "Offers a fully functional 7-day free trial with zero registration charges",
  "India-focused product positioning custom-made for independent garages",
];

export default function EVWhyUs() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why GarageSaarthi
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Why EV Garage Owners{" "}
            <GradientUnderline>Choose GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Automotive repair shops need tools tailored to service checklists, mechanics, and parts stock. Here is why independent EV garages choose GarageSaarthi.
          </p>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
          {differentiators.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
