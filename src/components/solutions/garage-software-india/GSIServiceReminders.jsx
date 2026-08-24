import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaCalendarCheck, FaRedo, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const serviceReminderColumns = [
  {
    icon: FaCalendarCheck,
    iconBg: "bg-[#EFE9E7] text-primary",
    title: "Automatic Due Date Tracking",
    desc: "When a job card is closed, GarageSaarthi automatically schedules periodic service due dates based on vehicle service intervals."
  },
  {
    icon: FaWhatsapp,
    iconBg: "bg-emerald-100 text-emerald-600",
    title: "Direct WhatsApp Alerts",
    desc: "Trigger automated, personalized service due notifications directly to your customers' WhatsApp numbers with custom greeting templates."
  },
  {
    icon: FaRedo,
    iconBg: "bg-[#EFE9E7] text-primary",
    title: "Higher Repeat Bay Occupancy",
    desc: "Keep service bays full with recurring maintenance bookings without wasting hours on manual reminder phone calls."
  }
];

export default function GSIServiceReminders() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Automate Customer Service Alerts with <GradientUnderline>WhatsApp Reminders</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Bringing customers back for periodic servicing is the most profitable revenue driver for any Indian workshop.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {serviceReminderColumns.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base ${col.iconBg}`}>
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{col.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {col.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Semantic Bridge Callout to Dedicated Page */}
        <div className="bg-[#EFE9E7]/40 border border-primary/20 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto text-center space-y-3">
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Want to learn how service alerts drive repeat workshop bookings? Explore our dedicated{" "}
            <Link href="/solutions/service-reminder-software/" className="font-bold text-primary hover:underline">
              Vehicle Service Reminder Software
            </Link>{" "}
            guide.
          </p>
          <div>
            <Link
              href="/solutions/service-reminder-software/"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-xs md:text-sm transition-colors"
            >
              Explore Service Reminder Software <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

