import React from "react";
import Link from "next/link";
import { FaUsers, FaCar, FaRegCalendarAlt } from "react-icons/fa";

export default function SRCustomerFollowUp() {
  const points = [
    {
      icon: <FaRegCalendarAlt className="text-primary w-5 h-5" />,
      title: "Know Which Customers Need Follow-Up",
      desc: "Use service alerts and customer files to locate repeat customer profiles whose vehicles are due for check-ins.",
      link: "/features/crm",
      label: "garage CRM"
    },
    {
      icon: <FaCar className="text-primary w-5 h-5" />,
      title: "Keep Customer and Vehicle Details Connected",
      desc: "Access registration logs, customer details, and past invoice data in one single click during follow-up call sessions.",
      link: "/features/vehicles",
      label: "vehicle records"
    },
    {
      icon: <FaUsers className="text-primary w-5 h-5" />,
      title: "Manage Follow-Ups Consistently",
      desc: "Create a structured, process-oriented workflow instead of depending on memory, paper sticky notes, or loose diaries.",
      link: "/features/customers",
      label: "customer management"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Turn Service Due Dates into Organized Customer Follow-Ups
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Most workshops lose customers because they fail to check back when the next service becomes due. GarageSaarthi helps you convert due dates into proactive touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100">{p.icon}</div>
                <h3 className="text-base font-bold text-text-dark">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
              <Link href={p.link} className="text-xs text-primary font-bold hover:underline self-start">
                Explore {p.label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}