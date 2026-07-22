import React from "react";
import Link from "next/link";
import { FaBell, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GMServiceReminder() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Service Reminder Integration
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Turn Service Follow-Ups into <GradientUnderline>Customer Retention Opportunities</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Upcoming vehicle maintenance requirements create natural opportunities for customer engagement. By tracking past repair logs, odometer readings, and service due dates, your workshop can send timely, helpful service alerts instead of random marketing messages.
        </p>

        <div className="pt-2">
          <Link
            href="/service-reminder-software"
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-sm font-bold transition-all shadow-md"
          >
            Explore Garage Service Reminder Software <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
