import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaHourglassHalf, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const featureMatrix = [
  { feature: "Digital Job Cards", available: true, label: "Yes" },
  { feature: "Counter Sales & Retail Billing", available: true, label: "Yes" },
  { feature: "Spare Parts Inventory Management", available: true, label: "Yes" },
  { feature: "GST Billing & Invoice Series", available: true, label: "Yes" },
  { feature: "Customer Record Profiles", available: true, label: "Yes" },
  { feature: "Vehicle History & Records", available: true, label: "Yes" },
  { feature: "CRM & Lead Management", available: true, label: "Yes" },
  { feature: "Service Alerts Tracking", available: true, label: "Yes" },
  { feature: "WhatsApp Reminder Automation", available: true, label: "Yes" },
  { feature: "Staff Attendance Tracking", available: true, label: "Yes" },
  { feature: "Leave Management", available: true, label: "Yes" },
  { feature: "Mechanic Payroll & Commissions", available: true, label: "Yes" },
  { feature: "Payments & Finance Ledgers", available: true, label: "Yes" },
  { feature: "Loan Record Tracking", available: true, label: "Yes" },
  { feature: "Workshop Reports & Dashboard", available: true, label: "Yes" },
  { feature: "Multi-Branch Management", available: true, label: "Yes" },
  { feature: "Role-Based User Access", available: true, label: "Yes" },
  { feature: "CA Access Portal", available: true, label: "Yes" },
  { feature: "Cloud Web Portal Access", available: true, label: "Yes" },
  { feature: "Android Mobile Application", available: true, label: "Yes" },
  { feature: "iOS Application (iPhone/iPad)", available: true, label: "Yes" },
];

export default function BGSFeatureCoverage() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Feature Matrix
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How GarageSaarthi Covers Essential{" "}
            <GradientUnderline>Garage Management Needs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            As a complete, all-in-one garage management software platform, GarageSaarthi combines workshop operations, customer management, staff payroll, and business visibility.
          </p>
        </div>

        {/* Feature Table */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm overflow-x-auto mb-8">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900 font-extrabold uppercase text-[11px] tracking-wider">
                <th className="pb-4">Garage Software Requirement</th>
                <th className="pb-4 text-center">Available in GarageSaarthi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60">
              {featureMatrix.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                  <td className="py-3 font-medium text-slate-800">{item.feature}</td>
                  <td className="py-3 text-center">
                    {item.available ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100/80 px-2.5 py-0.5 rounded-full text-xs">
                        <FaCheckCircle className="w-3.5 h-3.5" /> {item.label}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-700 font-bold bg-amber-100/80 px-2.5 py-0.5 rounded-full text-xs">
                        <FaHourglassHalf className="w-3 h-3" /> {item.label}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore All Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
