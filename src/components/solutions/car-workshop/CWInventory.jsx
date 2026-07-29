"use client";

import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function CWInventory() {
  const handleLinkClick = (name, url) => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "inventory_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Inventory & Spares
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Manage Spare Parts and <GradientUnderline>Workshop Inventory</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Spare parts leaks are a major profit drain. GarageSaarthi lets you register spare parts, monitor low-stock thresholds, and verify part logs directly against active job card work. Track inventory levels online and audit stock records easily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-800">Workshop Inventory</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Log spare parts stock, track purchases, and check low stock alerts. Explore{" "}
                <Link href="/features/inventory" onClick={() => handleLinkClick("Inventory Feature Link", "/features/inventory")} className="text-primary font-semibold hover:underline">
                  Workshop Inventory
                </Link>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-800">Counter Sales</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
                Bill loose spare parts, oil barrels, or coolant products directly to customer walk-ins. Explore{" "}
                <Link href="/features/counter-sales" onClick={() => handleLinkClick("Counter Sales Feature Link", "/features/counter-sales")} className="text-primary font-semibold hover:underline">
                  Counter Sales
                </Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3]">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">Spare Parts Stock</span>
              <p className="text-sm font-bold text-slate-800">Brake Pad (i20)</p>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>Current Stock Quantity</span>
              <span className="font-bold text-rose-500">2 Items left (Low Stock)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
