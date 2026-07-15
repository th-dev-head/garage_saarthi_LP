import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../common/GradientUnderline";

export default function ARSServiceReminders() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Follow Up with Customers and Send{" "}
            <GradientUnderline>Automatic Service Reminders</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            A completed repair is not the end of the customer relationship. GarageSaarthi helps you maintain customer lists, log marketing opportunities, and manage upcoming service communications automatically.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Details & CTAs */}
          <div>
            <div className="space-y-4 mb-8 text-slate-600 text-xs md:text-sm leading-relaxed">
              <p><strong>Manage Repair Leads with CRM:</strong> Track walk-ins, phone-inquiries, and service requests. Maintain status tags (New, Contacted, Won, Lost) to boost conversion rates.</p>
              <p><strong>Create Custom Offers & Promotions:</strong> Draft customized festive plans, special engine-service pricing discounts, or tire change bundles, and broadcast to select client logs.</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/features/service-alerts"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Explore Service Alerts
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/features/crm"
                className="text-xs font-bold text-primary hover:underline"
              >
                Explore Garage CRM
              </Link>
            </div>
          </div>

          {/* Visual Alert Mockup */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xs font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FaWhatsapp className="text-green-500 w-5 h-5" />
              Automated Service Alert
            </h4>
            <div className="text-xs text-slate-700 bg-[#EFE9E7]/50 p-4 rounded-xl border-l-4 border-primary font-sans">
              <p>Hello <strong>Shree Hari</strong>,</p>
              <p className="mt-3">This is a reminder that your vehicle <strong>GJ05VB0401</strong> is due for service on <strong>25 Jan 2026</strong> at <strong>Ever Garage</strong> 🔔.</p>
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