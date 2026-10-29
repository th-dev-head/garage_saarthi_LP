"use client";

import React from "react";
import Link from "next/link";
import {
  FaClipboardList,
  FaCarSide,
  FaFileInvoiceDollar,
  FaBoxes,
  FaBell,
  FaChartLine,
  FaArrowRight
} from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const capabilities = [
  {
    title: "Job & Service Tracking",
    description: "Organize repair jobs, assign mechanics, and follow live job card status from vehicle check-in to delivery.",
    destination: "/features/job-card-management/",
    icon: FaClipboardList,
    linkText: "Explore Job Cards",
  },
  {
    title: "Customer & Vehicle Records",
    description: "Keep complete vehicle service histories, owner contact details, and odometer logs instantly accessible.",
    destination: "/features/customers/",
    icon: FaCarSide,
    linkText: "Explore Customer Records",
  },
  {
    title: "Billing & Invoicing",
    description: "Support day-to-day GST billing, counter sales, and estimates with automated parts and labour calculation.",
    destination: "/features/billing/",
    icon: FaFileInvoiceDollar,
    linkText: "Explore Billing Tools",
  },
  {
    title: "Inventory Management",
    description: "Track spare parts, stock reorder levels, purchase orders, and parts consumption per repair job.",
    destination: "/features/inventory/",
    icon: FaBoxes,
    linkText: "Explore Inventory",
  },
  {
    title: "Service Reminders & Follow-ups",
    description: "Automate service due reminders and customer notifications to improve customer retention and repeat visits.",
    destination: "/features/service-reminders/",
    icon: FaBell,
    linkText: "Explore Service Reminders",
  },
  {
    title: "Reports & Workshop Visibility",
    description: "Review workshop revenue, mechanic productivity, technician clocking, and profit margins with live dashboards.",
    destination: "/features/reports/",
    icon: FaChartLine,
    linkText: "Explore Analytics",
  },
];

export default function IndustryValueProp() {
  const handleFeatureClick = (title, destination) => {
    trackEvent("industry_value_prop_click", {
      page_path: "/industries/",
      capability_title: title,
      destination: destination,
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFE9E7] text-primary text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            All-In-One Platform
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark tracking-tight mb-4">
            Manage Your Workshop Operations{" "}
            <GradientUnderline>in One Place</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi brings every core function of an automotive workshop together into a unified, cloud-ready digital platform.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center text-xl mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60">
                  <Link
                    href={item.destination}
                    onClick={() => handleFeatureClick(item.title, item.destination)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-orange-700 transition-colors group-hover:translate-x-1 duration-200"
                    aria-label={item.linkText}
                  >
                    <span>{item.linkText}</span>
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
