"use client";

import React from "react";
import { FaUserCog, FaCashRegister, FaUserTie, FaCheck, FaTimes } from "react-icons/fa";
import GradientUnderline from "@/src/components/common/GradientUnderline";

export default function TrustRolePermissions() {
  const roles = [
    {
      icon: FaUserCog,
      role: "Floor Mechanics",
      tag: "Bay Operations",
      description: "Designed for technicians on the shop floor using mobile devices.",
      allowed: [
        "View assigned vehicles & repair checklists",
        "Upload vehicle damage & inspection photos",
        "Request spare parts from workshop inventory",
        "Selfie-verified punch in & out attendance",
      ],
      restricted: [
        "Spare part purchase price & gross margins",
        "Overall garage revenue & financial reports",
        "Customer phone numbers & private billing data",
      ],
    },
    {
      icon: FaCashRegister,
      role: "Front Desk & Advisors",
      tag: "Customer Facing",
      description: "Designed for service advisors and billing desk managers.",
      allowed: [
        "Create digital job cards & lookup past service",
        "Generate GST invoices & split payment receipts",
        "Send automated WhatsApp updates & reminders",
        "Process customer gate passes upon full payment",
      ],
      restricted: [
        "Mechanic salary, commissions & staff payroll",
        "Account deletion or master data export",
        "Multi-branch consolidated financial statements",
      ],
    },
    {
      icon: FaUserTie,
      role: "Workshop Owner",
      tag: "Full Super-Admin",
      description: "Designed exclusively for garage proprietors and business partners.",
      allowed: [
        "Complete 360° profit, loss, and expense tracking",
        "Full staff commission, attendance & payroll setup",
        "Custom role permissions & bay assignment rules",
        "One-click data export in CSV / Excel format",
      ],
      restricted: [],
    },
  ];

  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Access Governance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Shop Floor Privacy by{" "}
            <GradientUnderline>Staff Role & Permission</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Internal transparency without exposing business secrets. Give each employee exactly the access needed to do their job.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/50 shadow-sm rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#B02E0C]/30 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EFE9E7] text-[#B02E0C] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.role}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {item.description}
                  </p>

                  {/* Allowed Features */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      Permitted Access:
                    </span>
                    {item.allowed.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <FaCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Restricted Features */}
                  {item.restricted.length > 0 && (
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block">
                        Restricted / Hidden:
                      </span>
                      {item.restricted.map((restr, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-500">
                          <FaTimes className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span>{restr}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

