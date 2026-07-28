import React from "react";
import { FaGoogle, FaWhatsapp, FaQrcode, FaCheckCircle, FaStar } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const crReviewChannels = [
  {
    icon: FaGoogle,
    title: "Direct Google Profile Deep Link",
    desc: "Bypasses extra search steps and opens the official Google rating popup on mobile instantly."
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Message Templates",
    desc: "Pre-crafted friendly thank-you messages formatted with garage branding and review link."
  },
  {
    icon: FaQrcode,
    title: "Counter QR Standees",
    desc: "Print high-quality QR standees for your customer waiting area and payment desk."
  },
  {
    icon: FaCheckCircle,
    title: "Real-Time Rating Alerts",
    desc: "Get notified immediately when new positive reviews are submitted by your customers."
  }
];

export default function CRReviewChannels() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Features */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Multi-Channel Collection
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            Collect Reviews Across <GradientUnderline>Multiple Touchpoints</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            Make giving feedback effortless for every car and bike owner visiting your workshop.
          </p>

          <div className="space-y-6">
            {crReviewChannels.map((chan, idx) => {
              const Icon = chan.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{chan.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{chan.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Visual Review Card Mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-white space-y-4 max-w-md mx-auto w-full">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center font-bold text-xs text-white">
              G
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Google Business Profile</h4>
              <p className="text-[10px] text-amber-400">Apex Auto Garage • 4.9 ★★★★★ (240+ reviews)</p>
            </div>
          </div>

          <div className="bg-slate-800/90 rounded-2xl p-4 space-y-3 text-xs border border-slate-700/60 font-sans">
            <p className="text-slate-200">
              🌟 <strong>How was your experience at Apex Auto Garage?</strong>
            </p>
            <div className="flex justify-center gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="w-6 h-6 text-amber-400 cursor-pointer hover:scale-110 transition-transform" />
              ))}
            </div>
            <p className="text-[11px] text-slate-300 text-center leading-relaxed">
              "Great service! Quick AC repair & transparent pricing. Highly recommended!"
            </p>
            <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-700">
              <span>Verified Customer Feedback</span>
              <span className="text-amber-400 font-semibold">Posted on Google Maps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
