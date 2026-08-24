import React from "react";
import { FaPaperPlane, FaReceipt, FaTools, FaCheckCircle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const waMessagingTypes = [
  {
    icon: FaTools,
    title: "Estimates & Job Cards",
    desc: "Send itemized repair estimates with parts breakdown, labor charges, and digital signature requests."
  },
  {
    icon: FaReceipt,
    title: "GST / Non-GST Invoices",
    desc: "Share PDF invoices with tax breakdown, warranty terms, and clickable online payment buttons."
  },
  {
    icon: FaCheckCircle,
    title: "Ready For Delivery Alerts",
    desc: "Notify vehicle owners when washing and quality inspection are completed and total bill amount is ready."
  },
  {
    icon: FaPaperPlane,
    title: "Festive & Seasonal Offers",
    desc: "Broadcast monsoon service packages, Diwali discounts, and free AC checkup offers to all past clients."
  }
];

export default function WAMessagingTypes() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Message Categories
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Smart Templates for Every <GradientUnderline>Workshop Need</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Pre-approved official WhatsApp message templates formatted with your garage logo, address, and phone numbers.
          </p>

          <div className="space-y-6">
            {waMessagingTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{type.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Visual WhatsApp Chat Mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-white space-y-4 max-w-md mx-auto w-full">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs text-white">
              GS
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Shree Ram Auto Garage</h4>
              <p className="text-[10px] text-emerald-400">Verified Workshop Account</p>
            </div>
          </div>

          <div className="bg-slate-800/90 rounded-2xl p-4 space-y-2 text-xs border border-slate-700/60 font-sans">
            <p className="text-slate-200">
              🛠️ <strong>Hi Rajesh Patel,</strong>
            </p>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Your vehicle <strong>Maruti Suzuki Swift (GJ 06 AB 9876)</strong> is ready for pickup after general servicing & brake pad replacement.
            </p>
            <div className="bg-slate-900/70 p-3 rounded-xl border border-slate-700 text-[10px] space-y-1.5">
              <div className="flex justify-between font-bold text-white">
                <span>Total Amount Due:</span>
                <span className="text-emerald-400">₹3,450.00</span>
              </div>
              <span className="text-slate-400 block">Invoice #INV-4092 attached (PDF)</span>
            </div>
            <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-700">
              <span>Sent via GarageSaarthi</span>
              <span className="text-emerald-400 font-semibold">✓✓ Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
