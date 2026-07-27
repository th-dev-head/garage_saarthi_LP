import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const whyUsFeatures = [
  {
    title: "Complete Flow",
    desc: "Connects vehicle check-in, repair allocations, inventory rooms, and billing desks."
  },
  {
    title: "Easy Billing",
    desc: "Invoice spare components and labor charges with proper tax values instantly."
  },
  {
    title: "Inventory Sync",
    desc: "Keep records of parts counts and alert thresholds to avoid service delays."
  },
  {
    title: "WhatsApp Updates",
    desc: "Share invoice files, job sheets, and send service due reminders automatically."
  }
];

export default function ARSWhyUs() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Comparison Intent
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Why Auto Repair Shops{" "}
            <GradientUnderline>Use GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            When comparing auto repair shop software, workshop owners look for digital job card creation, spare parts inventory control, customer WhatsApp alerts, staff commissions, and clean tax invoices. GarageSaarthi brings these workflows into one unified platform without complex setups.
          </p>
        </div>

        {/* Highlight points list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsFeatures.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <h3 className="font-extrabold text-sm text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            View GarageSaarthi Pricing
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
