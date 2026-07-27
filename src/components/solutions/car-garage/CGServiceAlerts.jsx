import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaBell, FaTag, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const alertFeatures = [
  {
    icon: FaBell,
    title: "Automated Service Alerts",
    desc: "Set custom service intervals based on mileage or time. GarageSaarthi automatically tracks when each customer vehicle is due and sends reminders without manual follow-up."
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Customer Follow-Up",
    desc: "Send personalized service reminder messages directly to customers via WhatsApp. Include your garage name, contact number, and address for easy reconnection."
  },
  {
    icon: FaTag,
    title: "Offers and Promotions",
    desc: "Send seasonal offers and promotional messages to your customer base. Keep your car garage visible and encourage repeat visits with targeted communication."
  }
];

export default function CGServiceAlerts() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Bring Customers Back with{" "}
            <GradientUnderline>Automated Service Alerts</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
            Car owners often forget their periodic service schedules. GarageSaarthi tracks upcoming service due dates based on the previous visit and sends timely reminders — so your garage stays top of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Feature Blocks */}
          <div className="space-y-8">
            {alertFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-wrap gap-4">
              <Link
                href="/features/service-alerts"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Explore Service Alerts
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/features/offers-promotions" className="text-xs font-bold text-primary hover:underline self-center flex items-center gap-1">
                Offers & Promotions <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* WhatsApp Preview */}
          <div className="bg-slate-50 border border-slate-300 p-6 rounded-2xl">
            <h3 className="text-sm font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <FaWhatsapp className="text-green-500 w-5 h-5" />
              Automated WhatsApp Alert Preview
            </h3>
            <div className="bg-white border border-slate-300 p-5 rounded-xl shadow-sm">
              <div className="text-xs text-slate-700 bg-[#EFE9E7]/50 p-4 rounded-xl border-l-4 border-primary font-sans">
                <p>Hello <strong>Ramesh Patel</strong>,</p>
                <p className="mt-3">
                  This is a reminder that your vehicle <strong>GJ01 BH 4521</strong> (Maruti Swift) is due for service on <strong>20 Aug 2025</strong> at <strong>Raj Car Garage</strong> 🔔.
                </p>
                <p className="mt-3">Garage Contact: <strong>9999955555</strong></p>
                <p className="mt-3">Address: <strong>House No. 42, Shanti Nagar, Near City Mall, Indore, Madhya Pradesh – 452001</strong></p>
                <p className="mt-3">Please contact us to schedule your service appointment.</p>
                <p className="mt-3 text-[10px] text-slate-500 font-medium">Powered by GarageSaarthi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

