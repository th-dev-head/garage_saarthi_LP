"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function MBOperations() {
  const handleFeatureClick = (name) => {
    trackEvent("branch_feature_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "operations_section",
      cta_label: "Explore Module",
      feature_name: name
    });
  };

  const modules = [
    { title: "Job Cards", desc: "Manage job sheets by location.", link: "/features/job-card-management", label: "Job Cards" },
    { title: "Counter Sales", desc: "Track sales logs at counters.", link: "/features/counter-sales", label: "Counter Sales" },
    { title: "Inventory", desc: "Audit stocks across branches.", link: "/features/inventory", label: "Inventory" },
    { title: "Customers", desc: "Keep central customer profiles.", link: "/features/customers", label: "Customers" },
    { title: "Vehicles", desc: "Access registration logs.", link: "/features/vehicles", label: "Vehicles" },
    { title: "Payments & Finance", desc: "Manage payments centrally.", link: "/features/finance", label: "Payments" },
    { title: "Staff Operations", desc: "Calculate attendance and payroll.", link: "/features/attendance", label: "Staff" },
    { title: "Reports", desc: "View branch analytics.", link: "/features/reports", label: "Reports" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Roster & Workflows
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Keep Daily Garage Operations Organized <GradientUnderline>Branch by Branch</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm">
            Configure individual layouts, users, and transactions for each branch while maintaining central ownership:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{m.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{m.desc}</p>
              </div>
              <Link href={m.link} onClick={() => handleFeatureClick(m.label)} className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start">
                Explore {m.label} <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}