import React from "react";
import Link from "next/link";
import { FaNetworkWired, FaArrowRight } from "react-icons/fa";

export default function WAMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none md:order-first order-last">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">Multi-Branch Registry</span>
              <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded font-semibold">Online</span>
            </div>
            <div className="space-y-3 text-xs text-slate-600 font-sans">
              <div className="flex justify-between">
                <span>Branch 1: Katargam (Surat)</span>
                <span className="font-semibold text-slate-900">₹85,000 Sales Today</span>
              </div>
              <div className="flex justify-between">
                <span>Branch 2: Adajan (Surat)</span>
                <span className="font-semibold text-slate-900">₹62,000 Sales Today</span>
              </div>
              <div className="flex justify-between">
                <span>Total Active Staff</span>
                <span className="font-semibold text-slate-900">24 employees clocked in</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Scale Your Business
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Multiple Workshop Branches{" "}
              <span className="relative inline-block">
                with GarageSaarthi
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Get complete consolidated oversight. Manage inventory transfer registries, compare revenue graphs, and handle staff assignments across branches from one app.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/solutions/multi-branch-garage-software"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Explore Multi-Branch Setup
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
