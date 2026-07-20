import React from "react";
import Link from "next/link";
import { FaTimesCircle, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const problems = [
  "Paper order forms that get lost, wet, or damaged in washing bays.",
  "Customer lists written in diaries with no linked coating inspection dates.",
  "Missed follow-up dates for yearly ceramic warranty inspections.",
  "Detailing sprays, compounds, and PPF rolls tracked manually in diaries.",
  "Excel sheets or paper bills leading to billing leakages and delayed files.",
  "Staff performance and detailer attendance tracked on loose schedules.",
];

const solutions = [
  "Digital job cards detailing paint correction, ceramic coatings, or PPF jobs.",
  "Centralized vehicle profiles linked automatically to customer records.",
  "Cloud-based history logs accessible instantly on web and Android app.",
  "Integrated coating inventory tracking with low stock dashboards.",
  "Tax-compliant GST invoice parameters configured in seconds.",
  "Mechanic and detailer payroll, check-ins, and job cards commissions sync-mapped.",
];

export default function CDDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Studio Operations Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Your Detailing Studio{" "}
            <GradientUnderline>Without Scattered Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Running an auto detailing studio or coating shop requires coordinating incoming jobs, customer profiles, expensive chemical inventory, GST billing, and detailer commissions. GarageSaarthi centralizes these workflows.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Problems */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm">
            <h3 className="text-base font-extrabold text-red-700 mb-6 flex items-center gap-2">
              <FaTimesCircle className="text-red-600 flex-shrink-0" /> The Manual Way
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-slate-600">
              {problems.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-[#EFE9E7]/40 border border-primary/20 p-8 rounded-3xl shadow-sm">
            <h3 className="text-base font-extrabold text-primary mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-primary flex-shrink-0" /> With GarageSaarthi
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-slate-700">
              {solutions.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
          >
            Explore GarageSaarthi Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
