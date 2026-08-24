import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const alertPoints = [
  {
    title: "Track Warranty Maintenance Due",
    desc: "GarageSaarthi calculates future coating checkup dates based on the customer's average coating date or last visit details, organizing your outbound list.",
  },
  {
    title: "Automate WhatsApp Service Alerts",
    desc: "Send polite, automated WhatsApp reminders containing the coating model and service due details directly to your customers, encouraging repeat visits.",
  },
  {
    title: "Send Special Offers and Promotions",
    desc: "Promote seasonal paint corrections, monsoon detailing checkups, or special alloy wheel cleaning deals to inactive customer lists to bring them back.",
  },
];

export default function CDServiceAlerts() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual block - Left Column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3 mb-4">
              WhatsApp Alert Simulation
            </h4>
            <div className="bg-white border border-slate-200/40 rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="text-[10px] font-bold text-slate-800">To: Ramesh Malaviya</span>
                <span className="text-[9px] text-slate-400">Scheduled: 12:00 PM</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed italic">
                "Hello Ramesh, your car (MH-12-XX-5678) is due for its yearly ceramic coating checkup on 30th July. Book your slot today at Gloss Detailing Studio! - Powered by GarageSaarthi"
              </p>
              <div className="flex justify-end pt-1">
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full">
                  Ready to Send
                </span>
              </div>
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Customer Retention
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Bring Coating Customers Back with <GradientUnderline>Timely Service Alerts</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Coating services require annual inspections and wash follow-ups. Set automated reminders on WhatsApp to keep customers coming back.
            </p>

            <div className="space-y-4 pt-2">
              {alertPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <FaCheckCircle className="text-primary w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-0.5">{point.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-normal">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/features/service-reminders/"
                className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
              >
                Explore Service Alerts <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
