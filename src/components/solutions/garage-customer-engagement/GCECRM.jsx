import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const crmPipelineLeads = [
  {
    badgeText: "New Lead",
    badgeClass: "bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-[9px] font-bold",
    name: "Vikram Sharma",
    query: "Query: Denting & Painting quote",
    showCallBtn: true
  },
  {
    badgeText: "Follow Up Scheduled",
    badgeClass: "bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[9px] font-bold",
    name: "Karan Patel",
    query: "Follow up date: 24 Jan 2026",
    showCallBtn: true
  },
  {
    badgeText: "Converted",
    badgeClass: "bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-bold",
    name: "Siddharth Mehta",
    query: "Job Card #ARS-2099 Created",
    amount: "₹8,500"
  }
];

const crmFeatures = [
  {
    title: "Organize Garage Leads",
    desc: "Capture incoming vehicle repair inquiries, walk-ins, and online leads in one central dashboard."
  },
  {
    title: "Track Customer Follow-Ups",
    desc: "Schedule reminders for calls, custom estimates, and feedback. Keep service agents organized."
  },
  {
    title: "Build Better Customer Relationships",
    desc: "Utilize consolidated customer details to personalize interactions. Link communications directly with workshop history."
  }
];

export default function GCECRM() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center" id="features-section">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column Left (CRM Pipeline Representation) */}
          <div className="order-last lg:order-first bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              CRM Follow-Up Pipeline
            </span>
            <div className="space-y-3 font-sans text-xs">
              {crmPipelineLeads.map((lead, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className={lead.badgeClass}>{lead.badgeText}</span>
                    <h4 className="font-bold text-slate-900 mt-1">{lead.name}</h4>
                    <p className="text-[10px] text-slate-500">{lead.query}</p>
                  </div>
                  {lead.showCallBtn ? (
                    <button className="bg-primary text-white p-2 rounded-full shadow-sm hover:scale-105 transition-transform">
                      <FaPhoneAlt className="w-2.5 h-2.5" />
                    </button>
                  ) : (
                    <span className="text-[10px] text-green-600 font-bold self-center">{lead.amount}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Text Column Right */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Workshop CRM
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Manage Garage Leads and Customer Follow-Ups with <GradientUnderline>CRM</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Track inquiries, customer interactions, and follow-ups within a unified system designed for car and bike workshops. Replacing diaries with a digital <strong className="text-primary capitalize">customer engagement platform for garage</strong> operations ensures no business opportunity goes cold.
            </p>

            <div className="space-y-4 pt-2">
              {crmFeatures.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/crm/"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                Explore <span className="font-bold">Garage CRM</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

