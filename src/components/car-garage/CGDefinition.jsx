import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaTimesCircle, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const problems = [
  "Paper job cards that get lost or damaged on the garage floor.",
  "Customer registers without linked vehicle service history.",
  "WhatsApp conversations replacing professional service records.",
  "Excel sheets for billing that lead to missed payments.",
  "No reliable follow-up system for periodic car service reminders.",
  "Manual stock counts causing spare parts shortages.",
];

const solutions = [
  "Digital job cards organized for every car repair and service.",
  "Customer profiles linked to vehicle records and complete history.",
  "Cloud-based records accessible from any device, anytime.",
  "GST-compliant invoices generated and shared in seconds.",
  "Automated service alerts sent to car owners on WhatsApp.",
  "Live inventory tracking with low-stock notifications.",
];

export default function CGDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Garage Problem & Solution
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Your Car Garage Without Paper Registers and{" "}
            <span className="relative inline-block">
              Scattered Records
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            As the number of car repair jobs, customer vehicles, and mechanics in your garage grows, managing everything through paper records and WhatsApp becomes unreliable. GarageSaarthi brings every operation into one centralized car garage management system.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="bg-white border border-slate-200/80 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-red-700 mb-6 flex items-center justify-center gap-2">
              <FaTimesCircle className="text-red-600 flex-shrink-0" /> The Manual Garage Way
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              {problems.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-[#EFE9E7]/40 border border-primary/20 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-primary mb-6 flex items-center justify-center gap-2">
              <FaCheckCircle className="text-primary flex-shrink-0" /> The GarageSaarthi Way
            </h3>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              {solutions.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Start Managing Your Garage Digitally
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
