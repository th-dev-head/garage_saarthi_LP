import React from "react";
import Link from "next/link";
import { FaFileInvoice, FaWrench, FaChartLine } from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";

export default function GIConnectedOperations() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Operations Sync
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Connect Inventory with Your <GradientUnderline>Daily Garage Operations</GradientUnderline>
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            <p>
              Unlike generic, standalone stock-keeping apps, GarageSaarthi's inventory tools are directly synced with active repair orders on your workshop floor. 
            </p>
            <p>
              When a mechanic uses a replacement spark plug or filter and adds it to a customer's digital job card, the stock count reduces in real-time. This dynamic link prevents duplicate records and saves hours on audits.
            </p>
          </div>

          <div className="space-y-4">
            {/* Job Cards connection */}
            <div className="flex gap-3">
              <FaWrench className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                  <Link href="/features/job-cards" className="hover:underline text-primary">
                    Inventory and Job Cards
                  </Link>
                </h3>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Mechanics assign parts directly from stock to repair cards, auto-calculating retail margins on checkout.
                </p>
              </div>
            </div>

            {/* Counter Sales connection */}
            <div className="flex gap-3">
              <FaFileInvoice className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                  <Link href="/features/counter-sales" className="hover:underline text-primary">
                    Inventory and Counter Sales
                  </Link>
                </h3>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Sell spare parts directly to walk-in clients without creating a formal job card repair order.
                </p>
              </div>
            </div>

            {/* Reports connection */}
            <div className="flex gap-3">
              <FaChartLine className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-0.5">
                  <Link href="/features/reports" className="hover:underline text-primary">
                    Inventory Reports
                  </Link>
                </h3>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Monitor stock valuation, monthly parts turnover, and high-margin consumables automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual Grid Mapping */}
        <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-6 shadow-sm">
          <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3">
            Real-Time Synchronization Flow
          </h4>

          <div className="relative border-l-2 border-primary/20 pl-6 space-y-6 ml-3">
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-xs" style={{ left: "-32px" }} />
              <h5 className="text-xs font-bold text-slate-800 mb-1">Part Checked Out</h5>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Advisor adds 1x Engine Oil (Castrol) to active **Job Card #JC-1049**.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <span className="absolute top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-xs" style={{ left: "-32px" }} />
              <h5 className="text-xs font-bold text-slate-800 mb-1">Stock Auto-Deducted</h5>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Centralized **Garage Inventory Management System** reduces Castrol stock count by 1 unit immediately.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <span className="absolute top-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-xs" style={{ left: "-32px" }} />
              <h5 className="text-xs font-bold text-slate-800 mb-1">Billing Auto-Populated</h5>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Final **Invoice** automatically includes the spare part description, quantity, price, and GST without dual entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
