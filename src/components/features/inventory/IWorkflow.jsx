import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaPlusCircle, FaDolly, FaTools, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function IWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaPlusCircle className="w-5 h-5 text-primary" />,
      title: "Add Spare Parts Master",
      desc: "Add parts with SKU, category, OEM number, purchase price, MRP, and HSN code."
    },
    {
      num: "02",
      icon: <FaDolly className="w-5 h-5 text-orange-600" />,
      title: "Log Vendor Purchases",
      desc: "Record incoming supplier shipments, log purchase bills, and add stock to inventory."
    },
    {
      num: "03",
      icon: <FaTools className="w-5 h-5 text-emerald-600" />,
      title: "Issue Parts to Job Card",
      desc: "Mechanics select parts needed for vehicle repair. Quantities deduct in real time."
    },
    {
      num: "04",
      icon: <FaExclamationTriangle className="w-5 h-5 text-amber-600" />,
      title: "Low-Stock Notifications",
      desc: "Receive automated alerts when stock drops below minimum threshold limits."
    },
    {
      num: "05",
      icon: <FaCheckCircle className="w-5 h-5 text-purple-600" />,
      title: "Stock Audit & Valuation",
      desc: "View profit margins per part and generate monthly inventory valuation reports."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Inventory Flow
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How GarageSaarthi Controls <GradientUnderline>Spare Parts Stock</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Simple, automated, and leak-proof inventory management from purchase order to job card billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
