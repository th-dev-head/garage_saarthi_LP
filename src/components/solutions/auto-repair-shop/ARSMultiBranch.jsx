import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";


export default function ARSMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Details */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Multi-Branch Chains
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Multiple Auto Repair Shop{" "}
              <GradientUnderline>Branches from One Platform</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Grow your auto repair brand without losing administrative control. Create custom logins for separate branch managers, allocate parts inventory across storage sites, and view consolidated reports from a unified owner dashboard.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Check live stock levels at other branches. If one outlet runs out of an oil filter or brake pads, check availability elsewhere instantly.
            </p>
            <Link
              href="/solutions/multi-branch-garage-software"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Multi-Branch Garage Software
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Visual Column */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xs font-bold text-slate-800 mb-4">Multi-Branch Live Sales</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-slate-800">Branch 1: Mumbai Main</p>
                  <p className="text-[10px] text-slate-400">8 Active job cards</p>
                </div>
                <span className="font-bold text-green-600">₹24,500</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 flex justify-between items-center text-xs">
                <div>
                  <p className="font-bold text-slate-800">Branch 2: Pune Outlet</p>
                  <p className="text-[10px] text-slate-400">4 Active job cards</p>
                </div>
                <span className="font-bold text-green-600">₹12,800</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
