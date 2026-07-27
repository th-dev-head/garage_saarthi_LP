import React from "react";
import { FaWhatsapp, FaCheckDouble, FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const srWhatsAppFeatures = [
  {
    icon: FaWhatsapp,
    title: "Official API & 1-Click Templates",
    desc: "Send standardized, professional WhatsApp notifications with custom garage branding and customer details."
  },
  {
    icon: FaPaperclip,
    title: "PDF Estimate & Coupon Attachments",
    desc: "Attach digital inspection reports, service price estimates, and promotional discount vouchers right in the chat."
  },
  {
    icon: FaCheckDouble,
    title: "Real-Time Delivery & Read Status",
    desc: "Track whether your WhatsApp reminder was delivered, read, or if the customer responded with an appointment request."
  }
];

export default function SRWhatsAppIntegration() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            WhatsApp Integration
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Seamless WhatsApp Communication with <GradientUnderline>Your Workshop Clients</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            WhatsApp achieves over 95% open rates in India. Deliver service due alerts directly to where your customers read their messages every day.
          </p>

          <div className="space-y-6">
            {srWhatsAppFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{feat.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side WhatsApp Preview Mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-white space-y-4 max-w-md mx-auto w-full">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs text-white">
              GS
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">GarageSaarthi Service Bot</h4>
              <p className="text-[10px] text-emerald-400">Verified Business Account</p>
            </div>
          </div>

          <div className="bg-slate-800/90 rounded-2xl p-4 space-y-2 text-xs border border-slate-700/60 font-sans">
            <p className="text-slate-200">
              🚗 <strong>Dear Suresh Mehta,</strong>
            </p>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Your <strong>Honda City (GJ 05 CD 5678)</strong> is due for its 6-Month Periodic Maintenance Service. Regular oil & filter changes protect your engine performance.
            </p>
            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700 text-[10px] space-y-1">
              <span className="text-amber-400 font-bold block">🎁 Special Offer: 15% OFF Labor Charge</span>
              <span className="text-slate-400 block">Valid for bookings made this week!</span>
            </div>
            <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-700">
              <span>Sent at 10:30 AM</span>
              <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                <FaCheckDouble /> Read
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
