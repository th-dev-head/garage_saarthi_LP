import React from "react";
import Link from "next/link";
import { FaBuilding, FaExchangeAlt, FaUserLock, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const wsiMultiBranchPillars = [
  {
    icon: FaBuilding,
    title: "Branch Switcher Dashboard",
    desc: "Toggle between different workshop branches to check real-time job cards, daily revenue collections, and stock balances."
  },
  {
    icon: FaExchangeAlt,
    title: "Inter-Branch Stock Movement",
    desc: "Transfer spare parts between workshop branches seamlessly, auditing transit logs and inventory valuation dynamically."
  },
  {
    icon: FaUserLock,
    title: "Role-Based Access Control",
    desc: "Configure user permissions so branch managers only access local workshop data while owners retain full network visibility."
  }
];

export default function WSIMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Location Networks
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Multiple Workshop Branches <GradientUnderline>with Centralized Control</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Expand your workshop business across multiple locations while keeping operations, stock, and finances under unified owner management.
          </p>
        </div>

        {/* 3 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {wsiMultiBranchPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3">
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

        <div className="flex justify-center">
          <Link
            href="/solutions/multi-branch-garage-software"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore Multi-Branch Software <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

