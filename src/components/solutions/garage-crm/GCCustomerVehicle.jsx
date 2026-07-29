"use client";

import React from "react";
import Link from "next/link";
import { FaHistory } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCCustomerVehicle() {
  const handleLinkClick = (label, dest) => {
    trackEvent("vehicle_feature_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "customer_vehicle_history",
      cta_label: label,
      destination: dest
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Card visual */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <FaHistory className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Vehicle service history</h3>
          </div>
          <div className="space-y-3.5 text-xs text-slate-600">
            <div className="bg-slate-50 p-3 rounded-xl">
              <span className="font-bold text-text-dark block">Creta (GJ-05-CD-5678)</span>
              <p className="text-[10px] text-slate-400 mt-1">General Service | Date: May 24, 2026</p>
              <p className="text-[11px] text-slate-500 mt-2">Parts replaced: Mobil 5W-30 Oil Filter, Air Filter</p>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Service Logs
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Understand Your Customers and <GradientUnderline>Their Vehicle History</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            Workshop CRM databases work best when they track vehicle attributes. When a car or bike owner registers, the profile ties directly to the vehicle's permanent files.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Access previous repair orders, diagnostic complaints, spare parts used, billing values, and customer preferences. Keeping clear service records helps your team work efficiently on returning jobs.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/features/customers"
              onClick={() => handleLinkClick("Customer Records", "/features/customers")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Customer Records
            </Link>
            <Link
              href="/features/vehicles"
              onClick={() => handleLinkClick("Vehicle Records", "/features/vehicles")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Vehicle Records
            </Link>
            <Link
              href="/vehicle-service-history-software"
              onClick={() => handleLinkClick("Vehicle Service History Software", "/vehicle-service-history-software")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Vehicle Service History Software
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

