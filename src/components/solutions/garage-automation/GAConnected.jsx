import React from "react";
import { FaUserPlus, FaFileSignature, FaSearchPlus, FaCreditCard, FaBell, FaChartPie } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAConnected() {
  const steps = [
    { icon: <FaUserPlus />, title: "1. Log Check-In", desc: "Customer and vehicle profiles are created." },
    { icon: <FaFileSignature />, title: "2. Job Card", desc: "Labor tasks and repair details assigned." },
    { icon: <FaSearchPlus />, title: "3. Inventory", desc: "Spares linked and stock balances updated." },
    { icon: <FaCreditCard />, title: "4. GST Billing", desc: "Invoices created and payments logged." },
    { icon: <FaBell />, title: "5. Service Alert", desc: "Upcoming WhatsApp reminder scheduled." },
    { icon: <FaChartPie />, title: "6. Reports", desc: "Analytics compiled for business visibility." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workflow Diagram
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Connect Your Garage Operations in One <GradientUnderline>Automation Platform</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Avoid managing separate softwares for billing, spare stock, and CRM. GarageSaarthi integrates every action into a single connected operational workflow.
          </p>
        </div>

        {/* Horizontal Flow Chart */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs text-center flex flex-col items-center hover:shadow-sm transition-shadow duration-200">
              <div className="bg-white text-primary w-11 h-11 rounded-full flex items-center justify-center text-base mb-4 flex-shrink-0 border border-primary/40 shadow-xs">
                {st.icon}
              </div>
              <h4 className="font-bold text-slate-900 text-xs">{st.title}</h4>
              <p className="text-slate-500 text-[10px] mt-2 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
