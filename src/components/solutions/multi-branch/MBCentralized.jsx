import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function MBCentralized() {
  const handleFeatureClick = (name) => {
    trackEvent("branch_feature_click", {
      page_path: "/solutions/multi-branch-garage-software",
      cta_location: "centralized_section",
      cta_label: "Explore Feature",
      feature_name: name
    });
  };

  const capabilities = [
    { title: "Create and Manage Multiple Branches", desc: "Easily register new branch locations, configure addresses, and set unique branch invoices.", link: "/features/branches", label: "Garage Branch Management" },
    { title: "Organize Branch Users & Roles", desc: "Manage permissions so staff can only access data from their assigned workshop location.", link: "/features/user-management", label: "Garage User Management" },
    { title: "Access Operations Centrally", desc: "Review active job cards, billing registries, and stock levels centrally without leaving the desk.", link: null },
    { title: "Switch Between Branches", desc: "Quickly toggle your workspace between locations using a simple selector on the dashboard.", link: null }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Centralized Platform
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage All Your Garage Branches from <GradientUnderline>One Centralized Platform</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((c, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{c.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{c.desc}</p>
              </div>
              {c.link && (
                <Link href={c.link} onClick={() => handleFeatureClick(c.label)} className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start">
                  Explore {c.label} <FaChevronRight className="w-2.5 h-2.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}