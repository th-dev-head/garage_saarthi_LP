import React from "react";
import Link from "next/link";
import { FaUserPlus, FaClipboardCheck, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const features = [
  {
    icon: <FaUserPlus className="w-5 h-5" />,
    title: "Record New Leads",
    desc: "Capture enquiries from potential car repair customers before they become confirmed jobs. Record their name, vehicle details, service need, and preferred contact time.",
  },
  {
    icon: <FaClipboardCheck className="w-5 h-5" />,
    title: "Track Customer Opportunities",
    desc: "Keep a clear log of all open leads and pending follow-ups. Know which prospective customers are warm and which ones need another nudge to bring their car in.",
  },
  {
    icon: <FaPhoneAlt className="w-5 h-5" />,
    title: "Manage Lead Follow-Ups",
    desc: "Schedule and track follow-up actions for each lead. Ensure no potential customer enquiry gets missed in the day-to-day busyness of your car garage.",
  },
];

export default function CGCRM() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Garage CRM
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Car Service Leads with a{" "}
            <GradientUnderline>Built-In Garage CRM</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Not every enquiry becomes an immediate job. GarageSaarthi's built-in CRM helps car garage owners manage incoming leads and follow-up opportunities without losing track of potential customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Feature list */}
          <div className="space-y-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            <Link
              href="/features/crm"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap mt-4"
            >
              Explore Garage CRM
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Visual CRM Mockup */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Open Leads</p>
            {[
              { name: "Sunil Mehta", vehicle: "Honda City", need: "Full service + AC check", status: "Follow-up" },
              { name: "Priya Jain", vehicle: "Hyundai Creta", need: "Brake inspection", status: "Interested" },
              { name: "Ankit Shah", vehicle: "Maruti Baleno", need: "Dent repair + paint", status: "New Enquiry" },
            ].map((lead, idx) => (
              <div key={idx} className="flex items-start justify-between gap-2 py-3 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-xs font-bold text-slate-800">{lead.name}</p>
                  <p className="text-[10px] text-slate-500">{lead.vehicle} — {lead.need}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap ${
                  lead.status === "Follow-up" ? "text-orange-600 bg-orange-50" :
                  lead.status === "Interested" ? "text-green-700 bg-green-50" :
                  "text-blue-600 bg-blue-50"
                }`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

