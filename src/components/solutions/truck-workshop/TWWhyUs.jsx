import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const differentiators = [
  "Built specifically for automotive and commercial workshop operations",
  "Creates digital job cards with complaints, estimate, and parts allocation",
  "Maintains complete truck and heavy commercial vehicle history logs",
  "Tracks spare parts inventory and enables retail counter sales",
  "Generates GST-compliant bills and handles multiple invoice series",
  "Track corporate fleet credit cycles and partial payment status",
  "Sends automated WhatsApp service due alerts and invoice links",
  "Integrates mechanic attendance, leave records, and payroll commission calculations",
  "Ensures cloud access from any web browser and a native Android and iOS mobile applications",
  "Supports multi-branch controls and role-based staff access permissions",
  "Allows you to invite your CA for direct GST export access",
  "Offers a fully functional 7-day free trial with zero registration charges",
  "India-focused product positioning custom-made for transport garages",
];

export default function TWWhyUs() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why GarageSaarthi
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Why Truck Workshop Owners{" "}
            <GradientUnderline>Choose GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Commercial vehicle workshops need specialized management systems to track massive parts inventories, manage credit accounts, and organize technicians. Here is why transport garage owners trust GarageSaarthi.
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
