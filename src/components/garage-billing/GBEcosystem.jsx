import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import GradientUnderline from "../common/GradientUnderline";

export default function GBEcosystem() {
  const handleFeatureClick = (featureName) => {
    trackEvent("billing_ecosystem_link_click", {
      page_path: "/solutions/garage-billing-software",
      feature_name: featureName
    });
  };

  const modules = [
    { name: "Digital Job Cards", href: "/solutions/garage-job-card-software", desc: "Create repair orders, log diagnostics complaints, and assign mechanics." },
    { name: "Garage Inventory", href: "/garage-inventory-software", desc: "Save spare parts stock list, purchase logs, and low-stock alerts." },
    { name: "Customer CRM", href: "/solutions/garage-crm-software", desc: "Track customer leads, service follow-ups, and run coupons." },
    { name: "Staff Management", href: "/features/attendance", desc: "Track mechanic attendance, leave requests, and salary payroll logs." },
    { name: "Branch Operations", href: "/solutions/multi-branch-garage-software", desc: "Manage multi-center networks under a centralized login configuration." },
    { name: "Aggregated Reports", href: "/features/reports", desc: "View real-time revenues, payment lists, and branch metrics dashboards." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Context
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Billing Is Just One Module of{" "}
            <GradientUnderline>GarageSaarthi ERP</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides a complete garage enterprise resource planning platform. While our billing terminal manages customer collections, other modules handle your entire operations:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-150 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{m.name}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{m.desc}</p>
              </div>
              <Link
                href={m.href}
                onClick={() => handleFeatureClick(m.name)}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start"
              >
                Explore Feature
                <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap items-center">
          <Link href="/features">
            <Button variant="hero">
              View All GarageSaarthi Features
            </Button>
          </Link>
          <Link
            href="/"
            className="text-xs text-slate-600 hover:text-primary font-bold hover:underline font-semibold"
          >
            Explore Garage Management Software
          </Link>
        </div>
      </div>
    </section>
  );
}
