import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

export default function GJCPaperVsDigital() {
  const comparison = [
    { label: "Record Entry", paper: "Handwritten details, fuel levels scribbled on diaries", digital: "Structured digital input fields, custom fuel checklists" },
    { label: "Information Search", paper: "Sifting physical files, missing customer detail slips", digital: "Searchable online databases with histories" },
    { label: "Job Tracking", paper: "Walking to mechanic bays to ask status logs", digital: "Real-time repair tracking on desktop & mobile app" },
    { label: "Spare Issues", paper: "Unrecorded parts taken from drawers, stock leaks", digital: "Spare parts issued and mapped to job cards instantly" },
    { label: "Estimates", paper: "Scratched math, verbal pricing disputes", digital: "Pre-loaded parts and labor rates with PDF summaries" },
    { label: "Billing Link", paper: "Re-writing entire job details into a duplicate invoice", digital: "One-click conversion of job card details to final invoice" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Digitization Benefits
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Replace Paper Job Cards with a Digital Garage Job Card System
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate operational mistakes, parts leaks, and billing friction. Compare traditional paper methods with digital garage records:
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200/80 rounded-2xl shadow-sm bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 font-bold text-text-dark">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Operational Area</th>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider text-slate-500 bg-slate-100/50">Paper Job Cards</th>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider text-primary">GarageSaarthi Digital Job Cards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors duration-150">
                  <td className="px-6 py-4 font-bold text-text-dark whitespace-nowrap">{row.label}</td>
                  <td className="px-6 py-4 flex items-start gap-2 bg-slate-50/30">
                    <FaTimesCircle className="text-red-500/80 w-4.5 h-4.5 mt-0.5 flex-shrink-0" />
                    <span>{row.paper}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 font-medium">
                      <FaCheckCircle className="text-green-500 w-4.5 h-4.5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-900">{row.digital}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
