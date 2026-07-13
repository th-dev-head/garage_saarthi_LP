import React from "react";
import Link from "next/link";
import { FaBuilding, FaExchangeAlt, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function MultiBranchPromo() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6">
              Manage Multiple Garage Branches with Centralized Control
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Take the headache out of running workshop chains. Control your inventory, view consolidated branch reports, and monitor sales and active mechanic tasks across all workshop locations.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary">
                  <FaBuilding className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">Centralized Admin Control</h3>
                  <p className="text-sm text-slate-600">Monitor all workshops from a single centralized dashboard.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary">
                  <FaExchangeAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">Inter-Branch Stock Transfers</h3>
                  <p className="text-sm text-slate-600">Request and transfer spare parts from one branch to another instantly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary">
                  <FaChartLine className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">Branch-Wise Reports</h3>
                  <p className="text-sm text-slate-600">Analyze performance, check revenues, and monitor expenses per location.</p>
                </div>
              </div>
            </div>
            <Link
              href="/solutions/multi-branch-garage-software"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors"
            >
              Explore Multi-Branch Garage Software
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-orange-950 rounded-2xl p-8 text-white border border-slate-700/50 shadow-lg relative overflow-hidden group">
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-orange-400">Scale Without Chaos</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Whether you run 2 or 20 branches, maintain consistency in your workflow. Map user roles, assign managers to specific locations, and secure your workshop databases seamlessly.
            </p>
            <div className="border-t border-slate-700/60 pt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Security standards</span>
              <span className="text-xs font-bold text-orange-400 bg-orange-950/40 px-3 py-1 rounded-full border border-orange-500/20">
                Multi-Branch Enabled
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
