"use client";

import React from "react";
import { FaUserCheck, FaLock, FaDatabase, FaCloudDownloadAlt } from "react-icons/fa";
import GradientUnderline from "@/src/components/common/GradientUnderline";

export default function TrustSecurityPillars() {
  const pillars = [
    {
      icon: FaUserCheck,
      title: "100% Data Ownership",
      detail: "Your customer directory, vehicle registration numbers, job cards, and invoices are your proprietary business assets. We never sell, share, or broker your customer data to spare parts dealers, insurers, or marketing companies.",
    },
    {
      icon: FaLock,
      title: "256-Bit SSL Cloud Encryption",
      detail: "All communications between your mobile phone or browser and GarageSaarthi servers are encrypted using modern TLS 1.3 with 256-bit encryption. Financial data, billing details, and customer records remain secure in transit and at rest.",
    },
    {
      icon: FaDatabase,
      title: "Isolated Multi-Tenant Security",
      detail: "GarageSaarthi employs strict row-level security boundaries. Every workshop operates in an isolated logical tenant space, ensuring that no neighboring garage can ever access, search, or view your service orders.",
    },
    {
      icon: FaCloudDownloadAlt,
      title: "Automated Daily Cloud Backups",
      detail: "Never lose a single invoice or past service record if a phone is lost or damaged. All workshop databases are continuously backed up on secure enterprise cloud storage with point-in-time recovery.",
    },
  ];

  return (
    <section id="security-pillars" className="bg-white py-16 lg:py-24 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Core Safeguards
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Four Pillars of Our{" "}
            <GradientUnderline>Workshop Data Security</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Engineered from day one to guarantee that your customer base and profit margins remain strictly within your workshop.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => {
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

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.detail}
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

