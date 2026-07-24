import React from "react";
import { FaHistory, FaTools, FaCheckCircle, FaSearch, FaClipboardList, FaFileInvoice } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function HistCoreCapabilities() {
  const capabilities = [
    {
      icon: <FaHistory className="w-6 h-6 text-primary" />,
      title: "Interactive History Dashboard",
      description: "Search customer name or license registration plate to pull up a full historical ledger of all past workshop visits.",
      badge: "Dashboard"
    },
    {
      icon: <FaTools className="w-6 h-6 text-orange-600" />,
      title: "Used Spare Parts History",
      description: "Instantly check previously replaced auto components, spare part SKU codes, brand names, and purchase costs.",
      badge: "Parts Tracking"
    },
    {
      icon: <FaClipboardList className="w-6 h-6 text-emerald-600" />,
      title: "Mechanic & Labor logs",
      description: "View past job cards, assigned technicians, repair checklists, check sheets, and labor rates in INR.",
      badge: "Labor Records"
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-amber-600" />,
      title: "Diagnostic Issue Notes",
      description: "Access previous customer diagnostic complaints, engine code checks, check-in checklists, and repair remarks.",
      badge: "Diagnostics"
    },
    {
      icon: <FaFileInvoice className="w-6 h-6 text-teal-600" />,
      title: "Linked Billing Ledger",
      description: "View invoice summaries, tax splits (GST, SGST, CGST), payment methods (UPI, Cash, Card), and pending dues.",
      badge: "Billing Dues"
    },
    {
      icon: <FaSearch className="w-6 h-6 text-purple-600" />,
      title: "Digital Odometer Records",
      description: "Log vehicle Odometer KM readings on check-in. Monitor vehicle mileage covered between subsequent services.",
      badge: "KM Logs"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Features
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Key Capabilities of Vehicle <GradientUnderline>Service History Software</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Manage auto repair history files, parts replacement logs, odometer values, and invoicing sheets from a secure workspace.
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
