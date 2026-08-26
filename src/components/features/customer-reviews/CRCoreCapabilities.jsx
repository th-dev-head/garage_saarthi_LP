import React from "react";
import { FaStar, FaWhatsapp, FaQrcode, FaShieldAlt, FaChartLine, FaBell } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const crCoreCapabilities = [
  {
    icon: FaWhatsapp,
    title: "1-Click WhatsApp Review Links",
    desc: "Send personalized review links directly to customer WhatsApp right after invoice payment."
  },
  {
    icon: FaShieldAlt,
    title: "Smart Negative Feedback Shield",
    desc: "Route lower ratings privately to workshop managers so you can fix issues before public posting."
  },
  {
    icon: FaStar,
    title: "Google Business Profile Sync",
    desc: "Direct link integration straight to your Google Maps review dialog box for zero friction."
  },
  {
    icon: FaQrcode,
    title: "Counter QR Standee Support",
    desc: "Print custom QR code standees for your billing counter to collect walk-in customer feedback."
  },
  {
    icon: FaChartLine,
    title: "Review Analytics & Scores",
    desc: "Track average rating growth, monthly review volume, and customer satisfaction index."
  },
  {
    icon: FaBell,
    title: "Gentle Review Follow-Up Alerts",
    desc: "Optionally send a polite reminder 3 days later to customers who haven't submitted feedback yet."
  }
];

export default function CRCoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Toolkit for <GradientUnderline>Garage Review Growth</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your auto repair shop needs to collect 5-star Google ratings and build local trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crCoreCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-100/60 text-primary flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
