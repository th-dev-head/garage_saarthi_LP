import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { FaArrowRight } from "react-icons/fa";

export default function HistServiceAlerts() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
          Customer Retention
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Use Vehicle Service Records for Better <GradientUnderline>Service Follow-Ups</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Keeping digital service records makes it easy to schedule next check-ins. GarageSaarthi lets you set automated service alerts and coordinate reminders via WhatsApp template tools. Reduce missed bookings and keep bays busy.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/features/service-reminders"
            className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            Explore Service Alerts <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
