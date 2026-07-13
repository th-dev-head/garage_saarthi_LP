import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaBell, FaHistory, FaArrowRight } from "react-icons/fa";

export default function CustomerRetentionPromo() {
  return (
    <section className="py-20 px-4 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gradient-to-tr from-slate-900 via-slate-800 to-orange-950 rounded-2xl p-8 text-white border border-slate-700/50 shadow-lg relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-orange-400">Boost Retention by 35%</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Organized customer records combined with vehicle history timelines let you target customers with precision. Send upcoming service follow-ups right on time and boost your workshop's repeat bookings.
            </p>
            <div className="border-t border-slate-700/60 pt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Communication setup</span>
              <span className="text-xs font-bold text-orange-400 bg-orange-950/40 px-3 py-1 rounded-full border border-orange-500/20">
                Reminders Live
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Stay Connected with Customers Through Service Alerts
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Build lasting relationships and keep your workshop busy. Use smart notification templates to share repair estimates, send invoicing receipts, and remind clients of next service due dates.
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">WhatsApp Shared Links</h3>
                  <p className="text-sm text-slate-600">Share professional invoices, job card status summaries, and estimates with one click.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary">
                  <FaBell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">Upcoming Service Reminders</h3>
                  <p className="text-sm text-slate-600">Track and notify customers when their vehicle's periodic maintenance is due.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary">
                  <FaHistory className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 mb-1">Central Service History</h3>
                  <p className="text-sm text-slate-600">View complete repair logs, dates, and previous mechanic notes for every vehicle registration.</p>
                </div>
              </div>
            </div>
            <Link
              href="/features/service-alerts"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover transition-colors"
            >
              Explore Service Alerts
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
