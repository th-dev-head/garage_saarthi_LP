import React from "react";
import Link from "next/link";
import { FaStore } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const branchFeatures = [
  {
    title: "Centralized Operations",
    descPrefix: "Monitor active job cards, billing outputs, and spare parts stocks across branches centrally. Refer to details on ",
    linkHref: "/solutions/multi-branch-garage-software/",
    linkText: "Multi-Branch Garage Software",
    descSuffix: "."
  },
  {
    title: "Role-Based Access Controls",
    descPrefix: "Assign custom roles for billing managers, advisors, helpers, and branch owners under ",
    linkHref: "/features/user-management/",
    linkText: "User Management",
    descSuffix: "."
  },
  {
    title: "Consolidated Reports",
    descPrefix: "Analyze daily business performance, net collections, and branch conversions in consolidated ",
    linkHref: "/features/reports/",
    linkText: "Reports",
    descSuffix: "."
  }
];

const branchCards = [
  {
    name: "Ahmedabad Main Branch",
    jobCards: "12 Active Job Cards",
    sales: "₹42,500.00",
    salesLabel: "Net Daily Sales"
  },
  {
    name: "Baroda Branch",
    jobCards: "8 Active Job Cards",
    sales: "₹28,200.00",
    salesLabel: "Net Daily Sales"
  }
];

export default function GAMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
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
              {branchFeatures.map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    {item.descPrefix}
                    <Link href={item.linkHref} className="text-primary font-bold hover:underline">
                      {item.linkText}
                    </Link>
                    {item.descSuffix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column Right */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              Consolidated Branch Analytics
            </span>
            <div className="space-y-3 font-sans text-xs">
              {branchCards.map((branch, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaStore className="text-primary w-4 h-4" />
                    <div>
                      <p className="font-bold text-slate-900">{branch.name}</p>
                      <p className="text-[9px] text-slate-400">{branch.jobCards}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{branch.sales}</p>
                    <p className="text-[9px] text-slate-500">{branch.salesLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

