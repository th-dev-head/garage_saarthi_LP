import React from "react";
import Link from "next/link";
import { FaTimesCircle, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const problems = [
  "Oily paper work orders that get lost or torn during heavy servicing.",
  "Spreadsheets or registers for tracking vehicle service history logs that are hard to search.",
  "No reliable system to schedule preventative maintenance due alarms.",
  "Vehicle parts and bulk inventory checked manually, leading to repair delays.",
  "Excel sheets or paper bills causing billing leakages and delayed files.",
  "Staff performance and mechanic attendance tracked on separate diaries.",
];

const solutions = [
  "Digital job cards organized for fleet vehicle repairs and maintenance.",
  "Centralized vehicle profiles linked automatically to customer records.",
  "Cloud-based history logs accessible instantly on web, Android, and iOS apps.",
  "Integrated spare parts inventory tracking with low stock dashboards.",
  "Tax-compliant GST invoice parameters configured in seconds.",
  "Mechanic payroll lists, check-ins, and job cards commissions sync-mapped.",
];

export default function FLDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Fleet Operations Management
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage In-House and Commercial Fleet Repairs{" "}
            <GradientUnderline>Without Confused Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Running a fleet maintenance workshop or commercial repair shop requires coordinating active repair schedules, vehicle records, parts inventory, GST billing, and mechanic commissions. GarageSaarthi centralizes these workflows.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Problems */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm">
            <h3 className="text-base font-extrabold text-red-700 mb-6 flex items-center gap-2">
              The Manual Way
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
              With GarageSaarthi
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
            href="/features/"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
          >
            Explore GarageSaarthi Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
