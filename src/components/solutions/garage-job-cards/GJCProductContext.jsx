"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

export default function GJCProductContext() {
  const handleFeatureClick = (featureName) => {
    trackEvent("job_card_feature_link_click", {
      page_path: "/solutions/garage-job-card-software",
      cta_location: "product_context",
      cta_label: "Explore Feature",
      feature_name: featureName
    });
  };

  const modules = [
    { name: "Garage Dashboard", href: "/features/workshop-management-dashboard", desc: "Monitor active job cards, revenue metrics, and branch analytics." },
    { name: "Counter Sales", href: "/features/counter-sales", desc: "Sell spare parts and inventory items directly without full job cards." },
    { name: "Garage Inventory", href: "/features/inventory", desc: "Manage spare parts stock, purchases, and low-stock indicators." },
    { name: "Customer CRM", href: "/solutions/garage-crm-software", desc: "Log enquiries, follow-up alerts, and discount promo offers." },
    { name: "Payments & Finance", href: "/features/billing", desc: "Create GST-compliant bills and log collection records." },
    { name: "Employee Payroll", href: "/features/payroll", desc: "Track mechanic attendance sheets, leaves, and commissions." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Context
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Job Cards Are Just One Part of{" "}
            <GradientUnderline>GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi is an all-in-one garage management software system. While digital job cards organize your repair operations, other connected modules help manage the rest of your business:
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
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline self-start mt-auto"
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
              Explore All GarageSaarthi Features
            </Button>
          </Link>
          <Link
            href="/"
            className="text-xs text-slate-600 hover:text-primary font-bold hover:underline"
          >
            Explore Garage Management Software
          </Link>
        </div>
      </div>
    </section>
  );
}

