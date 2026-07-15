import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function GECentralized() {
  const comparison = [
    { label: "Job Cards", manual: "Paper logs, physical card binders, lost complaints", erp: "Structured digital job card records, mechanic logs" },
    { label: "Inventory", manual: "Manual register notebooks, stock mismatch", erp: "Centralized spare parts inventory & low-stock warnings" },
    { label: "CRM", manual: "Scattered diary notes, forgotten customer details", erp: "Unified customer database & automated reminder workflows" },
    { label: "Vehicles", manual: "Vehicle records disconnected from jobs", erp: "Linked profiles tracking detailed service histories" },
    { label: "Attendance", manual: "Manual sign-in sheets, calculation disputes", erp: "Digital employee clock-in & leave management dashboard" },
    { label: "Payroll", manual: "Complex commission logs, excel files", erp: "Attendance-linked automated payroll calculations" },
    { label: "Finance & Payments", manual: "Unpaid invoices tracked on notebooks", erp: "Connected payment tracking & GST billing records" },
    { label: "Branches", manual: "Daily calling to check sales, zero visibility", erp: "Centralized multi-branch control & performance reports" },
    { label: "Reports", manual: "Scattered paperwork, manual calculations", erp: "Aggregated reports & real-time analytics graphs" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Compare Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Replace Disconnected Garage Records with One Centralized Platform
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            See how an integrated garage ERP platform saves hours of manual work and administrative confusion compared to traditional paper operations.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200/80 rounded-2xl shadow-sm bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 font-bold text-text-dark">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Operational Area</th>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider text-slate-500 bg-slate-100/50">Disconnected Manual records</th>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider text-primary">GarageSaarthi Connected ERP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors duration-150">
                  <td className="px-6 py-4 font-bold text-text-dark whitespace-nowrap">{row.label}</td>
                  <td className="px-6 py-4 flex items-start gap-2 bg-slate-50/30">
                    <FaTimesCircle className="text-red-500/80 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{row.manual}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 font-medium">
                      <FaCheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-900">{row.erp}</span>
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
