import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";
import { FaTimesCircle, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function WADefinition() {
  const traditionalPoints = [
    "Paper job cards are easily soiled, torn, or misplaced.",
    "Mechanics can find handwritten complaints hard to read.",
    "Physical inventory counts require manual stock calculations.",
    "Lost attendance cards make payroll verification difficult.",
    "No easy logs for scheduling future customer reminders."
  ];

  const digitalPoints = [
    "Access and update job cards anywhere from any mobile device.",
    "Clear diagnostics, parts consumption, and technician details.",
    "Real-time stock counts and counter sales calculations.",
    "Integrated clock-in lists and mechanic commissions log.",
    "WhatsApp reminder notifications sent in one click."
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            App Definition
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Daily Workshop Operations{" "}
              <GradientUnderline>from One App</GradientUnderline>
            </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Unify your workshop registries into a single cloud-based application. Save time, prevent part leakage, and avoid disputes with clear digital records.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Way */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-red-700 mb-6 flex items-center gap-2">
               Traditional Paper Registers
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              {traditionalPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Saarthi Way */}
          <div className="bg-[#EFE9E7]/40 border border-primary/20 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
              Digital Workshop Management App
            </h3>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              {digitalPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Explore All Features Link */}
        <div className="mt-10 text-center">
          <Link
            href="/features/"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore All Features
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

