import React from "react";
import Link from "next/link";
import { FaStore, FaChartLine } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Column Left */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Multi-Branch Support
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Automate and Monitor Multi-Branch <GradientUnderline>Garage Operations</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Managing multiple locations requires centralized digital records. Bring all branches into a single consolidated <strong className="text-primary capitalize">garage automation platform</strong> account.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Centralized Operations</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Monitor active job cards, billing outputs, and spare parts stocks across branches centrally. Refer to details on{" "}
                  <Link href="/solutions/multi-branch-garage-software" className="text-primary font-bold hover:underline">
                    Multi-Branch Garage Software
                  </Link>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">Role-Based Access Controls</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Assign custom roles for billing managers, advisors, helpers, and branch owners under{" "}
                  <Link href="/features/user-management" className="text-primary font-bold hover:underline">
                    User Management
                  </Link>.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">Consolidated Reports</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Analyze daily business performance, net collections, and branch conversions in consolidated{" "}
                  <Link href="/features/reports" className="text-primary font-bold hover:underline">
                    Reports
                  </Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Consolidated Branch Analytics
            </span>
            <div className="space-y-3 font-sans text-xs">
              
              {/* Branch Item 1 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaStore className="text-primary w-4 h-4" />
                  <div>
                    <p className="font-bold text-slate-900">Ahmedabad Main Branch</p>
                    <p className="text-[9px] text-slate-400">12 Active Job Cards</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">₹42,500.00</p>
                  <p className="text-[9px] text-slate-500">Net Daily Sales</p>
                </div>
              </div>

              {/* Branch Item 2 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaStore className="text-primary w-4 h-4" />
                  <div>
                    <p className="font-bold text-slate-900">Baroda Branch</p>
                    <p className="text-[9px] text-slate-400">8 Active Job Cards</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">₹28,200.00</p>
                  <p className="text-[9px] text-slate-500">Net Daily Sales</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
