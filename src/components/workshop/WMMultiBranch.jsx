import React from "react";
import Link from "next/link";
import { FaCodeBranch, FaExchangeAlt, FaChartLine, FaArrowRight } from "react-icons/fa";

export default function WMMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column — Visual / Information Box */}
          <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-orange-950 rounded-2xl p-8 text-white border border-slate-700/50 shadow-lg relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-orange-400">Scale Your Workshop Network</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Never lose sight of any outlet. Assign distinct roles to branch managers, control which details each user can view, and coordinate parts inventory across your entire business seamlessly.
            </p>
            <div className="border-t border-slate-700/60 pt-6 flex items-center justify-between">
              <span className="text-xs text-slate-400">Multi-Location Support</span>
              <span className="text-xs font-bold text-orange-400 bg-orange-950/40 px-3 py-1 rounded-full border border-orange-500/20">
                100% Real-Time
              </span>
            </div>
          </div>

          {/* Right Column — Text Info & List */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Multi-Branch Module
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-snug">
              Control All Branches from{" "}
              <span className="relative inline-block">
                One Central Dashboard.
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Say goodbye to physical branch visits. Manage multiple garages and workshops from a single account. Easily track individual branch performance, monitor total revenues, and allocate inventory where it is needed most.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mt-0.5">
                  <FaCodeBranch className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Unified Admin Access</h4>
                  <p className="text-xs text-slate-600">Switch between different branch views instantly without logging out.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mt-0.5">
                  <FaExchangeAlt className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Inter-Branch Inventory Transfer</h4>
                  <p className="text-xs text-slate-600">Transfer spare parts between branches to meet local demand easily.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary mt-0.5">
                  <FaChartLine className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Consolidated Reports</h4>
                  <p className="text-xs text-slate-600">Get combined GST billing reports, sales analytics, and expense sheets.</p>
                </div>
              </div>
            </div>

            <Link
              href="/solutions/multi-branch-garage-software"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors text-sm"
            >
              Learn about Multi-Branch Setup <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
