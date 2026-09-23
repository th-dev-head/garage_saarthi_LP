import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaShieldAlt, FaQrcode, FaLock, FaHistory } from "react-icons/fa";

export default function GPDefinition() {
  const highlights = [
    { title: "🔒 Zero Drive-Away Risk", desc: "Unpaid or unauthorized vehicles are strictly blocked at gate", color: "text-primary" },
    { title: "📱 Zero-Login Guard Scan", desc: "Security guards scan QR on any smartphone camera in 2s", color: "text-orange-600" },
    { title: "🖨️ Multi-Format Printing", desc: "2-inch, 3-inch thermal slip rolls & standard A4 formats", color: "text-emerald-600" },
    { title: "📜 Immutable Exit Ledger", desc: "Guard name, exit time & vehicle log stored securely forever", color: "text-amber-600" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
              Workshop Security &amp; Gate Pass Management
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
              What is an Automated <GradientUnderline>Digital Workshop Gate Pass?</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              <strong>Garage Gate Pass Software</strong> is a security clearance and vehicle release verification system designed specifically for auto repair workshops, service centers, and bodyshop garages.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When a repair job card is completed and billing settled, the cashier or manager issues a digital Gate Pass with a unique cryptographic QR token. Security guards at the workshop exit gate scan the QR code to verify vehicle registration, customer details, and payment clearance in real time before raising the barrier.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Why Auto Workshops Need Digital Gate Passes:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-primary/40 transition-colors">
                  <span className={`${item.color} font-bold block mb-1 text-sm`}>{item.title}</span>
                  <span className="text-slate-600 leading-snug block">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
