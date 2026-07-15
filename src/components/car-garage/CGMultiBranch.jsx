import React from "react";
import Link from "next/link";
import { FaBuilding, FaUserShield, FaChartPie, FaArrowRight } from "react-icons/fa";

export default function CGMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Multi-Branch Garages
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              Manage Multiple Car Garage Branches with{" "}
              <span className="relative inline-block">
                Centralized Control
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              If you operate more than one car garage location, GarageSaarthi lets you manage all branches from a single account. Monitor each outlet's performance, control user access, and view consolidated reports without visiting each branch physically.
            </p>
            <Link
              href="/solutions/multi-branch-garage-software"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Explore Multi-Branch Garage Software
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: <FaBuilding className="w-5 h-5" />,
                title: "Branch Operations",
                desc: "Add and configure multiple car garage branches under one account. Each branch maintains its own job cards, inventory, and billing records.",
              },
              {
                icon: <FaUserShield className="w-5 h-5" />,
                title: "Role-Based Access",
                desc: "Assign specific system access to managers, advisors, and mechanics at each branch. Protect sensitive financial data with granular permission controls.",
              },
              {
                icon: <FaChartPie className="w-5 h-5" />,
                title: "Consolidated Reports",
                desc: "View combined performance across all your car garage branches. Compare revenue, job volumes, and collections to understand which locations are performing well.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl flex gap-4 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
