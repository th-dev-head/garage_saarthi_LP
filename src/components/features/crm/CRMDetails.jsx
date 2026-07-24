import React from "react";
import { FaPhoneAlt, FaFolderPlus, FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CRMDetails() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Kanban Board Mockup */}
        <div className="bg-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-sm">
          {/* Column 1: New Lead */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">New Leads</span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-[10px] font-bold text-slate-800 block">Rahul S.</span>
              <span className="text-[9px] text-slate-400 block">Creta General Service</span>
              <span className="text-[8px] bg-blue-50 text-blue-600 px-1 py-0.5 rounded mt-1.5 inline-block font-semibold">Walk-in Inquiry</span>
            </div>
          </div>

          {/* Column 2: Follow Up */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Follow-up</span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-[10px] font-bold text-slate-800 block">Amit P.</span>
              <span className="text-[9px] text-slate-400 block">Bumper Painting Est.</span>
              <span className="text-[8px] bg-amber-50 text-amber-600 px-1 py-0.5 rounded mt-1.5 inline-block font-semibold">Call back 25 Jul</span>
            </div>
          </div>

          {/* Column 3: Converted */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Converted</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
              <span className="text-[10px] font-bold text-slate-800 block">Rajesh M.</span>
              <span className="text-[9px] text-slate-400 block">AC Cooling issue</span>
              <span className="text-[8px] bg-emerald-50 text-emerald-600 px-1 py-0.5 rounded mt-1.5 inline-block font-semibold">Job Card Opened</span>
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Kanban Leads Tracker
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Stop Losing Inquiries with <GradientUnderline>CRM Lead Management</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            In manual workshop systems, new customer inquiries written on loose notes get lost or forgotten. Advisors fail to call back prospects, resulting in missed service revenues.
          </p>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides an interactive CRM Kanban board. Track every lead from initial phone call/walk-in inquiry, through follow-up calls and estimate stages, to active repair execution.
          </p>
        </div>
      </div>
    </section>
  );
}
