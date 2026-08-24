"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaCheckCircle, FaHourglassHalf, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const bwsMatrix = [
  { feature: "Digital Job Cards", why: "Manage workshop jobs digitally on bay floor", status: "Yes" },
  { feature: "GST Billing & Tax Compliance", why: "Create structured GST billing workflows", status: "Yes" },
  { feature: "Custom Invoice Series", why: "Organize invoice numbering across locations", status: "Yes" },
  { feature: "Spare Parts Inventory", why: "Manage spare parts, stock levels, and checkout", status: "Yes" },
  { feature: "Workshop CRM", why: "Manage leads and customer service quotes", status: "Yes" },
  { feature: "Customer Records", why: "Keep customer profiles and contacts organized", status: "Yes" },
  { feature: "Vehicle Records", why: "Link chassis, odometer & model details", status: "Yes" },
  { feature: "Vehicle Service History", why: "View past vehicle repairs and substituted parts", status: "Yes" },
  { feature: "Service Alerts", why: "Schedule periodic service due checkups", status: "Yes" },
  { feature: "WhatsApp Alerts", why: "Automate WhatsApp service due messages", status: "Yes" },
  { feature: "Staff Attendance", why: "Track daily mechanic check-in/outs", status: "Yes" },
  { feature: "Mechanic Payroll & Commissions", why: "Compute net salary based on job card labor", status: "Yes" },
  { feature: "Leave Management", why: "Approve leave requests and plan shift cover", status: "Yes" },
  { feature: "Workshop Finance", why: "Track cash vs online income and expense ledgers", status: "Yes" },
  { feature: "Loans & Receivables", why: "Manage outstanding balances and credit terms", status: "Yes" },
  { feature: "Reports & Analytics", why: "Audit daily sales and inventory turnover", status: "Yes" },
  { feature: "Multi-Branch Support", why: "Manage multiple workshop branches centrally", status: "Yes" },
  { feature: "Role-Based Access", why: "Control staff permissions by job role", status: "Yes" },
  { feature: "CA Access Portal", why: "Grant view-only accounting export access", status: "Yes" },
  { feature: "Web Portal Access", why: "Access dashboard from any laptop browser", status: "Yes" },
  { feature: "Android & iOS Mobile App", why: "Manage workshop jobs on Android & iOS phones", status: "Yes" },
  { feature: "7-Day Free Trial", why: "Test all features before subscribing", status: "7 Days" },
];

export default function BWSFeatureCoverage() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Feature Comparison Matrix
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Workshop Management Software <GradientUnderline>Comparison Checklist</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Review how GarageSaarthi addresses each core workshop management capability.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm overflow-x-auto mb-8">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900 font-extrabold uppercase text-[11px] tracking-wider">
                <th className="pb-4">Capability</th>
                <th className="pb-4">Why It Matters</th>
                <th className="pb-4 text-center">Available in GarageSaarthi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60">
              {bwsMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                  <td className="py-3 font-bold text-slate-900">{row.feature}</td>
                  <td className="py-3 text-slate-600 text-xs">{row.why}</td>
                  <td className="py-3 text-center">
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-100/80 px-2.5 py-0.5 rounded-full text-xs">
                      <FaCheckCircle className="w-3.5 h-3.5" /> {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
          >
            Try These Features Free for 7 Days
          </Button>
        </div>
      </div>
    </section>
  );
}
