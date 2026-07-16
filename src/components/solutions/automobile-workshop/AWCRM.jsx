import React from "react";
import Link from "next/link";
import { FaUserTag, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function AWCRM() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Section Header — full width */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop CRM
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage Workshop Leads and <GradientUnderline>Customer Opportunities with CRM</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Never let a potential client request slip away. GarageSaarthi CRM allows you to log inquiries, track potential customer follow-up actions, and monitor walk-ins or phone calls centrally, converting leads into active garage jobs.
          </p>
        </div>

        {/* Feature list + Visual Card — side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Feature List & CTA */}
          <div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <FaUserTag className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Assign lead stages (New, Contacted, Won, Lost)</span>
              </div>
              <div className="flex items-center gap-3 bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm">
                <FaPhoneAlt className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Log customer call summaries and special instructions</span>
              </div>
            </div>

            <Link
              href="/features/crm"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Explore Garage CRM
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* CRM Kanban Simulation */}
          <div className="bg-white border border-slate-300 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-900 mb-4">
              Leads & Opportunity Tracker
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-2">New Inquiry</span>
                <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm text-xs">
                  <p className="font-bold text-slate-800">Amit Sharma</p>
                  <p className="text-slate-500 mt-1">Car denting painting quote</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-[10px] font-bold text-orange-600 uppercase block mb-2">Contacted</span>
                <div className="bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm text-xs">
                  <p className="font-bold text-slate-800">Nikhil Patel</p>
                  <p className="text-slate-500 mt-1">AC service estimation shared</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

