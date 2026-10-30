"use client";

import React from "react";
import { FaFileInvoiceDollar, FaClock, FaDoorClosed, FaAward } from "react-icons/fa";

export default function CustomersEvidenceStrip() {
  const metrics = [
    {
      icon: FaFileInvoiceDollar,
      value: "45,000+",
      label: "Job Cards Processed",
      detail: "Created across multi-bay workshops without misplaced paper records.",
    },
    {
      icon: FaClock,
      value: "35%",
      label: "Faster Bay Billing",
      detail: "Direct catalog lookup and labor rates eliminate estimation delays.",
    },
    {
      icon: FaDoorClosed,
      value: "100%",
      label: "Exit Gate Pass Control",
      detail: "Restricted digital gate passes prevent vehicles leaving with unsettled dues.",
    },
    {
      icon: FaAward,
      value: "4.9 / 5",
      label: "Workshop Satisfaction",
      detail: "Independently verified ratings from service managers and mechanics.",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-16 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
            SUBSTANTIATED OPERATIONAL METRICS
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark">
            Real Impact Measured on Indian Workshop Floors
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 text-center flex flex-col items-center justify-between hover:border-[#B02E0C]/30 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EFE9E7] text-[#B02E0C] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-[#0F172A] mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-2">
                  {item.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
