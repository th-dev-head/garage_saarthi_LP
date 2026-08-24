import React from "react";
import Link from "next/link";
import { FaUserPlus, FaCalendarCheck, FaHandsHelping } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNRetention() {
  const processes = [
    {
      icon: <FaUserPlus className="text-blue-500 w-5 h-5" />,
      title: "Know Due Dates",
      desc: "Automatically track scheduled maintenance intervals based on previous digital job card invoices."
    },
    {
      icon: <FaCalendarCheck className="text-orange-500 w-5 h-5" />,
      title: "Relevant Communications",
      desc: "Reach out to vehicle owners at the appropriate time instead of cold calling randomly."
    },
    {
      icon: <FaHandsHelping className="text-green-500 w-5 h-5" />,
      title: "Reduce Manual Administration",
      desc: "Free your backend team from cross-checking paper registers, preventing missed reminder tasks."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Turn Service Reminders into Better <GradientUnderline>Customer Follow-Ups</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Organizing your outreach process using a dedicated <strong className="text-primary capitalize">customer retention software for garage</strong> operators supports steady vehicle intake and repeat service visits.
          </p>
        </div>

        {/* Column Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((pr, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4 hover:shadow-sm transition-shadow duration-200">
              <div className="bg-slate-50 w-10 h-10 rounded-xl border border-slate-200/80 flex items-center justify-center shadow-xs">
                {pr.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{pr.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{pr.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-600">
          Want deeper pipeline tracking? Explore the dedicated{" "}
          <Link href="/features/crm/" className="text-primary font-bold hover:underline">
            Garage CRM
          </Link>{" "}
          module parameters.
        </div>
      </div>
    </section>
  );
}
