import React from "react";
import Link from "next/link";
import { FaClipboardCheck, FaUserCheck, FaTools, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function WSIJobCards() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Job Card Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Create and Manage Workshop Job Cards <GradientUnderline>Digitally</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Replace dirty, oily paper sheets with instant digital job cards created right beside the vehicle on mobile phones or laptops.
          </p>
        </div>

        {/* 3 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaClipboardCheck />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Pre-Repair Complaint Logging</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Record customer complaint notes, odometer readings, fuel levels, and vehicle walkaround scratch logs at entry.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaUserCheck />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Mechanic Task Allocation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assign work order tasks to available bay mechanics and track live repair progress from entry to final testing.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
              <FaTools />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Labor & Estimate Quotes</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Define labor rates, estimate total costs, and share digital pre-repair estimates straight to customer WhatsApp.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/job-card-management"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Digital Job Cards <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
