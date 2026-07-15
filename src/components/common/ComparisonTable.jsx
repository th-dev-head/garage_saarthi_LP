import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import GradientUnderline from "./GradientUnderline";

export default function ComparisonTable({
  title,
  titleHighlight,
  subtitle,
  manualHeader = "The Manual Way",
  digitalHeader = "The GarageSaarthi Way",
  comparisons = []
}) {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4">
            {titleHighlight ? <>{title}{" "}<GradientUnderline>{titleHighlight}</GradientUnderline></> : title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Clean Comparison Grid Container */}
        <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-50/80 px-6 py-4 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-500">
            <div className="col-span-3">Operational Area</div>
            <div className="col-span-4 text-slate-700">{manualHeader}</div>
            <div className="col-span-5 text-primary">{digitalHeader}</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {comparisons.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start p-6 hover:bg-slate-50/40 transition-colors duration-200"
              >
                {/* Operational Area Title */}
                <div className="col-span-1 md:col-span-3 flex items-center md:pt-1">
                  <span className="text-sm font-bold text-slate-900 border-l-2 border-primary/40 pl-3">
                    {row.label}
                  </span>
                </div>

                {/* Manual Pain Points Description */}
                <div className="col-span-1 md:col-span-4 flex items-start gap-2.5 text-slate-500 text-sm leading-relaxed">
                  <FaTimes className="text-rose-500 w-3.5 h-3.5 mt-1 flex-shrink-0" />
                  <span>{row.manual}</span>
                </div>

                {/* Digital Solutions Description */}
                <div className="col-span-1 md:col-span-5 flex items-start gap-2.5 text-slate-900 font-medium text-sm leading-relaxed">
                  <FaCheck className="text-primary w-3.5 h-3.5 mt-1 flex-shrink-0" />
                  <span>{row.digital}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
