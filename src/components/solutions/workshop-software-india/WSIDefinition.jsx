import React from "react";
import Link from "next/link";
import { FaCogs, FaBoxes, FaFileInvoiceDollar, FaUserFriends } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const wsiPillars = [
  {
    icon: FaCogs,
    title: "1. Repair Bay Operations",
    desc: "Digital job cards, complaint logging, mechanic allocation, and work order progress tracking."
  },
  {
    icon: FaBoxes,
    title: "2. Parts & Inventory",
    desc: "Spare parts stock auditing, checkout deductions, low-stock warnings, and retail counter sales."
  },
  {
    icon: FaFileInvoiceDollar,
    title: "3. GST Invoicing & CA Access",
    desc: "GST tax compliance, custom billing series, cash/online collection logs, and view-only CA access."
  },
  {
    icon: FaUserFriends,
    title: "4. Customer Retention",
    desc: "Customer & vehicle service histories, CRM lead tracking, and automated WhatsApp service alerts."
  }
];

export default function WSIDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Definition
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            All-in-One Workshop Management Software <GradientUnderline>for Indian Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            True workshop software goes far beyond basic billing. It connects every part of your workshop operation into one real-time digital system.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {wsiPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xs md:text-sm text-slate-600">
            Learn more about our core{" "}
            <Link href="/solutions/workshop-management-software/" className="font-bold text-primary hover:underline">
              workshop management software
            </Link>{" "}
            platform.
          </p>
        </div>
      </div>
    </section>
  );
}

