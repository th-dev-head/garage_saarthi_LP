"use client";

import React from "react";
import Link from "next/link";
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaBoxes,
  FaUsers,
  FaCar,
  FaBell,
  FaChartBar,
  FaDoorOpen,
  FaRoad,
  FaArrowRight
} from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const featureLinks = [
  {
    name: "Job Card Management",
    description: "Digital job cards with mechanic clocking & status logs.",
    destination: "/features/job-card-management/",
    icon: FaClipboardList,
  },
  {
    name: "GST Billing & Invoicing",
    description: "Fast GST-compliant invoices with parts and labour breakdown.",
    destination: "/features/billing/",
    icon: FaFileInvoiceDollar,
  },
  {
    name: "Spare Parts Inventory",
    description: "Real-time stock tracking with low-stock alerts and purchase orders.",
    destination: "/features/inventory/",
    icon: FaBoxes,
  },
  {
    name: "Customer CRM",
    description: "Manage customer contact details, lead follow-ups, and history.",
    destination: "/features/crm/",
    icon: FaUsers,
  },
  {
    name: "Vehicle Management",
    description: "Odometer records, chassis numbers, and past service logs.",
    destination: "/features/vehicles/",
    icon: FaCar,
  },
  {
    name: "Service Reminders",
    description: "Automate WhatsApp and SMS maintenance reminder alerts.",
    destination: "/features/service-reminders/",
    icon: FaBell,
  },
  {
    name: "Reports & Analytics",
    description: "Revenue reports, technician performance, and profit dashboards.",
    destination: "/features/reports/",
    icon: FaChartBar,
  },
  {
    name: "Digital Gate Pass",
    description: "QR-code verified vehicle exit security against unpaid bills.",
    destination: "/features/gate-pass/",
    icon: FaDoorOpen,
  },
  {
    name: "Test Drive Tracking",
    description: "Odometer logs, fuel gauges, and 2D scratch diagram mapping.",
    destination: "/features/test-drive/",
    icon: FaRoad,
  },
];

export default function IndustryFeatureLinks() {
  const handleFeatureClick = (name, destination) => {
    trackEvent("industry_feature_link_click", {
      page_path: "/industries/",
      feature_name: name,
      destination: destination,
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EFE9E7] text-primary text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Deep-Dive Features
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark tracking-tight mb-4">
            Explore GarageSaarthi{" "}
            <GradientUnderline>Features</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover the specific capabilities that solve daily bottlenecks for technicians, service advisors, and workshop owners.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.destination}
                onClick={() => handleFeatureClick(item.name, item.destination)}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-orange-50/50 border border-slate-200/80 hover:border-primary/40 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-primary border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors truncate">
                      {item.name}
                    </h3>
                    <FaArrowRight className="w-3 h-3 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
