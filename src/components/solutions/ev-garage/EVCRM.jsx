import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const crmPoints = [
  {
    title: "Log Sales Opportunities",
    desc: "Record incoming enquiries for new battery pack replacements, EV charger options, or custom retrofit kits directly inside the CRM dashboard.",
  },
  {
    title: "Schedule Lead Follow-Ups",
    desc: "Set due dates and assign team members to follow up with potential clients, avoiding missed sales opportunities.",
  },
  {
    title: "Track Conversion Metrics",
    desc: "Evaluate which lead sources or campaigns bring in the most service jobs to optimize your marketing spend.",
  },
];

export default function EVCRM() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content - Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Lead Management
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Manage Enquiries and Follow-Ups <GradientUnderline>with CRM Leads</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Do not miss potential business. Separate from your active customer database, the CRM Leads module helps your sales team record custom repair quotes, battery sales leads, and conversions.
            </p>

            <div className="space-y-4 pt-2">
              {crmPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/crm-leads"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore CRM Leads <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual block - Right Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              Active CRM Leads
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <div>
                  <span className="font-bold text-slate-700 block">Jatin Shah</span>
                  <span className="text-[10px] text-slate-400">Enquiry: Battery Upgrade</span>
                </div>
                <span className="text-amber-600 font-bold">In Progress</span>
              </div>
              <div className="flex justify-between text-xs border-b border-slate-200/40 pb-2">
                <div>
                  <span className="font-bold text-slate-700 block">Modern Logistics</span>
                  <span className="text-[10px] text-slate-400">Enquiry: Fleet Retainership</span>
                </div>
                <span className="text-emerald-600 font-bold">Converted</span>
              </div>
              <div className="flex justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-700 block">Karan Mehta</span>
                  <span className="text-[10px] text-slate-400">Enquiry: Electric scooter Service</span>
                </div>
                <span className="text-slate-500 font-bold">New Lead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
