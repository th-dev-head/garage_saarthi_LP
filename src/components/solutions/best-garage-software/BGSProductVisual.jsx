"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaArrowRight, FaTachometerAlt, FaClipboardCheck, FaBoxes, FaMobileAlt } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const screenshots = [
  {
    icon: <FaTachometerAlt />,
    title: "Workshop Dashboard",
    desc: "Real-time metrics on active job cards, today's collections, low stock alerts, and mechanic workloads.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Digital Job Cards",
    desc: "Create work orders, track vehicle complaints, allocate mechanics, and estimate repair totals.",
  },
  {
    icon: <FaBoxes />,
    title: "Parts Inventory",
    desc: "Monitor spare parts stock levels, dynamic checkouts, low stock alerts, and counter retail sales.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Android & iOS Mobile App",
    desc: "Manage bay floor operations, upload vehicle photo logs, and generate job cards right beside the car.",
  },
];

export default function BGSProductVisual() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Visuals
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            See GarageSaarthi Garage Management Software{" "}
            <GradientUnderline>in Action</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Explore how the clean interface simplifies daily garage operations across web and mobile.
          </p>
        </div>

        {/* Visual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {screenshots.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
