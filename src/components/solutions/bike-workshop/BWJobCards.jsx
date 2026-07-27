import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const benefits = [
  {
    title: "Keep Bike Service Work Organized",
    desc: "Record general service, engine repair, clutch work, or brake servicing details. Assign dedicated mechanics to each card and monitor the exact progress state of the repair.",
  },
  {
    title: "Maintain Digital Job Card Records",
    desc: "Every digital job card records complaints, estimated delivery time, spares used, and mechanic commissions. No more oily paper slips getting lost on the workshop floor.",
  },
];

const serviceExamples = [
  "General Service & Washing",
  "Engine Oil Replacement",
  "Chain Adjustment & Lube",
  "Brake Shoe & Disc Pad Work",
  "Clutch Plate Overhaul",
  "Electrical & Wiring Fixes",
  "Accidental Damage Repairs",
  "Tyre & Tube Replacement",
];

export default function BWJobCards() {
  return (
    <section id="bike-features" className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center scroll-mt-20">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Two-Wheeler Repair Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Manage Digital Job Cards for{" "}
            <GradientUnderline>Every Bike Service</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            From the moment a customer arrives with a two-wheeler to final delivery, GarageSaarthi organizes the complete bike service workflow digitally — reducing double entries and keeping detail records safe.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Benefits - Left Side */}
          <div className="lg:col-span-6 space-y-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary shadow-sm">
                  <FaCheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="/features/job-card-management"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Digital Job Cards <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Side Visual Block */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Supported Two-Wheeler Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceExamples.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
