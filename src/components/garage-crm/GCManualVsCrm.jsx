import React from "react";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

export default function GCManualVsCrm() {
  const comparison = [
    { area: "Customer Contact List", manual: "Personal phone contacts, paper slips", crm: "Organized customer records linked to vehicle IDs" },
    { area: "Lead Enquiries", manual: "Paper notes, loose diary slips", crm: "Digital lead management and workflow statuses" },
    { area: "Service Follow-Ups", manual: "Remembering call dates manually", crm: "Structured follow-up calendar reminder lists" },
    { area: "Vehicle Connection", manual: "Separate records, manually entered", crm: "Linked customer and vehicle databases" },
    { area: "Service History logs", manual: "Scattered paper invoice registers", crm: "Organized, searchable vehicle service records" },
    { area: "Reminders & Promo Alerts", manual: "Manual messages, random WhatsApp drafts", crm: "Structured service alerts and promo codes" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Transformation
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Move from Manual Customer Tracking to Garage CRM Software
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Organize customer files, schedule follow-ups, and build structured workflows. See the difference:
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200/80 rounded-2xl shadow-sm bg-white">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 font-bold text-text-dark">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Operational Area</th>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider text-slate-500 bg-slate-100/50">Manual Garage Process</th>
                <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider text-primary">With GarageSaarthi CRM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors duration-150">
                  <td className="px-6 py-4 font-bold text-text-dark whitespace-nowrap">{row.area}</td>
                  <td className="px-6 py-4 flex items-start gap-2 bg-slate-50/30">
                    <FaTimesCircle className="text-red-500/80 w-4.5 h-4.5 mt-0.5 flex-shrink-0" />
                    <span>{row.manual}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 font-medium">
                      <FaCheckCircle className="text-green-500 w-4.5 h-4.5 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-900">{row.crm}</span>
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
