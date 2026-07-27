import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const benefits = [
  {
    title: "Create Digital Job Cards",
    desc: "Generate detailing job sheets outlining detailing packages, paint thickness logs, and pre-existing scratches in under a minute.",
  },
  {
    title: "Track Detailing and Coating Progress",
    desc: "Monitor paint correction steps, ceramic curing times, or PPF application milestones from a live central progress screen.",
  },
  {
    title: "Keep Detailing Job Records Organized",
    desc: "Ditch manual logs. Map chemicals used, detailer commissions, and vehicle delivery estimates straight to the digital job card.",
  },
];

const services = [
  "Interior Wash & Deep Clean",
  "Exterior Paint Correction",
  "Premium Ceramic Coating",
  "Paint Protection Film (PPF)",
  "Glass Protection Treatment",
  "Alloy Wheel Detailing",
  "Leather Trim Treatment",
  "Underbody Anti-Rust Protection",
];

export default function CDJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Detailing Job Sheets
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Track Digital Job Cards for{" "}
            <GradientUnderline>Detailing Jobs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Track paint correction, PPF, or ceramic coating milestones digitally. Detail customer complaints, pre-existing scratches, and package pricing instantly.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - Benefits */}
          <div className="lg:col-span-7 space-y-6">
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

          {/* Right - Services visual list */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Supported Detailing Packages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((item, idx) => (
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
