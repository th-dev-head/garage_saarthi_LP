import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";
import Link from "next/link";

const problems = [
  "Paper job cards that get lost, oily, or misplaced on the workshop floor.",
  "Bike service details written in manual registers that are hard to search.",
  "Customer contact details spread across notebooks, diaries, or phone logs.",
  "Spare parts inventory tracked manually, leading to stock mismatches.",
  "Service records difficult to find when a returning customer visits.",
  "Manual follow-ups for periodic bike maintenance alerts that get forgotten.",
];

const solutions = [
  "Digital job cards organized for every bike service and repair.",
  "Centralized vehicle database linked to customer profiles.",
  "Digital customer records stored securely in the cloud.",
  "Real-time spare parts stock tracking with low-stock alerts.",
  "Instant search lookup to access complete vehicle service history.",
  "Automated WhatsApp service reminders sent directly to bike owners.",
];

export default function BWDefinition() {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById("bike-features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Bike Garage Problem & Product Definition
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            A Bike Workshop Management Software Built for{" "}
            <GradientUnderline>Daily Garage Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Running a busy two-wheeler workshop is challenging when you rely on paper job cards and manual registers. GarageSaarthi helps you digitize customer vehicles, inventory, billing, mechanic payroll, and service alerts in one unified platform.
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
            href="#bike-features"
            onClick={scrollToFeatures}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
          >
            See How GarageSaarthi Works
          </Link>
        </div>
      </div>
    </section>
  );
}
