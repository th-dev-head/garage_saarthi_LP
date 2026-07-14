import React from "react";
import Link from "next/link";
import { FaTimesCircle, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function WADefinition() {
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
            <span className="relative inline-block">
              from One App
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
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
              <FaTimesCircle className="text-red-600 flex-shrink-0" /> Traditional Paper Registers
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Paper job cards are easily soiled, torn, or misplaced.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mechanics can find handwritten complaints hard to read.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Physical inventory counts require manual stock calculations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lost attendance cards make payroll verification difficult.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaTimesCircle className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>No easy logs for scheduling future customer reminders.</span>
              </li>
            </ul>
          </div>

          {/* Saarthi Way */}
          <div className="bg-[#EFE9E7]/40 border border-primary/20 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-primary flex-shrink-0" /> Digital Workshop Management App
            </h3>
            <ul className="space-y-4 text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Access and update job cards anywhere from any mobile device.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Clear diagnostics, parts consumption, and technician details.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Real-time stock counts and counter sales calculations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Integrated clock-in lists and mechanic commissions log.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>WhatsApp reminder notifications sent in one click.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Explore All Features Link */}
        <div className="mt-10 text-center">
          <Link
            href="/features"
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
