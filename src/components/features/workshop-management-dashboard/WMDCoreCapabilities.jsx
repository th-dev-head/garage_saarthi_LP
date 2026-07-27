import React from "react";
import { FaChartLine, FaWrench, FaUsers, FaBoxes, FaBuilding, FaMobileAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function WMDCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaChartLine className="w-6 h-6 text-primary" />,
      title: "Real-Time Revenue & Financial Dashboard",
      description: "Monitor daily collections, GST billing summaries, online UPI payments, and customer credit balances on an interactive garage business dashboard.",
      badge: "Financial Control"
    },
    {
      icon: <FaWrench className="w-6 h-6 text-orange-600" />,
      title: "Live Job Card & Repair Status Monitoring",
      description: "Track vehicle repair stages in real time—from initial inspection and estimate approval to repair execution and final billing status.",
      badge: "Operational Visibility"
    },
    {
      icon: <FaUsers className="w-6 h-6 text-emerald-600" />,
      title: "Mechanic & Staff Efficiency KPIs",
      description: "Track active mechanics, assigned job cards, labor hours logged, and individual technician productivity on a dedicated mechanic dashboard.",
      badge: "Staff Productivity"
    },
    {
      icon: <FaBoxes className="w-6 h-6 text-amber-600" />,
      title: "Automated Spare Parts Stock Alerts",
      description: "Keep track of high-volume lubricants, spare parts, and fast-moving items. Receive low-stock warning alerts before inventory runs out.",
      badge: "Inventory Intelligence"
    },
    {
      icon: <FaBuilding className="w-6 h-6 text-purple-600" />,
      title: "Multi-Branch Workshop Comparison",
      description: "For multi-outlet garage owners: compare total job cards, gross margins, and customer retention across all branch locations from one screen.",
      badge: "Multi-Location Support"
    },
    {
      icon: <FaMobileAlt className="w-6 h-6 text-teal-600" />,
      title: "Web & Mobile App Synchronization",
      description: "Check your automotive workshop dashboard anywhere on Web, Tablet, or Android App. Stay connected with your business 24/7.",
      badge: "Cloud Mobility"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-cente">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Dashboard Modules
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Key Capabilities of GarageSaarthi <GradientUnderline>Dashboard Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Designed specifically for Indian auto repair shops, car service centers, bike workshops, and EV service hubs to streamline daily management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
