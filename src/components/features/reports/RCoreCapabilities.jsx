import React from "react";
import { FaChartBar, FaBoxes, FaUserCog, FaUserCheck, FaPercent, FaFileExport } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const rCoreCapabilities = [
  {
    icon: FaChartBar,
    title: "Daily Sales & Revenue Analytics",
    desc: "Track daily billing revenue trends, counter sales cash flow, and payment mode breakdowns."
  },
  {
    icon: FaBoxes,
    title: "Spare Parts Velocity & Stock Reports",
    desc: "Monitor fast-moving spare parts, low stock reorder alerts, and dead stock capital tie-ups."
  },
  {
    icon: FaUserCog,
    title: "Mechanic Labor & Efficiency Metrics",
    desc: "Analyze labor revenue generated per technician, job card turnaround speed, and rework instances."
  },
  {
    icon: FaUserCheck,
    title: "Customer Retention & Service Insights",
    desc: "View repeat customer visit frequency, pending service reminders, and customer satisfaction scores."
  },
  {
    icon: FaPercent,
    title: "Real-Time Profit & Loss (P&L)",
    desc: "Calculate gross profit margins after deducting spare parts purchase costs and labor payouts."
  },
  {
    icon: FaFileExport,
    title: "1-Click PDF & Excel GST Exports",
    desc: "Export audit-ready GSTR-1, GSTR-3B, and tax summary reports formatted for CA tax filing."
  }
];

export default function RCoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Business Intelligence for <GradientUnderline>Auto Repair Shops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything you need to track financial growth, operational efficiency, and inventory turnover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rCoreCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-100/60 text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
