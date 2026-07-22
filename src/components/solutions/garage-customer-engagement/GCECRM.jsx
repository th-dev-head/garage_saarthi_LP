import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCECRM() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center" id="features-section">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column Left (CRM Pipeline Representation) */}
          <div className="order-last lg:order-first bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              CRM Follow-Up Pipeline
            </span>
            <div className="space-y-3 font-sans text-xs">
              
              {/* Lead Card 1 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-[9px] font-bold">New Lead</span>
                  <h4 className="font-bold text-slate-900 mt-1">Vikram Sharma</h4>
                  <p className="text-[10px] text-slate-500">Query: Denting & Painting quote</p>
                </div>
                <button className="bg-primary text-white p-2 rounded-full shadow-sm hover:scale-105 transition-transform">
                  <FaPhoneAlt className="w-2.5 h-2.5" />
                </button>
              </div>

              {/* Lead Card 2 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[9px] font-bold">Follow Up Scheduled</span>
                  <h4 className="font-bold text-slate-900 mt-1">Karan Patel</h4>
                  <p className="text-[10px] text-slate-500">Follow up date: 24 Jan 2026</p>
                </div>
                <button className="bg-primary text-white p-2 rounded-full shadow-sm hover:scale-105 transition-transform">
                  <FaPhoneAlt className="w-2.5 h-2.5" />
                </button>
              </div>

              {/* Lead Card 3 */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 flex justify-between items-start">
                <div className="space-y-1">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-bold">Converted</span>
                  <h4 className="font-bold text-slate-900 mt-1">Siddharth Mehta</h4>
                  <p className="text-[10px] text-slate-500">Job Card #ARS-2099 Created</p>
                </div>
                <span className="text-[10px] text-green-600 font-bold self-center">₹8,500</span>
              </div>

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
              <div>
                <h3 className="text-sm font-bold text-slate-900">Organize Garage Leads</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Capture incoming vehicle repair inquiries, walk-ins, and online leads in one central dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">Track Customer Follow-Ups</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Schedule reminders for calls, custom estimates, and feedback. Keep service agents organized.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">Build Better Customer Relationships</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  Utilize consolidated customer details to personalize interactions. Link communications directly with workshop history.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/features/crm"
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
