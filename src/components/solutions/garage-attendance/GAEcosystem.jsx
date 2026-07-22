import React from "react";
import Link from "next/link";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GAEcosystem() {
  const handleFeatureClick = (name, url) => {
    trackEvent("attendance_feature_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "ecosystem_section",
      cta_label: name,
      destination: url
    });
  };

  const modules = [
    { title: "Payroll", desc: "Manage salaries and commissions for mechanics.", url: "/features/payroll" },
    { title: "Leave Management", desc: "Log shift breaks and paid leave parameters.", url: "/features/leave-management" },
    { title: "User Management", desc: "Configure role permissions for mechanics and managers.", url: "/features/user-management" },
    { title: "Job Cards", desc: "Create and manage customer repair orders.", url: "/features/job-cards" },
    { title: "Inventory", desc: "Track spare parts and audit stock levels.", url: "/features/inventory" },
    { title: "Reports", desc: "Analyze daily collections and operational metrics.", url: "/features/reports" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Complete Platform
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Attendance Management Is Just <GradientUnderline>One Part of GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Instead of running a separate attendance app, manage shifts in the same platform that organizes billing, inventory, and job cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-text-dark">{m.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{m.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={m.url} onClick={() => handleFeatureClick(m.title, m.url)} className="text-primary text-xs font-bold hover:underline flex gap-2 items-center">
                  Explore {m.title} Feature <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link href="/features" onClick={() => handleFeatureClick("Explore All Features", "/features")}>
            <Button variant="secondary">
              Explore All GarageSaarthi Features <FaChevronRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
