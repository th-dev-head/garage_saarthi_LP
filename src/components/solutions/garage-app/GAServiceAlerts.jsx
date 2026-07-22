import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAServiceAlerts() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Customer Retention
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Check Service Alerts and{" "}
              <GradientUnderline>Follow Up with Garage Customers</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Track upcoming service dates based on client visit frequency and broadcast customizable alert layouts directly to customer WhatsApp profiles.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Link
                href="/features/service-alerts"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
              >
                Check Service Alerts Features
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/offers-promotions"
                className="text-xs font-bold text-primary hover:underline"
              >
                Promotional Broadcast Tools
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm w-full max-w-md mx-auto md:max-w-none md:order-last order-first">
            <h4 className="text-xs font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FaWhatsapp className="text-green-500 w-5 h-5" />
              WhatsApp Reminders
            </h4>
            <div className="text-xs text-slate-700 bg-[#EFE9E7]/50 p-4 rounded-xl border-l-4 border-primary font-sans">
              <p>Hello <strong>Rajesh Patel</strong>,</p>
              <p className="mt-3">This is a reminder that your vehicle <strong>GJ09BK0001</strong> is due for service on <strong>25 Jan 2026</strong> at <strong>Ever Garage</strong> 🔔.</p>
              <p className="mt-3">Garage Contact: <strong>9999955555</strong></p>
              <p className="mt-3">Address: <strong>House No. 42, Shanti Nagar, Near City Mall, Indore, Madhya Pradesh – 452001</strong></p>
              <p className="mt-3">Please contact the garage to schedule your service.</p>
              <p className="mt-3 text-[10px] text-slate-500 font-medium">Powered by GarageSaarthi</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

