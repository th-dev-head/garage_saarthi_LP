import React from "react";
import Link from "next/link";
import {
  FaUserAlt, FaFileAlt, FaTools, FaWrench,
  FaFileInvoiceDollar, FaCreditCard, FaBell, FaChevronRight, FaArrowRight
} from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";

const steps = [
  { icon: <FaUserAlt />, label: "Vehicle Arrives" },
  { icon: <FaFileAlt />, label: "Customer & Vehicle Record" },
  { icon: <FaTools />, label: "Job Card Creation" },
  { icon: <FaWrench />, label: "Repair Work Progress" },
  { icon: <FaFileInvoiceDollar />, label: "Spare Parts Allocation" },
  { icon: <FaCreditCard />, label: "Estimate or Invoice" },
  { icon: <FaBell />, label: "Record Payment" },
  { icon: <FaUserAlt />, label: "Vehicle Service History" },
  { icon: <FaBell />, label: "WhatsApp Service Alerts" },
];

export default function ARSWorkflow() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Repair Shop Flow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Manage the Complete Auto Repair Workflow from{" "}
            <span className="relative inline-block">
              Vehicle Entry to Delivery
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Run a smooth, professional auto repair business. Follow every job card step-by-step from vehicle reception, parts ordering, repairs tracking, billing, to future service marketing.
          </p>
        </div>

        {/* Visual Map Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12 bg-slate-50 border border-slate-200/80 p-6 rounded-2xl">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 px-4 py-3 bg-white border border-slate-200/80 rounded-xl shadow-xs text-center">
              <div className="text-primary text-lg">{item.icon}</div>
              <span className="text-[10px] font-bold text-slate-500 block">STEP 0{idx + 1}</span>
              <span className="text-[11px] font-bold text-slate-800 leading-snug">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            href={FRONTEND_URL + "/register"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            Start Managing Repair Jobs Digitally
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}