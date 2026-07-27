import React from "react";
import Link from "next/link";
import { FaNetworkWired, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const branchDirectory = [
  {
    name: "Branch A (Mumbai Central)",
    spares: "120 Spares",
    details: "Spark Plugs: 12 Units | Engine Oils: 45 Ltr"
  },
  {
    name: "Branch B (Thane West)",
    spares: "85 Spares",
    details: "Spark Plugs: 4 Units (Low) | Engine Oils: 12 Ltr"
  }
];

export default function GIMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Visual representation */}
        <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-6 shadow-sm order-2 md:order-1">
          <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 flex items-center gap-2">
            <FaNetworkWired className="text-primary w-4 h-4" />
            Consolidated Branch Directory
          </h4>

          <div className="space-y-4">
            {branchDirectory.map((branch, idx) => (
              <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-800">{branch.name}</span>
                  <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-bold">{branch.spares}</span>
                </div>
                <p className="text-[10px] text-slate-500">{branch.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Text and CTA */}
        <div className="order-1 md:order-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Multi-Branch System
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage Inventory Across <GradientUnderline>Multiple Garage Branches</GradientUnderline>
          </h2>

          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            <p>
              Growing your business shouldn't create stock tracking problems. GarageSaarthi connects stock counts across all locations inside one central dashboard interface.
            </p>
            <p>
              Check stock levels at other branches to see if a missing part is available nearby before ordering from your vendor. Use our <Link href="/solutions/multi-branch-garage-software" className="text-primary font-semibold hover:underline">Multi-Branch Garage Software</Link> database to track items across branches.
            </p>
          </div>

          <Link
            href="/solutions/multi-branch-garage-software"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-lg w-fit"
          >
            Explore Multi-Branch Garage Management
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}


