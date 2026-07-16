import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRAServicePerformance() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-text-dark">Service Performance Metrics:</h3>
          <ul className="space-y-2 text-xs text-slate-500 leading-relaxed">
            <li>• Total job cards created and resolved</li>
            <li>• Open repair card durations</li>
            <li>• Service alert next-due logs</li>
            <li>• Replaced items list per service</li>
          </ul>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Metrics
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Review Service and <GradientUnderline>Workshop Performance Reports</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Keep track of all vehicle service sheets, diagnostics logs, closed cards, and service calendar tasks. Plan labor schedules and ensure every returning vehicle is handled on time.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="/features/job-cards" className="text-xs text-primary font-bold hover:underline">
              Job Card Reporting →
            </Link>
            <Link href="/features/service-alerts" className="text-xs text-primary font-bold hover:underline">
              Service Alerts →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}