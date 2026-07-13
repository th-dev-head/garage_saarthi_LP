import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

export default function DigitalOperations() {
  const comparisons = [
    { label: "Job Card Management", manual: "Messy paper job cards & manual checklists", digital: "Professional digital job cards with photos" },
    { label: "Customer Inquiries", manual: "Scattered records & forgotten details", digital: "Centralized database & clean service history" },
    { label: "Inventory & Stock", manual: "Separate spreadsheets & surprise stockouts", digital: "Automated stock logs & low-stock reminders" },
    { label: "Employee Operations", manual: "Manual attendance registers & salary sheets", digital: "One-click attendance logs & auto-payroll calculation" },
    { label: "Customer Loyalty", manual: "Missed follow-ups & lost opportunities", digital: "Next-service due alerts & custom updates" },
    { label: "Financial Records", manual: "Scattered bills, paper notes, and tax issues", digital: "GST billing, logs, and CA report downloads" }
  ];

  return (
    <section className="py-20 px-4 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Replace Manual Garage Work with a Digital Management System
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how migrating to a digital garage management system transforms your workshop's daily routines.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Process</th>
                <th className="py-4 px-6 font-bold bg-red-950/20 text-red-500">Manual Process</th>
                <th className="py-4 px-6 font-bold bg-green-950/20 text-green-500">With GarageSaarthi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-slate-900">{row.label}</td>
                  <td className="py-4 px-6 bg-red-50/30 text-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <FaTimes className="text-red-500 flex-shrink-0" />
                      {row.manual}
                    </span>
                  </td>
                  <td className="py-4 px-6 bg-green-50/30 text-slate-900 font-medium">
                    <span className="inline-flex items-center gap-2">
                      <FaCheck className="text-green-600 flex-shrink-0" />
                      {row.digital}
                    </span>
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
