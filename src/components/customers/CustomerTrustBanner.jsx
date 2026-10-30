"use client";

import React from "react";
import Link from "next/link";
import { FaShieldAlt, FaLock, FaUserSecret, FaDatabase, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "@/src/components/common/GradientUnderline";

export default function CustomerTrustBanner() {
  const trustPoints = [
    {
      icon: FaLock,
      title: "256-Bit SSL Cloud Encryption",
      desc: "All financial data, vehicle records, and customer contacts are encrypted in transit and at rest.",
    },
    {
      icon: FaUserSecret,
      title: "Zero Third-Party Data Selling",
      desc: "Your garage customer base is 100% yours. We never sell or share customer lists with parts brokers or third parties.",
    },
    {
      icon: FaDatabase,
      title: "Isolated Multi-Tenant Security",
      desc: "Strict logical database boundaries ensure no neighboring garage can ever access your job cards or accounting.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 px-4 lg:px-15 2xl:px-50">
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-8 lg:p-12 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              GarageSaarthi Trust Commitment
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Your Workshop Customer Data{" "}
              <GradientUnderline>Belongs Strictly to You</GradientUnderline>
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We understand that vehicle owner phone numbers, service histories, and profit margins are the lifeblood of your workshop. GarageSaarthi is engineered with strict cloud governance and verifiable safeguards.
            </p>
          </div>

          {/* Trust Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {trustPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/70 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EFE9E7] flex items-center justify-center text-[#B02E0C] mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Trust Center Action Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/60">
            <div>
              <div className="text-sm font-bold text-slate-900">
                Want to inspect our compliance and security protocols?
              </div>
              <div className="text-xs text-slate-500">
                Read our full data protection policies, uptime standards, and privacy architecture.
              </div>
            </div>

            <Link
              href="/trust/"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#B02E0C] text-white hover:bg-[#902408] transition-colors whitespace-nowrap"
            >
              Visit GarageSaarthi Trust Centre
              <FaArrowRight className="ml-2 w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
