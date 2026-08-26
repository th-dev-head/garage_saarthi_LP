import React from "react";
import { FaWhatsapp, FaFilePdf, FaCreditCard, FaCamera, FaBell, FaStar } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const waCoreCapabilities = [
  {
    icon: FaFilePdf,
    title: "1-Click PDF Bill & Estimate Sharing",
    desc: "Generate professional GST/Non-GST invoices and share downloadable PDF links directly to WhatsApp."
  },
  {
    icon: FaWhatsapp,
    title: "Job Card Intake Status Alerts",
    desc: "Notify customers automatically when their vehicle is checked in, in-progress, or ready for pickup."
  },
  {
    icon: FaCreditCard,
    title: "UPI & QR Code Payment Links",
    desc: "Send instant payment links with Razorpay/UPI QR codes so customers can pay before vehicle pickup."
  },
  {
    icon: FaCamera,
    title: "Before & After Photo Media Sharing",
    desc: "Send high-resolution repair photos, damaged part clips, and inspection media to build 100% trust."
  },
  {
    icon: FaBell,
    title: "Periodic Maintenance Reminders",
    desc: "Dispatch automated WhatsApp alerts for 3-month, 6-month, or KM oil change due dates."
  },
  {
    icon: FaStar,
    title: "Google Review Request Links",
    desc: "Send automated review collection links post-invoice to boost your garage's Google rating."
  }
];

export default function WACoreCapabilities() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block">
            Core Capabilities
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Toolkit for <GradientUnderline>Garage WhatsApp Communication</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your auto workshop needs to automate customer updates from check-in to final payment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waCoreCapabilities.map((cap, idx) => {
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
