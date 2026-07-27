import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaMobileAlt, FaTools, FaFileInvoiceDollar, FaCheckDouble, FaChartPie } from "react-icons/fa";

export default function WMDWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <FaMobileAlt className="w-5 h-5 text-primary" />,
      title: "Vehicle Intake & Digital Job Card",
      desc: "Service advisor logs vehicle details, complaints, and customer info on mobile app or web portal."
    },
    {
      num: "02",
      icon: <FaTools className="w-5 h-5 text-orange-600" />,
      title: "Mechanic Work Assignment",
      desc: "Job card is assigned to a technician. Dashboard updates repair status to 'In Progress' instantly."
    },
    {
      num: "03",
      icon: <FaFileInvoiceDollar className="w-5 h-5 text-emerald-600" />,
      title: "Parts Requisition & Counter Sales",
      desc: "Spare parts used are deducted from inventory. Stock levels and margins update automatically."
    },
    {
      num: "04",
      icon: <FaCheckDouble className="w-5 h-5 text-amber-600" />,
      title: "Final Billing & Payment Collection",
      desc: "GST invoice is generated and shared via WhatsApp. Cash or UPI payment is logged into revenue stats."
    },
    {
      num: "05",
      icon: <FaChartPie className="w-5 h-5 text-purple-600" />,
      title: "Instant Dashboard KPI Update",
      desc: "Overall workshop revenue, active repair count, and mechanic efficiency KPIs update in real time."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-cente">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            5-Step Operational Flow
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            How Garage Operations <GradientUnderline>Auto-Update Your Dashboard</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Zero manual data entry needed. Every action taken on the workshop floor reflects live on your garage operations dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between relative hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300">{step.num}</span>
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
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
