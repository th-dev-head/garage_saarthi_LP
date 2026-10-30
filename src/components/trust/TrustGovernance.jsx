"use client";

import React from "react";
import { FaFileExport, FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "@/src/components/common/GradientUnderline";

export default function TrustGovernance() {
  const points = [
    {
      icon: FaFileExport,
      title: "1-Click Data Portability",
      desc: "You can export your complete customer directory, vehicle service history, spare parts inventory, and financial ledger at any time in standardized CSV or Excel formats. We never hold your business data hostage.",
    },
    {
      icon: FaTrashAlt,
      title: "Complete Account Deletion",
      desc: "If you ever choose to discontinue using GarageSaarthi, you have the right to request a complete purge. Upon verified written authorization from the account owner, your tenant database records are permanently deleted from active servers.",
    },
    {
      icon: FaCheckCircle,
      title: "Reliable Cloud Uptime",
      desc: "Hosted on resilient cloud infrastructure with redundant power, automated failover, and continuous monitoring to ensure your reception desk and bays remain operational during peak workshop hours.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Freedom & Compliance
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Data Portability &{" "}
            <GradientUnderline>Zero Vendor Lock-In</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            You retain absolute sovereignty over your records. Export your data whenever you need, with no artificial restrictions.
          </p>
        </div>

        {/* Governance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-8 flex flex-col justify-between hover:border-[#B02E0C]/30 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EFE9E7] text-[#B02E0C] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

