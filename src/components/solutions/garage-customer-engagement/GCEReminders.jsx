import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaCalendarCheck } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEReminders() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Column Left (WhatsApp Alert Representation) */}
          <div className="order-last lg:order-first bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              WhatsApp Alert Layout
            </span>
            <div className="bg-[#E5DDD5] rounded-2xl p-4 md:p-6 space-y-4 max-w-sm mx-auto font-sans shadow-inner">
              
              {/* WhatsApp Message Bubble */}
              <div className="bg-[#DCF8C6] text-slate-800 rounded-xl p-4 shadow-sm text-xs relative max-w-[85%] ml-auto">
                <p className="font-bold text-slate-900 mb-1">🚗 GarageSaarthi AutoCare</p>
                <p className="leading-relaxed">
                  Dear Customer, your <strong className="text-primary capitalize">Hyundai i20 (GJ05AB1234)</strong> is due for its periodic maintenance check on 25 Jan 2026.
                </p>
                <p className="mt-2 font-medium text-slate-700">
                  Book your slot to ensure peak engine performance and part safety!
                </p>
                <span className="text-[9px] text-slate-500 block text-right mt-1">10:30 AM ✓✓</span>
              </div>

              {/* Status Queue Card */}
              <div className="bg-white rounded-xl p-3 border border-slate-200/80 text-[10px] text-slate-600 space-y-1">
                <div className="flex justify-between font-bold text-slate-950 border-b border-slate-200 pb-1 mb-1">
                  <span>Due Status</span>
                  <span className="text-red-500 font-medium">Pending WhatsApp Send</span>
                </div>
                <p><strong className="text-primary capitalize">Remind Method:</strong> Single-Click WhatsApp Integration</p>
                <p><strong className="text-primary capitalize">Tracking:</strong> Logged under Service Alert queue</p>
              </div>

            </div>
          </div>

          {/* Text Column Right */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Smart Reminders
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Bring Customers Back with Timely <GradientUnderline>Service Reminders</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Auto workshops can utilize structured alerts to keep customers aware of upcoming service dates. 
              Deploying <strong className="text-primary capitalize">garage customer reminder software</strong> logic removes the hassle of maintaining manual checklist registers or Excel sheets.
            </p>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Using vehicle-linked records, our <strong className="text-primary capitalize">workshop customer notification software</strong> tracks when services are approaching due, allowing owners to trigger reminders easily. Keep a steady queue of bookings, boost repeat visits, and streamline follow-ups without guessing dates.
            </p>

            <div className="pt-4">
              <Link
                href="/features/service-alerts"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                Explore Service Alerts
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
